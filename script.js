let innerUploadImage=document.querySelector(".inner-upload-image");
let input=innerUploadImage.querySelector("input");
let image=document.querySelector("#image")
let loading=document.querySelector("#loading")
let btn=document.querySelector("button")
let text=document.querySelector("#text")
let output=document.querySelector(".output")
const API_KEY = "AIzaSyBlxHQL5-RbCIIRALBuspHVGa5NVyBpzy4";
const Api_url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`
let fileDetails={
    mime_type:null,
    data:null
}
async function generateResponse() {
    if (!fileDetails.data) {
        alert("Please upload an image first!");
        return;
    }

    const RequestOption = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        { text: "Solve this math problem step by step" },
                        {
                            inline_data: {
                                mime_type: fileDetails.mime_type,
                                data: fileDetails.data
                            }
                        }
                    ]
                }
            ]
        })
    };

    try {
        let response = await fetch(Api_url, RequestOption);
    let data = await response.json();

    let apiResponse = data.candidates[0].content.parts[0].text

    // Convert bold markdown
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")

    // Convert headings
    .replace(/### (.*?)/g, "<h3>$1</h3>")

    // Convert bullet points
    .replace(/\* (.*?)/g, "<li>$1</li>")

    // Fix line breaks
    .replace(/\n/g, "<br>")

    // Improve inline math rendering
    .replace(/\$(.*?)\$/g, "\\($1\\)")   // inline math
    .replace(/\$\$(.*?)\$\$/g, "\\[$1\\]") // block math

    .trim();

    text.innerHTML = apiResponse;

if (window.MathJax) {
    MathJax.typesetPromise([text]);
}
    output.style.display = "block";
    } catch (error) {
        console.log(e)
    }
    finally{
loading.style.display="none"
    }
}


input.addEventListener("change",(e)=>{
    const file=input.files[0]
    if(!file) return
    let reader=new FileReader()
    reader.onload=(e)=>{
        let base64data=e.target.result.split(",")[1]
        fileDetails.mime_type=file.type;
        fileDetails.data=base64data

         innerUploadImage.querySelector("span").style.display="none"
    innerUploadImage.querySelector("#icon").style.display="none"
    image.style.display="block"
    image.src=`data:${fileDetails.mime_type};base64,${fileDetails.data}`
    output.style.display="none"

    }
   
    reader.readAsDataURL(file)
})
btn.addEventListener("click",()=>{
    loading.style.display="block"
    generateResponse()
})



innerUploadImage.addEventListener("click",()=>{
    input.click()
})
