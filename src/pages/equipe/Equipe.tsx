const equipe = [
  {
    nome: "Cauã Rocha Pereira",
    cargo: "Desenvolvedor Back-End",
    imagem: "https://avatars.githubusercontent.com/u/90944112?v=4",
    linkedin: "https://www.linkedin.com/in/c-rocha7/",
    foto: "https://media.licdn.com/dms/image/v2/D4D16AQHDIpYqCuXblQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1681579791852?e=1746057600&v=beta&t=PvZD0UHifT4x3gmEXdLuHcb38WKqQ1ZJoR3f-i-OPw4",
    github: "https://github.com/c-rocha7",
  },
  {
    nome: "Diego Rodrigues do Nascimento",
    cargo: "Desenvolvedor Front-End",
    imagem: "https://avatars.githubusercontent.com/u/91500024?v=4",
    linkedin:
      "https://www.linkedin.com/in/diego-rodrigues-do-nascimento-b6a7641a3/",
    foto: "https://media.licdn.com/dms/image/v2/D4E16AQG4tqiJreZRvQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1724109909395?e=1746057600&v=beta&t=2YOMFHom0Fb8xeRU2RUmt04dOnxFCUSAozq8CsRTuTU",
    github: "https://github.com/diego1999dd",
  },
  {
    nome: "Eliseu Francisco de souza",
    cargo: "Desenvolvedor Front-End",
    imagem:
      "https://media.licdn.com/dms/image/v2/D4D03AQF70utVDgdVjQ/profile-displayphoto-shrink_200_200/B4DZN4j456HUAY-/0/1732894494914?e=1746057600&v=beta&t=4X-_CLKOzFC61OtjSuBScgqKvLziexyHgmjQ567bPms",
    linkedin: "https://www.linkedin.com/in/eliseu-souza/",
    foto: "https://media.licdn.com/dms/image/v2/D4D16AQFSR7wc7RYqUQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1727702785010?e=1746057600&v=beta&t=cHfNvRMBBeonIpLmOhxBDe8NCJCePeUACGM4ik81FEk",
    github: "https://github.com/EliseuZeu",
  },
  {
    nome: "Ianka Lopes",
    cargo: "Desenvolvedora Front-End",
    imagem: "https://avatars.githubusercontent.com/u/177789659?v=4",
    linkedin: "https://www.linkedin.com/in/iankalps",
    foto: "https://media.licdn.com/dms/image/v2/D4D16AQFl22VXtXnWxg/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1738522790321?e=1746057600&v=beta&t=-mG57vaJ5A1zkV37qZp5MYr_GOi4ULpN6CzVctdQO5k",
    github: "https://github.com/IankaLps",
  },
  {
    nome: "Jessica Rosário",
    cargo: "Desenvolvedora Front-End",
    imagem: "https://avatars.githubusercontent.com/u/171865716?v=4",
    linkedin: "https://www.linkedin.com/in/jessica-rosario-/",
    foto: "https://media.licdn.com/dms/image/v2/D4D16AQG4WEm-jJ47hQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1738195942213?e=1746057600&v=beta&t=z7bU1t9FIWNlnqA9fdTWkha4VE9M4fkxc7lYscGvFLc",
    github: "https://github.com/Madsik92",
  },
  {
    nome: "Jonas Gomes",
    cargo: "Scrum Master",
    imagem: "https://avatars.githubusercontent.com/u/154485867?v=4",
    linkedin: "https://www.linkedin.com/in/jonas-neto/",
    foto: "https://media.licdn.com/dms/image/v2/D4D16AQG6X2RLTgb3NA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1722538971876?e=1746057600&v=beta&t=LCKY-X4P8dQyQe1Y7kIEW6aXqNoikCxwPjOFsiZEyGc",
    github: "https://github.com/JunoPrice",
  },
  {
    nome: "Josiane Fermao",
    cargo: "Desenvolvedora Front-End",
    imagem:
      "https://media.licdn.com/dms/image/v2/D4D03AQEIOVeAt6ZiJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732912950413?e=1746057600&v=beta&t=PRV629UUglQzbrVU6rSceHBQG7uOCgk7lTqzRMqj64U",
    linkedin: "https://www.linkedin.com/in/josiane-fermao/",
    foto: "https://media.licdn.com/dms/image/v2/D4D16AQF96QLFZ16fmQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1737646764327?e=1746057600&v=beta&t=NrqSnnJP3GDo7UzNS6oD9wZuw1QOPZNSKyHWFI-1YBM",
    github: "https://github.com/josifermaodev",
  },
];

