export default function Connect() {
  return fetch(`https://raw.githubusercontent.com/GoogleChromeLabs/chrome-for-testing/refs/heads/main/data/known-good-versions-with-downloads.json`, {
    method: 'GET',
    headers: {
      'Accept': 'application/vnd.github.v3.raw',
    },
  })
    .then(resp => resp.json())
    .then(data => {
      return data.versions.reverse();
    })
    .catch(err => {
      console.log(err);
      return false;
    });
}