const COHERE_API_KEY = "Z1wxIANl1VNVHA4U9NekVQPLQwH2q0KnGTTJD4d5";
const COHERE_API_GENERATE_URL = "https://api.cohere.ai/generate";
const COHERE_API_DETECT_LANGUAGE_URL = "https://api.cohere.ai/detect-language";

import CustomSelect from "../components/CustomSelect";

/**
curl --location --request POST 'https://api.cohere.ai/v1/classify' \
  --header 'Authorization: BEARER Z1wxIANl1VNVHA4U9NekVQPLQwH2q0KnGTTJD4d5' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "model": "embed-english-v2.0",
    "inputs": [""],
    "examples": [{"text": "", "label": ""}, {"text": "", "label": ""}]
  }'
 */

export async function fixMyEnglish(input, language) {
    //var a = document.getElementById("first-badge").innerText;
    /**var b = document.getElementById("second-badge").innerText;

    if (a == "Inglés" && b == "Español") {
        var a = "English";
        var b = "Spanish";
    } else if (a == "Español" && b == "Inglés") {
        var a = "Spanish";
        var b = "English";
    }**/
    const data = {
        model: "xlarge",
        prompt: `This is a languaje translator, we have to translate "${input}" from Spanish to "${language}".

    --
    Prompt: "I like chocolate"
    completion: "Me encanta el chocolate"
    --
    Prompt: "She's a good friend of mine"
    completion: "Ella es una buena amiga mía"
    --
    Prompt: "El acceso a la información en internet plantea desafíos en cuanto a su veracidad y confiabilidad."
    completion: "Access to information on the internet poses challenges regarding its accuracy and reliability."
    --
    Prompt: "El aprendizaje a lo largo de la vida es esencial para mantenerse al día en un mundo en constante evolución."
    completion: "Lifelong learning is essential to stay updated in a constantly evolving world."
    --
    Prompt: "${input}"
    completion: `,
        max_tokens: 64,
        temperature: 0.2,
        k: 0,
        p: 1,
        frecuency_penalty: 0,
        presence_penalty: 0,
        stop_sequence: ["--"],
        return_likelihoods: "NONE",
    };

    const response = await fetch(COHERE_API_GENERATE_URL, {
        method: "POST",
        headers: {
            Authorization: `BEARER ${COHERE_API_KEY}`,
            "Content-Type": "application/json",
            "Cohere-Version": "2022-12-06",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());

    //return response.generations[0].text

    const { text } = response.generations[0];
    return text.split("\n")[0].replace("--", "").replaceAll('"', "").trim();
}

export async function prepareMyPrompt(language) {

    var prompt = `Write an email reply using a suitable format with the following topics: ;, The email is written by ; and goes to ;`;
    const data = {
        model: "xlarge",
        prompt: `
    This is a languaje translator from English to ${ language }.
    --
    Prompt: "children play ball"
    completion: "i bambini giocano a palla"
    --
    Prompt: "I saw a person behaving strangely in the park."
    completion: "Vi a una persona comportándose de forma extraña en el parque."
    --
    Prompt: "I saw a person behaving strangely in the park."
    completion: "Ik zag iemand zich vreemd gedragen in het park."  
    --
    Prompt: "I saw a person behaving strangely in the park."
    completion: "J'ai vu une personne qui se comportait bizarrement dans le parc. "  
        --
        Prompt: "${prompt}"
    completion: `,
        max_tokens: 64,
        temperature: 0,
        k: 0,
        p: 1,
        frecuency_penalty: 0,
        presence_penalty: 0,
        stop_sequence: ["--"],
        return_likelihoods: "NONE",
    };


    const response = await fetch(COHERE_API_GENERATE_URL, {
        method: "POST",
        headers: {
            Authorization: `BEARER ${ COHERE_API_KEY }`,
            "Content-Type": "application/json",
            "Cohere-Version": "2022-12-06",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());

    //return response.generations[0].text
    const { text } = response.generations[0];

    return text.split("\n")[0].replace("--", "").replaceAll('"', "").trim();
}

export async function generateAnEmail(input, lenght, language, sender, receiver) {
    //hacer un promiseall de dos llamadas
    //una para detectar el lenguaje
    //otra para generar el texto
    var promptFinal
    var sender = sender ? undefined : "John Doe"
    var receiver = receiver ? undefined : "Jane Doe"
        //const promesaInput = await fixMyEnglish(input, language);
    const promesaInput = new Promise((resolve, reject) => {
        resolve(fixMyEnglish(input, language));
    });

    //const promesaPrompt = await prepareMyPrompt(language);
    const promesaPrompt = new Promise((resolve, reject) => {
        resolve(prepareMyPrompt(language));
    });
    if (language !== "English") {
        await Promise.all([promesaInput, promesaPrompt]).then((values) => {
            var prompt = values[1].split(";")
            prompt = prompt.filter((item) => item !== "")
            promptFinal = prompt[0] + values[0] + prompt[1] + sender + prompt[2] + receiver
        });
    } else {
        const promesaInput = await fixMyEnglish(input, language);
        var prompt = "Write an email reply using a suitable format with the following topics: ;, The email is written by ; and goes to ";
        var prompt = prompt.split(";")
        prompt = prompt.filter((item) => item !== "")
        promptFinal = prompt[0] + promesaInput + prompt[1] + sender + prompt[2] + receiver
    }
    debugger
    const data = {
        model: "command",
        prompt: promptFinal,
        max_tokens: lenght,
        temperature: 0,
        k: 0,
        p: 1,
        frecuency_penalty: 0,
        presence_penalty: 0,
        stop_sequence: [],
        return_likelihoods: "NONE",
    };

    const response = await fetch(COHERE_API_GENERATE_URL, {
        method: "POST",
        headers: {
            Authorization: `BEARER ${ COHERE_API_KEY }`,
            "Content-Type": "application/json",
            "Cohere-Version": "2022-12-06",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());

    //return response.generations[0].text

    const { text } = response.generations[0];
    return text
}






/**

<
span className = "absolute inset-y-0 right-0 flex items-center pr-4" >
    <
    svg
className = "w-5 h-5"
xmlns = "http://www.w3.org/2000/svg"
viewBox = "0 0 20 20"
fill = "currentColor"
aria - hidden = "true" >
    <
    path
fillRule = "evenodd"
d = "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
clipRule = "evenodd" /
    >
    <
    /svg> <
    /span>
     --
        Prompt: "Write an email reply with the following premises with these topics: ; The email is written by ;  and goes to ; "
        completion: "Schreiben Sie eine E-Mail-Antwort mit den folgenden Voraussetzungen mit diesen Themen: ; Die E-Mail wird von ;  geschrieben und geht an ; "
        --
        Prompt: "Write an email reply with the following premises with these topics: ; The email is written by ;  and goes to ; "
        completion: "Ecrivez une réponse par email avec les prémisses suivantes dans ;  avec ces sujets : ; Le courriel est écrit par ;  et est destiné à ; "
         Prompt: "Write an email reply using a suitable format with the following topics: ;, The email is written by ;  and goes to ; "
    completion: "Escribe un correo electrónico de respuesta usando un formato adecuado con las siguientes premisas con estos temas: ;, El correo electrónico está escrito por ;  y va dirigido a ; "
        --
        Prompt: "Write an email reply using a suitable format with the following topics: ;, The email is written by ;  and goes to ; "
    completion: "Scrivete una mail di risposta utilizzando un formato adeguato con i seguenti argomenti: ;, L'email è scritta da ;  e va a ; "
        --*/