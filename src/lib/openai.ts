import { Configuration, OpenAIApi } from "openai";
import { PUBLIC_OPENAI_API_KEY } from '$env/static/public';

const configuration = new Configuration({
    organization: "org-xoXZGnQOkRKGq7Xh8vUC89sX",
    apiKey: PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export default openai;