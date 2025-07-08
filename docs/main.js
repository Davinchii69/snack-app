let datosUsuario = {
  nombre: "",
  emocion: "",
  sabor: "",
  tipo: "",
  snackFinal: ""
};

function guardarNombre() {
  const nombreInput = document.getElementById("nombreUsuario").value.trim();
  if (nombreInput === "") {
    alert("Por favor escribe tu nombre.");
    return;
  }
  datosUsuario.nombre = nombreInput;

  // Oculta esta pregunta y muestra q1
  document.getElementById("nombrePregunta").classList.remove("active");
  document.getElementById("q1").classList.add("active");
  actualizarVisibilidadFooter();
}
    
    let currentQuestion = 1;

    function nextQuestion() {
  const current = document.getElementById('q' + currentQuestion);
  const radios = current.querySelectorAll('input[type="radio"]');
  let selected = false;

  radios.forEach(radio => {
    if (radio.checked) selected = true;
  });

  if (!selected) {
    alert("Por favor selecciona una opción antes de continuar.");
    return;
  }

  const next = document.getElementById('q' + (currentQuestion + 1));
  if (next) {
    current.classList.remove('active');
    next.classList.add('active');
    currentQuestion++;
    document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
    actualizarVisibilidadFooter();
  }
}

//inicio
function mostrarResultado() {
    const emocion = document.querySelector('input[name="emocion"]:checked')?.value;
    const sabor = document.querySelector('input[name="sabor"]:checked')?.value;
    const tipo = document.querySelector('input[name="tipo"]:checked')?.value;
  
    if (!emocion || !sabor || !tipo) {
      alert("Por favor responde todas las preguntas.");
      return;
    }
  
    datosUsuario.emocion = emocion;
    datosUsuario.sabor = sabor;
    datosUsuario.tipo = tipo;

const snacks = {
    triste: {
      dulce: {
        crujiente: { nombre: "Galletas con chispas de chocolate", img: "assets/galleta1.jpg", precio: 15},
        esponjoso: { nombre: "Cupcake sencillo de chocolate", img: "assets/cupcake.jpg", precio: 16 },
        bebida: { nombre: "Chocolate caliente", img: "assets/chocolatecaliente.jpg", precio: 12},
        frio: { nombre: "Chocobananos caseros", img: "assets/chocobanano.jpg", precio: 10}
      },
      salado: {
        crujiente: { nombre: "Galletas saladas con queso", img: "assets/galletasqueso.png", precio: 15 },
        esponjoso: { nombre: "Muffin de queso suave", img: "assets/muffinqueso.jpg", precio: 16 },
        bebida: { nombre: "Caldo suave", img: "assets/caldosuave.jpg", precio: 20 },
        frio: { nombre: "Yogur salado con pepino rallado", img: "assets/yogurtpepinos.jpg", precio: 22 }
      },
      refrescante: {
        crujiente: { nombre: "Barquillos con crema", img: "assets/barquillos.png", precio: 25 },
        esponjoso: { nombre: "Pastel de gelatina y fruta", img: "assets/gelatina.jpg", precio: 30 },
        bebida: { nombre: "Smoothie de fresa", img: "assets/smotiefresa.jpg", precio: 35 },
        frio: { nombre: "Paleta de frutas", img: "assets/paletafrutas.png", precio: 15 }
      }
    },
    alegre: {
      dulce: {
        crujiente: { nombre: "Churros con azúcar y canela", img: "assets/churros.png", precio: 12 },
        esponjoso: { nombre: "Rebanada de pastel de chocolate", img: "assets/rebanadadepastel.png", precio: 35 },
        bebida: { nombre: "Batido de leche con frutas", img: "assets/batidofrutas.png", precio: 45 },
        frio: { nombre: "Helado con chispitas", img: "assets/heladochispitas.jpg", precio: 30 }
      },
      salado: {
        crujiente: { nombre: "Palomitas con mantequilla", img: "assets/palomitas.png", precio: 12 },
        esponjoso: { nombre: "Empanadas", img: "assets/empanadas.png", precio: 12 },
        bebida: { nombre: "Limonada con toques de sal", img: "assets/Limonadasal.png", precio: 15 },
        frio: { nombre: "Mini sándwiches con queso crema", img: "assets/sandwichescrema.png", precio: 15 }
      },
      refrescante: {
        crujiente: { nombre: "Fruta deshidratada helada", img: "assets/frutasdesidratadas.jpg", precio: 20 },
        esponjoso: { nombre: "Pastel de yogurt", img: "assets/pasteldeyogur.png", precio: 35 },
        bebida: { nombre: "Jugo de Horchata", img: "assets/horchata.png", precio: 15 },
        frio: { nombre: "Paleta de leche", img: "assets/leche.png", precio: 10 }
      }
    },
    enojado: {
      salado: {
        crujiente: { nombre: "Papas fritas caseras", img: "assets/papas.png", precio: 25 },
        esponjoso: { nombre: "Pan de ajo y queso", img: "assets/panajoqueso.jpg", precio: 35 },
        bebida: { nombre: "Jugo de sandía con sal y chile", img: "assets/jugosandia.png", precio: 20 },
        frio: { nombre: "Helado de chamoy", img: "assets/chamoy.png", precio: 18 }
      },
      dulce: {
        crujiente: { nombre: "Galletas de avena", img: "assets/avenagalleta.png", precio: 15 },
        esponjoso: { nombre: "Bizcocho de almendras", img: "assets/bizcocho.png", precio: 55 },
        bebida: { nombre: "Licuado de fresa", img: "assets/licuadofresa.png", precio: 45 },
        frio: { nombre: "Yogurt de manzana", img: "assets/yogurtmanzana.png", precio: 30 }
      },
      refrescante: {
        crujiente: { nombre: "Polvorones con relleno", img: "assets/polvorones.jpg", precio: 18 },
        esponjoso: { nombre: "Mousse frío de limón", img: "assets/mouselimon.jpg", precio: 35 },
        bebida: { nombre: "Agua de Jamaica con menta", img: "assets/aguajamaica.jpg", precio: 20 },
        frio: { nombre: "Ensalada de frutas", img: "assets/Ensalada de frutas.jpg", precio: 40 }
      }
    },
    ansioso: {
      dulce: {
        crujiente: { nombre: "Barrita de cereal con chocolate", img: "assets/barritacereal.jpg", precio: 20 },
        esponjoso: { nombre: "Cupcakes con chispitas", img: "assets/cupcakechispitas.jpg", precio: 22 },
        bebida: { nombre: "Té con miel", img: "assets/temiel.jpg", precio: 20 },
        frio: { nombre: "Waffles con crema", img: "assets/waffles.jpg", precio: 85 }
      },
      salado: {
        crujiente: { nombre: "Tostadas de pan con aguacate", img: "assets/tostadaguacate.jpg", precio: 28 },
        esponjoso: { nombre: "Pastelitos de carne", img: "assets/pastelitoscarne.jpg", precio: 15 },
        bebida: { nombre: "Licuado de pepino con sal", img: "assets/licuadopepino.png", precio: 38 },
        frio: { nombre: "Banderillas de jamón y queso", img: "assets/banderillasjamonqueso.jpg", precio: 20 }
      },
      refrescante: {
        crujiente: { nombre: "Tutti frutti", img: "assets/tutifruti.jpg", precio: 45 },
        esponjoso: { nombre: "Bizcocho de gelatina con leche", img: "assets/gelatinamosaico.jpg", precio: 60 },
        bebida: { nombre: "licuado de piña", img: "assets/licuadopiña.jpg", precio: 48 },
        frio: { nombre: "Paleta de coco casera", img: "assets/paletacoco.jpg", precio: 12 }
      }
    },
    envidioso: {
      dulce: {
        crujiente: { nombre: "Galletas de chocolate", img: "assets/galletaschocolate.jpg", precio: 18 },
        esponjoso: { nombre: "Relampagos", img: "assets/relampago.jpg", precio: 25 },
        bebida: { nombre: "Licuado de banano", img: "assets/platano.jpg", precio: 48 },
        frio: { nombre: "Flan casero", img: "assets/flancasero.jpg", precio: 30 }
      },
      salado: {
        crujiente: { nombre: "Pretzel", img: "assets/pretzel.jpg", precio: 20 },
        esponjoso: { nombre: "Muffins de queso", img: "assets/muffinqueso2.jpg", precio: 28 },
        bebida: { nombre: "Jugo de tomate con sal", img: "assets/jugotomate.jpg", precio: 35 },
        frio: { nombre: "Rollitos de jamón y queso", img: "assets/rollitosjamon.png", precio: 40 }
      },
      refrescante: {
        crujiente: { nombre: "Galletas de manzana", img: "assets/galletasmanzana.jpg", precio: 22 },
        esponjoso: { nombre: "Pastel de gelatina con frutas", img: "pastelgelatina.jpg", precio: 45 },
        bebida: { nombre: "Jugo de avena", img: "assets/jugoavena.jpg", precio: 22 },
        frio: { nombre: "Mousse de fruta", img: "assets/mousefruta.jpg", precio: 40 }
      }
    }
  };

  const resultado = snacks[emocion][sabor][tipo];

    const resultadoDiv = document.getElementById('resultado');
    document.getElementById('formSection').style.display = 'none';
  
  resultadoDiv.innerHTML = `
  <h2>🎉 Tu snack ideal es:</h2>
  <div class="snack-card">
    <img src="${resultado.img}" alt="${resultado.nombre}" loading="lazy">
    <h3>${resultado.nombre}</h3>
    <p><strong>Precio: L${resultado.precio}</strong></p>
  </div>
  <p>📍Recuerda: cuidar tu bienestar emocional también incluye momentos dulces y conscientes 💛</p>
`;
  
   const volverBtn = document.createElement('button');
   volverBtn.textContent = '🔁 Volver a empezar';
   volverBtn.className = 'button';
   volverBtn.onclick = irAlInicio; // 👈 Reemplazo correcto
   resultadoDiv.appendChild(volverBtn);
  
    resultadoDiv.style.display = 'block';
    resultadoDiv.scrollIntoView({ behavior: 'smooth' });
  
    datosUsuario.snackFinal = resultado.nombre;
    datosUsuario.precio = resultado.precio;
    guardarEnFirestore(datosUsuario);

    actualizarVisibilidadFooter();
  }
