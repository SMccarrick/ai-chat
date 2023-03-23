import { Configuration, OpenAIApi } from "openai";
import { PRIVATE_OPENAI_API_KEY } from '$env/static/private';

const configuration = new Configuration({
    organization: "org-xoXZGnQOkRKGq7Xh8vUC89sX",
    apiKey: PRIVATE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export default openai;