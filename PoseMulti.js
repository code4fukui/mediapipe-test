/* need import to html
<script src="https://cdn.jsdelivr.net/npm/@mediapipe/pose/pose.js" crossorigin="anonymous"></ script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></ script>
<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd"></ script>
*/
export class PoseMulti {
  constructor() {
    this.pose = new Pose({ locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}` });
    // Load the COCO-SSD model
    cocoSsd.load().then(loadedModel => this.model = loadedModel);
    this.opt = {};
  }
  setOptions(opt) {
    this.opt = opt;
    this.pose.setOptions(opt);
  }
  async send({ image }) {
    if (!this.model) return { people: [] };
    const predictions = await this.model.detect(image);
    const people = predictions.filter(pred => pred.class === 'person');
    people.sort((a, b) => a.bbox.width - b.bbox.height);
    if (this.opt.maxNumPoses && people.length > this.opt.maxNumPoses) people.length = this.opt.maxNumPoses;

    const res = [];
    for (const person of people) {
      const [x, y, width, height] = person.bbox;

      const personImage = document.createElement("canvas");
      personImage.width = width;
      personImage.height = height;
      const g = personImage.getContext("2d");
      g.drawImage(image, x, y, width, height, 0, 0, width, height);
      const imageData = g.getImageData(0, 0, width, height);
      const results = await this.waitPose(imageData);
      if (!results || !results.poseLandmarks) continue;

      person.poseLandmarks = results.poseLandmarks;
      res.push(person);
    }
    if (this.onresults) this.onresults({ people: res });
    return res;
  }
  onResults(f) {
    this.onresults = f;
  }
  async waitPose(image) {
    return new Promise(async (resolve) => {
      this.pose.onResults(resolve);
      this.pose.send({ image });
    });
  }
}
