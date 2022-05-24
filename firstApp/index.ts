import axios from 'axios';

const url:string = 'https://stores-tests-api.herokuapp.com';

interface GitResponse {
  GitHub: string,
  swagger: string
}

const logResponse = (github: string, swagger: string) => {
  console.log(`Github is ${github}, swagger on url ${swagger}`);
};

axios.get(url).then((response) => {
  const gitHubResponse: GitResponse = response.data;
  const githubUrl = gitHubResponse.GitHub;
  const swaggerUrl = gitHubResponse.swagger;
  logResponse(githubUrl, swaggerUrl);
});
