const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dfa4e18038msh4aa9287e2642c94p170052jsna12e66d59432',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData (UrlApi) {
  const response = await fetch(UrlApi,options);
  const data = await response.json();
  return data;
};

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
        >
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')}
    `;
    content.innerHTML = view;
  } catch (err) {
    console.log(err);
  }
})();

//slice permite manejar la cantidad de elementos a retornar en este casa solo 4, con join se los une