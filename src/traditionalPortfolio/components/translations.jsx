
// translations.js
const translations = {
  sections: [
    { id: "about", en: "About", es: "Sobre mí" },
    { id: "experience", en: "Experience", es: "Experiencia" },
    { id: "education", en: "Education", es: "Educación" },
    { id: "projects", en: "Projects", es: "Proyectos" },
    { id: "skills", en: "Skills", es: "Habilidades" },
    { id: "certifications", en: "Certifications", es: "Certificaciones" },
    { id: "contact", en: "Contact", es: "Contacto" },
  ],
  About: {
    Intro: {
      en: (
        <>
          {" "}
          Hi, I'm <br />
          Daniel Echeveste
        </>
      ),
      es: (
        <>
          {" "}
          Hola, soy <br />
          Daniel Echeveste
        </>
      ),
    },
    Text: {
      en: (
        <>
          I am passionate about creative and interactive sites/apps and I enjoy
          working on them, using my skills in traditional development plus my
          knowledge in <span className="font-bold">WEBGL</span> and{" "}
          <span className="font-bold">SHADERS</span>, to create{" "}
          <span className="font-bold">unique</span> and{" "}
          <span className="font-bold">engaging</span> experiences for users.
          <br />I have experience in creating responsive and user-friendly{" "}
          <span className="font-bold">interfaces</span> as well as working in{" "}
          <span className="font-bold">backend development</span> for web and
          mobile applications.
          <br />I am also a <span className="font-bold">team player</span> and
          enjoy working in a collaborative environment,{" "}
          <span className="font-bold">quick learner</span>, and always looking
          for new challenges to improve my skills.
        </>
      ),
      es: (
        <>
          Me apasionan los sitios/aplicaciones creativas e interactivas y
          disfruto trabajando en ellas, utilizando mis habilidades en desarrollo
          tradicional además de mi conocimiento en{" "}
          <span className="font-bold">WEBGL</span> y{" "}
          <span className="font-bold">SHADERS</span>, para crear experiencias{" "}
          <span className="font-bold">únicas</span> y{" "}
          <span className="font-bold">atractivas</span> para los usuarios.
          <br />
          Tengo experiencia en la creación de interfaces{" "}
          <span className="font-bold">responsivas</span> y fáciles de usar, así
          como en el trabajo en{" "}
          <span className="font-bold">desarrollo backend</span> para
          aplicaciones web y móviles.
          <br />
          También soy un <span className="font-bold">jugador de equipo</span> y
          disfruto trabajando en un entorno colaborativo,{" "}
          <span className="font-bold">aprendo rápido</span>, y siempre busco
          nuevos desafíos para mejorar mis habilidades.
        </>
      ),
    },
  },

  Experience: {
    en: "Experience",
    es: "Experiencia",
    Ovan: {
      en: (
        <>
          Worked as a Full Stack Developer at Ovan Gmbh, where I developed and
          maintained web applications. Collaborated with cross-functional teams
          to design and implement new features, optimized application
          performance, and ensured code quality through code reviews.
          Contributed to the development of a scalable and secure web
          application that improved user experience and increased customer
          satisfaction.
        </>
      ),
      es: (
        <>
          Trabajé como Desarrollador Full Stack en Ovan Gmbh, donde desarrollé y
          mantuve aplicaciones web. Colaboré con equipos multifuncionales para
          diseñar e implementar nuevas funciones, optimicé el rendimiento de la
          aplicación y aseguré la calidad del código a través de revisiones de
          código. Contribuí al desarrollo de aplicaciones web escalables y
          seguras que mejoran la experiencia del usuario y aumentan la
          satisfacción
        </>
      ),
    },
    WSN: {
      en: (
        <>
          Created a comprehensive web application for a telecommunications
          company, enabling the countant to manage customer accounts, track
          payments, and generate invoices. improved customer service, and
          enhanced financial management.
        </>
      ),
      es: (
        <>
          Creé una aplicación web integral para una empresa de
          telecomunicaciones, que permite al contador gestionar las cuentas de
          los clientes, hacer un seguimiento de los pagos y generar facturas.
          mejoró el servicio al cliente y mejoró la gestión financiera.
        </>
      ),
    },
  },
  Education: {
    en: "Education",
    es: "Educación",
    ULPGC: {
      Name: {
        en: "Studies in Computer Engineering",
        es: "Estudios en Grado en Ingeniería Informática",
      },
      University: {
        en: "University of Las Palmas de Gran Canaria",
        es: "Universidad de Las Palmas de Gran Canaria",
      },
      Details: {
        en: (
          <>
            Two years of study in Computer Engineering at the University of Las
            Palmas de Gran Canaria (ULPGC). I acquired a solid foundation in
            computer science, programming, algorithms, and software development.
            I gained practical experience through various projects and courses,
            developing skills in problem solving, teamwork, and communication.
          </>
        ),
        es: (
          <>
            Dos años de estudios en Grado en Ingeniería Informática en la
            Universidad de Las Palmas de Gran Canaria (ULPGC). Adquirí una base
            sólida en informática, programación, algoritmos y desarrollo de
            software. Obtuve experiencia práctica a través de varios proyectos y
            cursos, desarrollando habilidades en resolución de problemas,
            trabajo en equipo y comunicación.
          </>
        ),
      },
    },
    Rincon: {
      Name: {
        en: "Multiplatform Application Development Hight Technician",
        es: "Tecnico superior en Desarrollo de Aplicaciones Multiplataforma",
      },
      University: {
        en: "El Rincon Study Center",
        es: "Centro de Estudios El Rincón",
      },
      Details: {
        en: (
          <>
            is a Higher Vocational Training Degree that trains professionals in
            the design, development and implementation of computer applications
            that work on different operating systems operating systems and
            devices. It is an official qualification with high demand in the job
            market and a high average starting salary, which prepares you to
            work as a mobile developer, software developer, database specialist
            or entrepreneur, using languages such as Java, Kotlin and specific
            tools for multi-platform development.
          </>
        ),
        es: (
          <>
            es un Grado Superior de Formación Profesional que forma a
            profesionales en el diseño, desarrollo e implementación de
            aplicaciones informáticas que funcionen en diferentes sistemas
            operativos y dispositivos. Es una titulación oficial con alta
            demanda laboral y un salario medio inicial elevado, que te prepara
            para trabajar como desarrollador móvil, de software, especialista en
            bases de datos o emprendedor, utilizando lenguajes como Java, Kotlin
            y herramientas específicas para el desarrollo multiplataforma.
          </>
        ),
      },
    },
  },
  Skills: {
    en: "Skills",
    es: "Habilidades",
    Frontend: {
      en: [
        ["TypeScript", "3 years"],
        ["React", "2 years"],
        ["Tailwind CSS", "2 years"],
        ["JavaScript", "2 years"],
        ["HTML5", "2 years"],
        ["CSS3", "2 years"],
      ],
      es: [
        ["TypeScript", "3 años"],
        ["React", "2 años"],
        ["Tailwind CSS", "2 años"],
        ["JavaScript", "2 años"],
        ["HTML5", "2 años"],
        ["CSS3", "2 años"],
      ],
    },
    Backend: {
      en: [
        ["PHP", "3 years"],
        ["Node.js", "2 years"],
        ["Express", "2 years"],
        ["MongoDB", "2 years"],
        ["SQL", "2 years"],
        ["REST APIs", "2 years"],
      ],
      es: [
        ["PHP", "3 años"],
        ["Node.js", "2 años"],
        ["Express", "2 años"],
        ["MongoDB", "2 años"],
        ["SQL", "2 años"],
        ["REST APIs", "2 años"],
      ],
    },
    SoftSkills: {
      en: [
        ["Comunication", "2 years"],
        ["Teamwork", "2 years"],
        ["Time Management", "2 years"],
        ["Problem Solving", "2 years"],
      ],
      es: [
        ["Comunicación", "2 años"],
        ["Trabajo en equipo", "2 años"],
        ["Gestión del tiempo", "2 años"],
        ["Resolución de problemas", "2 años"],
      ],
    },
  },
  Projects: {
    en: "Projects",
    es: "Proyectos",
    SeeMore: {
      en: "Go to Project",
      es: "Ver Proyecto",
    },
    ProjectList: [
      {
        title: "Weizenbaum Institute Site",
        description: {
          en: (
            <>
              <span className="font-bold">
                Worked in this Website as an Ovan Developer <br />
              </span>

            </>
          ),
          es: (
            <>
              <span className="font-bold">
                Trabajé en este proyecto como desarrollador de Ovan <br />
              </span>
            </>
          ),
        },
        technologies: [
          "Typo3",
          "Tailwind",
          "JS",
          "SCSS",
          "HTML",
          "Git",
          "Docker",
          "PHP",
        ],
        image: "/imgs/weizenbaum.png",
        gif: "/imgs/weizenbaum.gif",
        link: "https://www.weizenbaum-institut.de/en/",
      },
      {
        title: "ALSTOM Ecodesign Configurator",
        description: {
          en: (
            <>
              <span className="font-bold">
                Worked in this Website as an Ovan Developer <br />
              </span>
              The application was developed as a content management system,
              allowing editors to easily add content and media. To enable use
              without a database or web server, the application was made
              available offline The system was exhibited at InnoTrans, the
              world's largest trade fair for transport technology, in Berlin.
            </>
          ),
          es: (
            <>
            <span className="font-bold">
                Trabajé en este sitio web como desarrollador de Ovan<br />
              </span>
              La aplicación se desarrolló como un sistema de gestión de
              contenidos, lo que permite a los editores añadir fácilmente
              contenidos y media. Para poder utilizarla sin
              necesidad de una base de datos o un servidor web, la aplicación se
              diseñó para estar disponible sin conexión. El sistema se exhibió
              en InnoTrans, la feria comercial más grande del mundo dedicada a
              la tecnología del transporte, celebrada en Berlín. Traducción
              realizada con la versión gratuita del traductor DeepL.com
            </>
          ),
        },
        technologies: ["Next.js", "Tailwind", "Vercel"],
        image: "/imgs/Alstom-web-1.webp",
        gif: "/imgs/Alstom.gif",
        link: "https://daniel-echeveste.github.io/ShaderLab",
      },
       {
        title: "Visceral Medicine 2024",
        description: {
          en: (
            <>
              <span className="font-bold">
                Worked in this Website as an Ovan Developer <br />
              </span>
              The application was developed as a content management system,
              allowing editors to easily add content and media. To enable use
              without a database or web server, the application was made
              available offline The system was exhibited at InnoTrans, the
              world's largest trade fair for transport technology, in Berlin.
            </>
          ),
          es: (
            <>
            <span className="font-bold">
                Trabajé en este sitio web como desarrollador de Ovan<br />
              </span>
              La aplicación se desarrolló como un sistema de gestión de
              contenidos, lo que permite a los editores añadir fácilmente
              contenidos y media. Para poder utilizarla sin
              necesidad de una base de datos o un servidor web, la aplicación se
              diseñó para estar disponible sin conexión. El sistema se exhibió
              en InnoTrans, la feria comercial más grande del mundo dedicada a
              la tecnología del transporte, celebrada en Berlín. Traducción
              realizada con la versión gratuita del traductor DeepL.com
            </>
          ),
        },
        technologies: ["Next.js", "Tailwind", "Vercel"],
        image: "/imgs/viszeralmedizin.png",
        gif: "/imgs/viszeralmedizin.gif",
        link: "https://daniel-echeveste.github.io/ShaderLab",
      },
        {
        title: "Hamburg City Cleaning Trade Fair Application IFAT 2024",
        description: {
          en: (
            <>
              <span className="font-bold">
                Worked in this Website as an Ovan Developer <br />
              </span>
              The application was developed as a content management system,
              allowing editors to easily add content and media. To enable use
              without a database or web server, the application was made
              available offline The system was exhibited at InnoTrans, the
              world's largest trade fair for transport technology, in Berlin.
            </>
          ),
          es: (
            <>
            <span className="font-bold">
                Trabajé en este sitio web como desarrollador de Ovan<br />
              </span>
              La aplicación se desarrolló como un sistema de gestión de
              contenidos, lo que permite a los editores añadir fácilmente
              contenidos y media. Para poder utilizarla sin
              necesidad de una base de datos o un servidor web, la aplicación se
              diseñó para estar disponible sin conexión. El sistema se exhibió
              en InnoTrans, la feria comercial más grande del mundo dedicada a
              la tecnología del transporte, celebrada en Berlín. Traducción
              realizada con la versión gratuita del traductor DeepL.com
            </>
          ),
        },
        technologies: ["Next.js", "Tailwind", "Vercel"],
        image: "/imgs/hamburg.png",
        gif: "/imgs/hamburg.gif",
        link: "https://daniel-echeveste.github.io/ShaderLab",
      },
       {
        title: "VDI Zentrum ",
        description: {
          en: (
            <>
              <span className="font-bold">
                Worked in this Website as an Ovan Developer <br />
              </span>
              The application was developed as a content management system,
              allowing editors to easily add content and media. To enable use
              without a database or web server, the application was made
              available offline The system was exhibited at InnoTrans, the
              world's largest trade fair for transport technology, in Berlin.
            </>
          ),
          es: (
            <>
            <span className="font-bold">
                Trabajé en este sitio web como desarrollador de Ovan<br />
              </span>
              La aplicación se desarrolló como un sistema de gestión de
              contenidos, lo que permite a los editores añadir fácilmente
              contenidos y media. Para poder utilizarla sin
              necesidad de una base de datos o un servidor web, la aplicación se
              diseñó para estar disponible sin conexión. El sistema se exhibió
              en InnoTrans, la feria comercial más grande del mundo dedicada a
              la tecnología del transporte, celebrada en Berlín. Traducción
              realizada con la versión gratuita del traductor DeepL.com
            </>
          ),
        },
        technologies: ["Next.js", "Tailwind", "Vercel"],
        image: "/imgs/vdi.png",
        gif: "/imgs/vdi.gif",
        link: "https://daniel-echeveste.github.io/ShaderLab",
      },
       {
        title: "Axel Springer",
        description: {
          en: (
            <>
              <span className="font-bold">
                Worked in this Website as an Ovan Developer <br />
              </span>
              The application was developed as a content management system,
              allowing editors to easily add content and media. To enable use
              without a database or web server, the application was made
              available offline The system was exhibited at InnoTrans, the
              world's largest trade fair for transport technology, in Berlin.
            </>
          ),
          es: (
            <>
            <span className="font-bold">
                Trabajé en este sitio web como desarrollador de Ovan<br />
              </span>
              La aplicación se desarrolló como un sistema de gestión de
              contenidos, lo que permite a los editores añadir fácilmente
              contenidos y media. Para poder utilizarla sin
              necesidad de una base de datos o un servidor web, la aplicación se
              diseñó para estar disponible sin conexión. El sistema se exhibió
              en InnoTrans, la feria comercial más grande del mundo dedicada a
              la tecnología del transporte, celebrada en Berlín. Traducción
              realizada con la versión gratuita del traductor DeepL.com
            </>
          ),
        },
        technologies: ["Next.js", "Tailwind", "Vercel"],
        image: "/imgs/axelspringer.png",
        gif: "/imgs/axelspringer.gif",
        link: "https://daniel-echeveste.github.io/ShaderLab",
      },
       {
        title: "WBM Wohnungsbaugesellschaft Berlin-Mitte mbH",
        description: {
          en: (
            <>
              <span className="font-bold">
                Worked in this Website as an Ovan Developer <br />
              </span>
              The application was developed as a content management system,
              allowing editors to easily add content and media. To enable use
              without a database or web server, the application was made
              available offline The system was exhibited at InnoTrans, the
              world's largest trade fair for transport technology, in Berlin.
            </>
          ),
          es: (
            <>
            <span className="font-bold">
                Trabajé en este sitio web como desarrollador de Ovan<br />
              </span>
              La aplicación se desarrolló como un sistema de gestión de
              contenidos, lo que permite a los editores añadir fácilmente
              contenidos y media. Para poder utilizarla sin
              necesidad de una base de datos o un servidor web, la aplicación se
              diseñó para estar disponible sin conexión. El sistema se exhibió
              en InnoTrans, la feria comercial más grande del mundo dedicada a
              la tecnología del transporte, celebrada en Berlín. Traducción
              realizada con la versión gratuita del traductor DeepL.com
            </>
          ),
        },
        technologies: ["Next.js", "Tailwind", "Vercel"],
        image: "/imgs/wbm.png",
        gif: "/imgs/wbm.gif",
        link: "https://daniel-echeveste.github.io/ShaderLab",
      },
       {
        title: "Gegen das Vergessen",
        description: {
          en: (
            <>
              <span className="font-bold">
                Worked in this Website as an Ovan Developer <br />
              </span>
              The application was developed as a content management system,
              allowing editors to easily add content and media. To enable use
              without a database or web server, the application was made
              available offline The system was exhibited at InnoTrans, the
              world's largest trade fair for transport technology, in Berlin.
            </>
          ),
          es: (
            <>
            <span className="font-bold">
                Trabajé en este sitio web como desarrollador de Ovan<br />
              </span>
              La aplicación se desarrolló como un sistema de gestión de
              contenidos, lo que permite a los editores añadir fácilmente
              contenidos y media. Para poder utilizarla sin
              necesidad de una base de datos o un servidor web, la aplicación se
              diseñó para estar disponible sin conexión. El sistema se exhibió
              en InnoTrans, la feria comercial más grande del mundo dedicada a
              la tecnología del transporte, celebrada en Berlín. Traducción
              realizada con la versión gratuita del traductor DeepL.com
            </>
          ),
        },
        technologies: ["Next.js", "Tailwind", "Vercel"],
        image: "/imgs/gegendasvergessen.png",
        gif: "/imgs/gegendasvergessen.gif",
        link: "https://daniel-echeveste.github.io/ShaderLab",
      }, {
        title: "DGVS ",
        description: {
          en: (
            <>
              <span className="font-bold">
                Worked in this Website as an Ovan Developer <br />
              </span>
              The application was developed as a content management system,
              allowing editors to easily add content and media. To enable use
              without a database or web server, the application was made
              available offline The system was exhibited at InnoTrans, the
              world's largest trade fair for transport technology, in Berlin.
            </>
          ),
          es: (
            <>
            <span className="font-bold">
                Trabajé en este sitio web como desarrollador de Ovan<br />
              </span>
              La aplicación se desarrolló como un sistema de gestión de
              contenidos, lo que permite a los editores añadir fácilmente
              contenidos y media. Para poder utilizarla sin
              necesidad de una base de datos o un servidor web, la aplicación se
              diseñó para estar disponible sin conexión. El sistema se exhibió
              en InnoTrans, la feria comercial más grande del mundo dedicada a
              la tecnología del transporte, celebrada en Berlín. Traducción
              realizada con la versión gratuita del traductor DeepL.com
            </>
          ),
        },
        technologies: ["Next.js", "Tailwind", "Vercel"],
        image: "/imgs/dgvs.png",
        gif: "/imgs/dgvs.gif",
        link: "https://daniel-echeveste.github.io/ShaderLab",
      }, {
        title: "Pfandbrief Markt",
        description: {
          en: (
            <>
              <span className="font-bold">
                Worked in this Website as an Ovan Developer <br />
              </span>
              The application was developed as a content management system,
              allowing editors to easily add content and media. To enable use
              without a database or web server, the application was made
              available offline The system was exhibited at InnoTrans, the
              world's largest trade fair for transport technology, in Berlin.
            </>
          ),
          es: (
            <>
            <span className="font-bold">
                Trabajé en este sitio web como desarrollador de Ovan<br />
              </span>
              La aplicación se desarrolló como un sistema de gestión de
              contenidos, lo que permite a los editores añadir fácilmente
              contenidos y media. Para poder utilizarla sin
              necesidad de una base de datos o un servidor web, la aplicación se
              diseñó para estar disponible sin conexión. El sistema se exhibió
              en InnoTrans, la feria comercial más grande del mundo dedicada a
              la tecnología del transporte, celebrada en Berlín. Traducción
              realizada con la versión gratuita del traductor DeepL.com
            </>
          ),
        },
        technologies: ["Next.js", "Tailwind", "Vercel"],
        image: "/imgs/pfandbrief.png",
        gif: "/imgs/pfandbrief.gif",
        link: "https://daniel-echeveste.github.io/ShaderLab",
      },
      {
        title: "Shaders Lab ",
        description: {
          en: (
            <>
              Personal Project <br></br>
              <span className="font-bold">WEBGL</span> {" "}
              <span className="font-bold">SHADERS</span>, to create{" "}
              <span className="font-bold">unique</span> and{" "}
              <span className="font-bold">engaging</span> experiences for users.
             
            </>
          ),
          es: <>
              Proyecto Personal <br></br>
              <span className="font-bold">WEBGL</span> {" "}
              <span className="font-bold">SHADERS</span>, para crear{" "}
              experiencias  {" "}
              <span className="font-bold">unicas</span> e {" "}
              <span className="font-bold">interactivas </span> para los usuarios.
          </>,
        },
        technologies: ["React", "Three.js", "GSAP"],
        image: "/imgs/shaderslab.png",
        gif: "/imgs/shaderslab.gif",
        link: "https://daniel-echeveste.github.io/ShadersLab",
        github: "https://github.com/daniel-echeveste",
      },
    ],
  },
  Certifications: {
    en: "Certifications",
    es: "Certificaciones",
    cert: { en: "Certification", es: "Certificación" },
    issuer: { en: "Issued by", es: "Emitido por" },
    date: { en: "Date", es: "Fecha" },
    ver: { en: "Verify", es: "Verificar" },
  },
  Contact: {
    en: "Contact",
    es: "Contacto",
    name: { en: "Name", es: "Nombre" },
    email: { en: "Email", es: "Correo" },
    message: { en: "Message", es: "Mensaje" },
    send: { en: "Send", es: "Enviar" },
    sending: { en: "Sending...", es: "Enviando..." },
    success: {
      en: "Message sent successfully!",
      es: "¡Mensaje enviado con éxito!",
    },
    error: {
      en: "Error sending message. Please try again.",
      es: "Error al enviar el mensaje. Por favor, inténtelo de nuevo.",
    },
  },
};

export default translations;