//fin

// Cambio de menú)
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
  }

  // Detecta clics fuera del menú para cerrarlo
document.addEventListener('click', function(event) {
  const menu = document.getElementById('navMenu');
  const toggle = document.querySelector('.nav-toggle');

  // Si el menú está abierto y el clic NO fue dentro del menú ni en el botón de hamburguesa
  if (menu.classList.contains('active') &&
      !menu.contains(event.target) &&
      !toggle.contains(event.target)) {
    menu.classList.remove('active');
  }
});

  // Cierra el menú al hacer clic en cualquier enlace del menú (en móvil)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('navMenu');
      if (menu.classList.contains('active')) {
        menu.style.animation = 'slideUp 0.3s ease forwards';
        setTimeout(() => menu.classList.remove('active'), 300);
      }
    });
  });

    /*funcion de boton*/
    function empezarCuestionario() {
  document.getElementById('hero').style.display = 'none';
  document.querySelector('.emociones-objetivos').style.display = 'none';
  document.getElementById('formSection').style.display = 'block';
  document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
}

//funcion regresar al inicio
function irAlInicio() {
  // Ocultar resultados y formulario
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('formSection').style.display = 'none';

  // Mostrar secciones principales
  document.getElementById('hero').style.display = 'flex';
  document.querySelector('.emociones-objetivos').style.display = 'grid';

  // Reiniciar preguntas
  currentQuestion = 1;
  document.getElementById('snackForm').reset();
  document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
  document.getElementById('q1').classList.add('active');
  document.getElementById('navMenu').classList.remove('active');

  // Alinear correctamente al volver
  window.scrollTo({ top: 0, behavior: 'smooth' });
  actualizarVisibilidadFooter();
}

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

// Guarda el usuario y su snack en Firestore
function guardarEnFirestore(datos) {
  db.collection("respuestas").add({
    nombre: datos.nombre,
    emocion: datos.emocion,
    sabor: datos.sabor,
    tipo: datos.tipo,
    snackFinal: datos.snackFinal,
    precio: datos.precio,
    fecha: new Date()
  })
  .then((docRef) => {
    console.log("Datos guardados con ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error al guardar en Firestore: ", error);
  });
}

//footeer
function actualizarVisibilidadFooter() {
  const footer = document.getElementById('footer');
  const preguntasOcultas = ["nombrePregunta", "q1", "q2", "q3"];

  const algunaVisible = preguntasOcultas.some(id => {
    const el = document.getElementById(id);
    return el && window.getComputedStyle(el).display !== "none";
  });

  footer.style.display = algunaVisible ? "none" : "block";
}
