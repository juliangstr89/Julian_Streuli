let Developer = {
    nombre: "Fulano Mengano",
    age: 35,
    trabajo: "Full Stack Developer",
    habilidades: ["JavaScript", "Git & GitHup", "HTML", "CSS"],
    estatrabajando: false,
    contacto: {
      email: "fulano_mengano@gmail.com",
      localidad: "Oberá, Argentina",
      tel: "+54 3755 123456",
    }
  };
    
  function introduceperfil(perfil) {
    let intro = `Hello! My name is ${perfil.nombre}. `;
    intro += `I am a ${perfil.trabajo}. `;
  
    if (perfil.habilidades.length > 0) {
      intro += `I work with ${perfil.habilidades.join(", ")}. `;
    }
  
    intro += `I live in ${perfil.contacto.localidad}. `;
    intro += `I am ${perfil.age} years old. `;
  
    if (perfil.estatrabajando) {
      intro += `Currently, I am employed in the tech industry. My email is ${perfil.contacto.email}.`;
    } else {
      intro += `Currently, I am seeking new job opportunities. My contact number is ${perfil.contacto.tel}. and my email is ${perfil.contacto.email}.`; 
    }
  
    return intro;
  }

  console.log(introduceperfil(Developer));
  