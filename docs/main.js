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
        crujiente: { nombre: "Galletas con chispas de chocolate", img: "assets/galleta1.jpg" },
        esponjoso: { nombre: "Cupcake sencillo de chocolate", img: "assets/cupcake.jpg" },
        bebida: { nombre: "Chocolate caliente", img: "assets/chocolatecaliente.jpg" },
        frio: { nombre: "Chocobananos caseros", img: "assets/chocobanano.jpg" }
      },
      salado: {
        crujiente: { nombre: "Galletas saladas con queso", img: "assets/galletasqueso.png" },
        esponjoso: { nombre: "Muffin de queso suave", img: "assets/muffinqueso.jpg" },
        bebida: { nombre: "Caldo suave", img: "assets/caldosuave.jpg" },
        frio: { nombre: "Yogur salado con pepino rallado", img: "assets/yogurtpepinos.jpg" }
      },
      refrescante: {
        crujiente: { nombre: "Barquillos con crema", img: "assets/barquillos.png" },
        esponjoso: { nombre: "Pastel de gelatina y fruta", img: "assets/gelatina.jpg" },
        bebida: { nombre: "Smoothie de fresa", img: "assets/smotiefresa.jpg" },
        frio: { nombre: "Paleta de frutas", img: "assets/paletafrutas.png" }
      }
    },
    alegre: {
      dulce: {
        crujiente: { nombre: "Churros con azúcar y canela", img: "assets/churros.png" },
        esponjoso: { nombre: "Rebanada de pastel de chocolate", img: "assets/rebanadadepastel.png" },
        bebida: { nombre: "Batido de leche con frutas", img: "assets/batidofrutas.png" },
        frio: { nombre: "Helado con chispitas", img: "assets/heladochispitas.jpg" }
      },
      salado: {
        crujiente: { nombre: "Palomitas con mantequilla", img: "assets/palomitas.png" },
        esponjoso: { nombre: "Empanadas", img: "assets/empanadas.png" },
        bebida: { nombre: "Limonada con toques de sal", img: "assets/Limonadasal.png" },
        frio: { nombre: "Mini sándwiches con queso crema", img: "assets/sandwichescrema.png" }
      },
      refrescante: {
        crujiente: { nombre: "Fruta deshidratada helada", img: "assets/frutasdesidratadas.jpg" },
        esponjoso: { nombre: "Pastel de yogurt", img: "assets/pasteldeyogur.png" },
        bebida: { nombre: "Jugo de Horchata", img: "assets/horchata.png" },
        frio: { nombre: "Paleta de leche", img: "assets/leche.png" }
      }
    },
    enojado: {
      salado: {
        crujiente: { nombre: "Papas fritas caseras", img: "assets/papas.png" },
        esponjoso: { nombre: "Pan de ajo y queso", img: "assets/panajoqueso.jpg" },
        bebida: { nombre: "Jugo de sandía con sal y chile", img: "assets/jugosandia.png" },
        frio: { nombre: "Helado de chamoy", img: "assets/chamoy.png" }
      },
      dulce: {
        crujiente: { nombre: "Galletas de avena", img: "assets/avenagalleta.png" },
        esponjoso: { nombre: "Bizcocho de almendras", img: "assets/bizcocho.png" },
        bebida: { nombre: "Licuado de fresa", img: "assets/licuadofresa.png" },
        frio: { nombre: "Yogurt de manzana", img: "assets/yogurtmanzana.png" }
      },
      refrescante: {
        crujiente: { nombre: "Polvorones con relleno", img: "assets/polvorones.jpg" },
        esponjoso: { nombre: "Mousse frío de limón", img: "assets/mouselimon.jpg" },
        bebida: { nombre: "Agua de Jamaica con menta", img: "assets/aguajamaica.jpg" },
        frio: { nombre: "Ensalada de frutas", img: "assets/Ensalada de frutas.jpg" }
      }
    },
    ansioso: {
      dulce: {
        crujiente: { nombre: "Barrita de cereal con chocolate", img: "assets/barritacereal.jpg" },
        esponjoso: { nombre: "Cupcakes con chispitas", img: "assets/cupcakechispitas.jpg" },
        bebida: { nombre: "Té con miel", img: "assets/temiel.jpg" },
        frio: { nombre: "Waffles con crema", img: "assets/waffles.jpg" }
      },
      salado: {
        crujiente: { nombre: "Tostadas de pan con aguacate", img: "assets/tostadaguacate.jpg" },
        esponjoso: { nombre: "Pastelitos de carne", img: "assets/pastelitoscarne.jpg" },
        bebida: { nombre: "Licuado de pepino con sal", img: "assets/licuadopepino.png" },
        frio: { nombre: "Banderillas de jamón y queso", img: "assets/banderillasjamonqueso.jpg" }
      },
      refrescante: {
        crujiente: { nombre: "Tutti frutti", img: "assets/tutifruti.jpg" },
        esponjoso: { nombre: "Bizcocho de gelatina con leche", img: "assets/gelatinamosaico.jpg" },
        bebida: { nombre: "licuado de piña", img: "assets/licuadopiña.jpg" },
        frio: { nombre: "Paleta de coco casera", img: "assets/paletacoco.jpg" }
      }
    },
    envidioso: {
      dulce: {
        crujiente: { nombre: "Galletas de chocolate", img: "assets/galletaschocolate.jpg" },
        esponjoso: { nombre: "Relampagos", img: "assets/relampago.jpg" },
        bebida: { nombre: "Licuado de banano", img: "assets/platano.jpg" },
        frio: { nombre: "Flan casero", img: "assets/flancasero.jpg" }
      },
      salado: {
        crujiente: { nombre: "Pretzel", img: "assets/pretzel.jpg" },
        esponjoso: { nombre: "Muffins de queso", img: "assets/muffinqueso2.jpg" },
        bebida: { nombre: "Jugo de tomate con sal", img: "assets/jugotomate.jpg" },
        frio: { nombre: "Rollitos de jamón y queso", img: "assets/rollitosjamon.png" }
      },
      refrescante: {
        crujiente: { nombre: "Galletas de manzana", img: "assets/galletasmanzana.jpg" },
        esponjoso: { nombre: "Pastel de gelatina con frutas", img: "pastelgelatina.jpg" },
        bebida: { nombre: "Jugo de avena", img: "assets/jugoavena.jpg" },
        frio: { nombre: "Mousse de fruta", img: "assets/mousefruta.jpg" }
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

  



 
