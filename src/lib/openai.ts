import { Configuration, OpenAIApi } from "openai";
import { env } from '$env/dynamic/public';
const configuration = new Configuration({
    organization: "org-xoXZGnQOkRKGq7Xh8vUC89sX",
    apiKey: env.PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export default openai;