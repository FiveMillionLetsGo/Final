<!---------- install list ------------>
npm install concurrently --save-dev
npm install react-router-dom
pip install SpeechRecognition
pip install scipy
pip install pyaudio
pip install setuptools
pip install opencv-python

<!-- package.json 파일의 "scripts"수정 -->  
[before]
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
}
[after]
"scripts": {
    "start": "concurrently \"npm run start-react\" \"npm run start-python\"",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "start-react": "react-scripts start",
    "start-python": "python3 src/age_detection/main.py"
  }