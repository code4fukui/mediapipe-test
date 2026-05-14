# mediapipe-test

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A collection of real-time, browser-based computer vision demos powered by Google's MediaPipe and TensorFlow.js. This repository explores various applications, from simple landmark detection to creative visualizations and interactive tools.

## Demos

All demos run directly in your web browser. Click the links below to try them live.

| Demo | Description | Live Link |
| :--- | :--- | :--- |
| **Holistic Tracking** | Combines face, pose, and hand tracking for a full-body analysis. | [holistic.html](https://code4fukui.github.io/mediapipe-test/holistic.html) |
| **Advanced Face Mesh** | Features a VTuber-style face mask, virtual eyeglasses, and eye gaze tracking. | [facemesh-mesh.html](https://code4fukui.github.io/mediapipe-test/facemesh-mesh.html) |
| **Face Mesh** | Renders the standard 478-point face landmark mesh. | [facemesh.html](https://code4fukui.github.io/mediapipe-test/facemesh.html) |
| **Face Detection** | Draws bounding boxes around detected faces. | [facedetection.html](https://code4fukui.github.io/mediapipe-test/facedetection.html) |
| **Hand Tracking** | Detects 21 landmarks per hand and their connections. | [hands.html](https://code4fukui.github.io/mediapipe-test/hands.html) |
| **Finger Counter** | Counts the number of extended fingers in real-time. | [hands-count.html](https://code4fukui.github.io/mediapipe-test/hands-count.html) |
| **Pose Estimation** | Detects 33 body landmarks and their connections for a single person. | [pose.html](https://code4fukui.github.io/mediapipe-test/pose.html) |
| **Multi-Person Pose** | Uses COCO-SSD to detect multiple people, then runs pose estimation on each. | [pose-multi.html](https://code4fukui.github.io/mediapipe-test/pose-multi.html) |
| **Posture Analysis** | Scores posture straightness based on backbone alignment. | [pose-straightup.html](https://code4fukui.github.io/mediapipe-test/pose-straightup.html) |
| **Stick Figure Pose** | Visualizes body pose as a simplified stick figure. | [pose-stickfig.html](https://code4fukui.github.io/mediapipe-test/pose-stickfig.html) |
| **Face Overlay** | Overlays an image on the face, tracking head movement. (Image: [CyberSakura](https://cybersakura.jp/)) | [intercept.html](https://code4fukui.github.io/mediapipe-test/intercept.html) |
| **Selfie Segmentation** | Separates the user from the background for masking or replacement. | [selfiesegmentation.html](https://code4fukui.github.io/mediapipe-test/selfiesegmentation.html) |
| **Object Detection** | Identifies and labels objects using the TensorFlow.js COCO-SSD model. | [objectdetection.html](https://code4fukui.github.io/mediapipe-test/objectdetection.html) |

## Features

-   **Real-Time Landmark Detection:** Utilizes MediaPipe for high-fidelity detection of Face Mesh (478 landmarks), Pose (33 landmarks), and Hands (21 landmarks per hand).
-   **Multi-Person Pose Estimation:** Combines TensorFlow.js COCO-SSD for person detection with MediaPipe Pose for individual landmark analysis.
-   **Creative Overlays & Visualizations:**
    -   VTuber-style avatar rendering with colored polygons for the face, eyes, and lips.
    -   Virtual eyeglasses that realistically fit and move with the user's face.
    -   Stick figure representation of body pose.
-   **Interactive Applications:**
    -   A functional finger counter based on landmark geometry.
    -   A posture analysis tool that provides a real-time score.
    -   Eye gaze tracking calculated from iris and eye corner landmarks.
-   **Image Processing:** Background removal and replacement using Selfie Segmentation.

## Requirements

A modern web browser with support for MediaPipe and TensorFlow.js.