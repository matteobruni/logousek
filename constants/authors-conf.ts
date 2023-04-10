type AuthorConfType = {
  key: string;
  name: string;
  role: {
    name: string;
    color: string;
  }[];
  aboutAuthor: string;
}[]


const AUTHORS_CONF: AuthorConfType = [
  {
    key: 'DanKorčák',
    name: 'Dan Korčák',
    role: [{ name: 'Bussiness analýza', color: 'red' }],
    aboutAuthor:
      'Dan se specializuje na formulování bussiness požadavků a byl pověřen sepsáním bussiness modelu pro logopedickou aplikaci.'
  },
  {
    key: 'VeronikaPouchova',
    name: 'Veronika Pouchová',
    role: [{ name: 'Analýza požadavků na apliakci', color: 'red' }],
    aboutAuthor:
      'Verča přišla s nápadem vytvoření aplikace pro předškolní děti, která by se využívala v rámci logopedické prevence. Navrhla jednotlivé hry, které rozvíjí dílčí oblasti.'
  },
  {
    key: 'PetrHolcak',
    name: 'Petr Holčák',
    role: [{ name: 'Vývoj', color: 'green' }, { name: 'Návrh systému', color: 'blue' }],
    aboutAuthor:
      'Petr se zaměřuje na vývoj aplikace. Jeho práce zahrnuje nejen programování, ale také sepsání aplikačního modelu.'
  }
]

export default AUTHORS_CONF