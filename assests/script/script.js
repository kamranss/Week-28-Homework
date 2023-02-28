

function content_style(){
    // h3_content.value = "";
    // p_content.value = "";
    let content = document.getElementById("content");
    content.style.opacity = "1";

}

let buttons = Array.from(document.querySelectorAll(".btn"));
let h3 = document.getElementById("h3_content");
let p = document.getElementById("p_content");

const h3_con1 = "London";
const h3_con2 = "Paris";
const h3_con3 = "Tokyo";

const p_con1 = "London is the capital city of England.";
const p_con2 = "Paris is the capital of France.";
const p_con3 = "Tokyo is the capital of Japan.";


buttons.forEach(btn=>{
    btn.addEventListener("click", function(){
        // clickedBox?clickedBox.
        let buttons_data_id = btn.getAttribute("data-id")

        switch (buttons_data_id) {
            case "london":
                h3.innerText = h3_con1
                p.innerText = p_con1
                break;
            case "paris":
                h3.innerText = h3_con2;
                p.innerText = p_con2;
                break;
            case "tokyo":
                h3.innerText = h3_con3;
                p.innerText = p_con3;
        
            default:
                break;
        }
        content_style();
    })
})

