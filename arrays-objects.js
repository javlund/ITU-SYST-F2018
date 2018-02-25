const ulv = {
  navn: 'Ulv',
  latin: 'Canis Lupus',
  lyd: () => 'vov vov'
};

const bjørn = {
  navn: 'Bjørn',
  latin: 'Ursus Arctos',
  lyd: () => 'grrrr'
};

const ræv = {
  navn: 'Ræv',
  latin: 'Vulpes Vulpes',
  lyd: () => '...hvad siger ræven?'
};

function hvadSigerDyrene(dyreListe) {
  dyreListe.forEach(dyr => {
    console.log(dyr.navn + ' siger ' + dyr.lyd());
  });
  console.log(''); // Blank linje
}

const rovdyr = [ulv, bjørn, ræv];

hvadSigerDyrene(rovdyr);

const grævling = {
  navn: 'Grævling',
  latin: 'Meles Meles',
  lyd: () => 'knas knas'
};

rovdyr.push(grævling);

hvadSigerDyrene(rovdyr);

rovdyr.splice(1, 1);

hvadSigerDyrene(rovdyr);