function Equipe() {
  return (
    <>
      <div className="flex justify-center items-center w-full flex-col px-4">
        <div className="container text-3xl pt-5 text-center mb-10">
          <h1 className="mt-10">
            Equipe de desenvolvimento da
            <span className="pl-2 text-[#4D4AEA] font-bold">2Connect</span>
          </h1>
        </div>

        <div
          className="container mx-auto justify-center items-center
           max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[auto,auto,auto] gap-8 mb-10"
        >
          {equipe.map((membro, index) => (
            <div
              key={index}
              className="rounded-bl-2xl rounded-br-2xl w-full h-80 mx-1 m-2 overflow-hidden mt-10 drop-shadow-[6px_6px_15px_rgba(0,0,0,0.4)]"
            >
              <img
                src={membro.foto}
                alt="Foto do Background"
                className="absolute top-0 rounded-tr-2xl rounded-tl-2xl"
              />

              <img
                className="flex justify-center rounded-full w-50 h-50 border-8 border-white relative z-10"
                src={membro.imagem}
                alt={membro.nome}
              />

              <div
                className="relative mt-[-6rem] h-80 flex flex-col bg-white
       justify-center top-[-11px] md:top-[-11px]"
              >
                <div className="absolute top-1 right-[-70px] gap-6 flex w-50 mt-5">
                  <a href={membro.linkedin} target="_blank">
                    <img
                      src="images/linkedin 1.svg"
                      alt=""
                      className="transition-transform duration-300 hover:-translate-y-3"
                    />
                  </a>
                  <a href={membro.github} target="_blank">
                    <img
                      src="images/github 1.svg"
                      alt=""
                      className="transition-transform duration-300 hover:-translate-y-3"
                    />
                  </a>
                </div>
                <div className="ml-5 mb-5 gap-2 text-lg">
                  <h2 className="font-semibold">{membro.nome}</h2>
                  <p className="">{membro.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Equipe;

/*
const equipe = [
  {
    nome: "Cauã Rocha Pereira",
    cargo: "Desenvolvedor Back-End",
    imagem: "https://avatars.githubusercontent.com/u/90944112?v=4",
    linkedin: "https://www.linkedin.com/in/c-rocha7/",
    github: "https://github.com/c-rocha7",
  },
  {
    nome: "Diego Rodrigues do Nascimento",
    cargo: "Desenvolvedor Front-End",
    imagem: "https://avatars.githubusercontent.com/u/91500024?v=4",
    linkedin:
      "https://www.linkedin.com/in/diego-rodrigues-do-nascimento-b6a7641a3/",
    github: "https://github.com/diego1999dd",
  },
  {
    nome: "Eliseu Francisco de souza",
    cargo: "Desenvolvedor Front-End",
    imagem:
      "https://media.licdn.com/dms/image/v2/D4D03AQF70utVDgdVjQ/profile-displayphoto-shrink_200_200/B4DZN4j456HUAY-/0/1732894494914?e=1746057600&v=beta&t=4X-_CLKOzFC61OtjSuBScgqKvLziexyHgmjQ567bPms",
    linkedin: "https://www.linkedin.com/in/eliseu-souza/",
    github: "https://github.com/EliseuZeu",
  },
  {
    nome: "Ianka Lopes",
    cargo: "Desenvolvedora Front-End",
    imagem: "https://avatars.githubusercontent.com/u/177789659?v=4",
    linkedin: "https://www.linkedin.com/in/iankalps",
    github: "https://github.com/IankaLps",
  },
  {
    nome: "Jessica Rosário",
    cargo: "Desenvolvedora Front-End",
    imagem: "https://avatars.githubusercontent.com/u/171865716?v=4",
    linkedin: "https://www.linkedin.com/in/jessica-rosario-/",
    github: "https://github.com/Madsik92",
  },
  {
    nome: "Jonas Gomes",
    cargo: "Scrum Master",
    imagem: "https://avatars.githubusercontent.com/u/154485867?v=4",
    linkedin: "https://www.linkedin.com/in/jonas-neto/",
    github: "https://github.com/JunoPrice",
  },
  {
    nome: "Josiane Fermao",
    cargo: "Desenvolvedora Front-End",
    imagem:
      "https://media.licdn.com/dms/image/v2/D4D03AQEIOVeAt6ZiJg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732912950413?e=1746057600&v=beta&t=PRV629UUglQzbrVU6rSceHBQG7uOCgk7lTqzRMqj64U",
    linkedin: "https://www.linkedin.com/in/josiane-fermao/",
    github: "https://github.com/josifermaodev",
  },
];

function Equipe() {
  return (
    <>
      <div className="flex justify-center items-center w-full flex-col px-4">
        <div className="container text-3xl pt-5 text-center mb-10">
          <h1 className="mt-10">
            Equipe de desenvolvimento da
            <span className="pl-2 text-[#4D4AEA] font-bold">2Connect</span>
          </h1>
        </div>

        <div
          className="container mx-auto justify-center items-center
           max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[auto,auto,auto] gap-8 mb-10"
        >
          {equipe.map((membro, index) => (
            <div
              key={index}
              className="rounded-bl-2xl rounded-br-2xl w-full h-80 mx-1 m-2 overflow-hidden mt-10 drop-shadow-[6px_6px_15px_rgba(0,0,0,0.4)]"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4E16AQG4tqiJreZRvQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1724109909395?e=1746057600&v=beta&t=2YOMFHom0Fb8xeRU2RUmt04dOnxFCUSAozq8CsRTuTU"
                alt=""
                className="absolute top-0"
              />

              <img
                className="flex justify-center rounded-full w-50 h-50 border-8 border-[#F0F3FF] relative z-10"
                src={membro.imagem}
                alt={membro.nome}
              />

              <div
                className="relative mt-[-6rem] h-80 flex flex-col bg-white
       justify-center rounded-tr-2xl "
              >
                <div className="absolute top-1 right-[-70px] gap-6 flex w-50 mt-5">
                  <a href={membro.linkedin} target="_blank">
                    <img
                      src="images/linkedin 1.svg"
                      alt=""
                      className="transition-transform duration-300 hover:-translate-y-3"
                    />
                  </a>
                  <a href={membro.github} target="_blank">
                    <img
                      src="images/github 1.svg"
                      alt=""
                      className="transition-transform duration-300 hover:-translate-y-3"
                    />
                  </a>
                </div>
                <div className="ml-5 mb-5 gap-2">
                  <p className="font-semibold">{membro.nome}</p>
                  <p className="">{membro.cargo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Equipe;
*/
