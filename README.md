# 📘 Virtual Maths Teacher

A web-based AI-powered application that solves mathematical problems step-by-step from an uploaded image. This project uses **Google Gemini API**, **MathJax**, and a responsive frontend to deliver clear and formatted solutions.

---

## 🚀 Features

* 📸 Upload an image containing a math problem
* 🤖 AI-generated step-by-step solution
* 🧮 Mathematical expressions rendered using MathJax
* 🎨 Clean and responsive UI
* ⚡ Fast API response using Gemini

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **API:** Google Generative Language API (Gemini)
* **Math Rendering:** MathJax

---

## 📂 Project Structure

```
Virtual-Maths-Teacher/
│
├── index.html       # Main HTML file
├── style.css        # Styling file
├── script.js        # JavaScript logic
├── loading.gif      # Loading animation
├── san.svg          # Upload icon
└── README.md        # Project documentation
```

---

## ⚙️ How It Works

1. User uploads an image containing a math problem
2. Image is converted to Base64 format
3. Data is sent to Gemini API
4. API processes and returns a step-by-step solution
5. Output is formatted and displayed with MathJax

---

## 📸 Usage

1. Click on **Upload Image**
2. Select a math problem image
3. Click on **Answer**
4. View the solution with formatted equations

---

## 🔑 API Configuration

In `script.js`, replace the API key:

```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

⚠️ **Important:**
Do not expose your API key in public repositories. Use environment variables or backend integration for security.

---

## 📱 Responsive Design

* Works on desktop and mobile devices
* Adaptive layout using CSS media queries

---

## ⚠️ Known Issues

* Accuracy depends on image clarity
* Complex handwritten problems may not always be interpreted correctly
* API rate limits may apply

---

## 💡 Future Improvements

* Drag & drop image upload
* Camera capture support
* History of solved problems
* Multi-language support
* Voice explanation of solutions

---

## 🧑‍💻 Author

**Sannik Garai**
B.Tech CSE Student

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

