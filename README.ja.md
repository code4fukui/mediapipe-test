# mediapipe-test

GoogleのMediaPipeとTensorFlow.jsを活用した、ブラウザ上で動作するリアルタイム・コンピュータビジョンデモのコレクションです。このリポジトリでは、シンプルなランドマーク検出から、クリエイティブなビジュアライゼーション、インタラクティブなツールまで、さまざまなアプリケーションを探求しています。

## デモ

すべてのデモはWebブラウザ上で直接動作します。以下のリンクをクリックして、実際のデモをお試しください。

| デモ | 説明 | ライブリンク |
| :--- | :--- | :--- |
| **Holistic Tracking** | 顔、姿勢、手のトラッキングを組み合わせ、全身を分析します。 | [holistic.html](https://code4fukui.github.io/mediapipe-test/holistic.html) |
| **Advanced Face Mesh** | VTuber風のフェイスマスク、バーチャル眼鏡、視線トラッキング（アイトラッキング）機能を備えています。 | [facemesh-mesh.html](https://code4fukui.github.io/mediapipe-test/facemesh-mesh.html) |
| **Face Mesh** | 標準的な478点の顔ランドマークメッシュを描画します。 | [facemesh.html](https://code4fukui.github.io/mediapipe-test/facemesh.html) |
| **Face Detection** | 検出された顔を囲むバウンディングボックスを描画します。 | [facedetection.html](https://code4fukui.github.io/mediapipe-test/facedetection.html) |
| **Hand Tracking** | 片手につき21点のランドマークと、それらを結ぶ線を検出します。 | [hands.html](https://code4fukui.github.io/mediapipe-test/hands.html) |
| **Finger Counter** | 伸びている指の数をリアルタイムでカウントします。 | [hands-count.html](https://code4fukui.github.io/mediapipe-test/hands-count.html) |
| **Pose Estimation** | 単一の人物について、33点の身体ランドマークとそれらを結ぶ線を検出します。 | [pose.html](https://code4fukui.github.io/mediapipe-test/pose.html) |
| **Multi-Person Pose** | COCO-SSDを使用して複数人を検出した後、各人物に対して姿勢推定を実行します。 | [pose-multi.html](https://code4fukui.github.io/mediapipe-test/pose-multi.html) |
| **Posture Analysis** | 背骨の並びに基づいて、姿勢の良さ（まっすぐさ）をスコアリングします。 | [pose-straightup.html](https://code4fukui.github.io/mediapipe-test/pose-straightup.html) |
| **Stick Figure Pose** | 身体の姿勢をシンプルな棒人間として可視化します。 | [pose-stickfig.html](https://code4fukui.github.io/mediapipe-test/pose-stickfig.html) |
| **Face Overlay** | 頭の動きに追従して、顔の上に画像をオーバーレイ表示します。（画像: [CyberSakura](https://cybersakura.jp/)） | [intercept.html](https://code4fukui.github.io/mediapipe-test/intercept.html) |
| **Selfie Segmentation** | ユーザーを背景から分離し、マスキングや背景の置き換えを行います。 | [selfiesegmentation.html](https://code4fukui.github.io/mediapipe-test/selfiesegmentation.html) |
| **Object Detection** | TensorFlow.jsのCOCO-SSDモデルを使用して、物体を識別しラベル付けします。 | [objectdetection.html](https://code4fukui.github.io/mediapipe-test/objectdetection.html) |

## 特徴

- **リアルタイムのランドマーク検出:** MediaPipeを活用し、Face Mesh（478点のランドマーク）、Pose（33点のランドマーク）、Hands（片手につき21点のランドマーク）の高精度な検出を行います。
- **複数人の姿勢推定:** TensorFlow.jsのCOCO-SSDによる人物検出と、MediaPipe Poseによる個別のランドマーク解析を組み合わせています。
- **クリエイティブなオーバーレイとビジュアライゼーション:**
  - 顔、目、唇を色付きのポリゴンで描画するVTuber風アバターのレンダリング。
  - ユーザーの顔にリアルにフィットし、動きに追従するバーチャル眼鏡。
  - 身体の姿勢の棒人間による表現。
- **インタラクティブなアプリケーション:**
  - ランドマークの幾何学的配置に基づいた、実用的な指カウンター。
  - リアルタイムでスコアを算出する姿勢分析ツール。
  - 虹彩と目尻のランドマークから計算される視線トラッキング。
- **画像処理:** Selfie Segmentationを用いた背景の除去と置き換え。

## 必要条件

MediaPipeおよびTensorFlow.jsをサポートするモダンなWebブラウザ。
