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
        esponjoso: { nombre: "Cupcake sencillo de vainilla", img: "https://i.imgur.com/3pKLCn5.jpeg" },
        bebida: { nombre: "Chocolate caliente", img: "https://i.imgur.com/qZXu5rQ.jpeg" },
        frio: { nombre: "Chocobananos caseros", img: "https://i.imgur.com/6GCYuye.jpeg" }
      },
      salado: {
        crujiente: { nombre: "Galletas saladas con queso", img: "https://i.imgur.com/Mu24h0W.png" },
        esponjoso: { nombre: "Muffin de queso suave", img: "https://i.imgur.com/6BOLebp.jpeg" },
        bebida: { nombre: "Caldo suave", img: "https://i.imgur.com/6YDygVA.jpeg" },
        frio: { nombre: "Yogur salado con pepino rallado", img: "https://i.imgur.com/fxqyLuF.jpeg" }
      },
      refrescante: {
        crujiente: { nombre: "Barquillos con crema", img: "https://images.unsplash.com/photo-1587498231662-cf42ca1ab8b8?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Pastel frío de gelatina y fruta", img: "https://images.unsplash.com/photo-1623276524567-1632cc4c3c99?auto=format&fit=crop&w=600&q=80" },
        bebida: { nombre: "Smoothie de fresa y plátano", img: "https://images.unsplash.com/photo-1588159343745-4450e16e7b8d?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Paleta de frutas", img: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&w=600&q=80" }
      }
    },
    alegre: {
      dulce: {
        crujiente: { nombre: "Churros con azúcar y canela", img: "https://images.unsplash.com/photo-1642513002954-69de1c4f47f2?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Rebanada de pastel de chocolate", img: "https://images.unsplash.com/photo-1603079657220-3b0b3d203b1c?auto=format&fit=crop&w=600&q=80" },
        bebida: { nombre: "Batido de leche con frutas", img: "https://images.unsplash.com/photo-1576402187878-974f38e5dd03?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Helado con chispitas", img: "https://images.unsplash.com/photo-1590086782792-6a6b6d43a7b8?auto=format&fit=crop&w=600&q=80" }
      },
      salado: {
        crujiente: { nombre: "Palomitas con mantequilla", img: "https://images.unsplash.com/photo-1589718234183-1b64bb4d6404?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Empanadas", img: "https://i.imgur.com/sXyfdPy.jpeg" },
        bebida: { nombre: "Limonada con toques de sal", img: "https://images.unsplash.com/photo-1572569511254-d8b72f1e69f3?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Mini sándwiches con queso crema", img: "https://images.unsplash.com/photo-1598511720301-7c7de97205e7?auto=format&fit=crop&w=600&q=80" }
      },
      refrescante: {
        crujiente: { nombre: "Fruta deshidratada helada", img: "https://images.unsplash.com/photo-1581382575301-8a1801a8d8d6?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Pastel de yogurt", img: "https://images.unsplash.com/photo-1631121181902-d436a3d79042?auto=format&fit=crop&w=600&q=80" },
        bebida: { nombre: "Jugo de Horchata", img: "https://images.unsplash.com/photo-1575908522061-5d6bb6124571?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Paleta de leche", img: "https://images.unsplash.com/photo-1610543436291-eae4a6192151?auto=format&fit=crop&w=600&q=80" }
      }
    },
    enojado: {
      salado: {
        crujiente: { nombre: "Papas fritas caseras", img: "https://images.unsplash.com/photo-1606756796932-d9e5b0be7c0d?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Pan de ajo y queso", img: "https://images.unsplash.com/photo-1611066520394-648bb62d33d4?auto=format&fit=crop&w=600&q=80" },
        bebida: { nombre: "Jugo de sandía con sal y chile", img: "https://images.unsplash.com/photo-1625940982222-19cddeba509b?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Helado de chamoy", img: "https://images.unsplash.com/photo-1590086782792-6a6b6d43a7b8?auto=format&fit=crop&w=600&q=80" }
      },
      dulce: {
        crujiente: { nombre: "Galletas de avena", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Bizcocho de almendras", img: "https://images.unsplash.com/photo-1627616799764-3382d8d4e0b6?auto=format&fit=crop&w=600&q=80" },
        bebida: { nombre: "Licuado de fresa", img: "https://images.unsplash.com/photo-1571997478779-2c46b1dbbfc9?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Yogurt de manzana", img: "https://images.unsplash.com/photo-1628191018703-dc0b6b9f5672?auto=format&fit=crop&w=600&q=80" }
      },
      refrescante: {
        crujiente: { nombre: "Polvorones con relleno", img: "https://images.unsplash.com/photo-1612541443764-2fd0c15fcf1a?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Mousse frío de limón", img: "https://images.unsplash.com/photo-1590086782792-6a6b6d43a7b8?auto=format&fit=crop&w=600&q=80" },
        bebida: { nombre: "Agua de Jamaica con menta", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Ensalada de frutas", img: "https://images.unsplash.com/photo-1613140932237-58d6c727dcdc?auto=format&fit=crop&w=600&q=80" }
      }
    },
    ansioso: {
      dulce: {
        crujiente: { nombre: "Barrita de cereal con chocolate", img: "https://images.unsplash.com/photo-1589820296156-b74290ced394?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Cupcakes con chispitas", img: "https://images.unsplash.com/photo-1606857521015-7f7ab25d6f87?auto=format&fit=crop&w=600&q=80" },
        bebida: { nombre: "Té con miel", img: "https://images.unsplash.com/photo-1607082349560-13b0fbf04b4d?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Waffles con crema", img: "https://images.unsplash.com/photo-1548943487-a2e4d1b046a2?auto=format&fit=crop&w=600&q=80" }
      },
      salado: {
        crujiente: { nombre: "Tostadas de pan con aguacate", img: "https://images.unsplash.com/photo-1590086782792-6a6b6d43a7b8?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Pastelitos de carne", img: "https://images.unsplash.com/photo-1616529734032-8a1ffb1b6021?auto=format&fit=crop&w=600&q=80" },
        bebida: { nombre: "Licuado de pepino con sal", img: "https://images.unsplash.com/photo-1590086782792-6a6b6d43a7b8?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Banderillas de jamón y queso", img: "https://images.unsplash.com/photo-1613140932237-58d6c727dcdc?auto=format&fit=crop&w=600&q=80" }
      },
      refrescante: {
        crujiente: { nombre: "Tutti frutti", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Bizcocho de gelatina coon leche", img: "https://images.unsplash.com/photo-1623276524567-1632cc4c3c99?auto=format&fit=crop&w=600&q=80" },
        bebida: { nombre: "licuado de piña", img: "https://images.unsplash.com/photo-1575908522061-5d6bb6124571?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Paleta de coco casera", img: "https://images.unsplash.com/photo-1613140932237-58d6c727dcdc?auto=format&fit=crop&w=600&q=80" }
      }
    },
    envidioso: {
      dulce: {
        crujiente: { nombre: "Galletas de chocolate", img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Relampagos", img: "https://images.unsplash.com/photo-1606857521015-7f7ab25d6f87?auto=format&fit=crop&w=600&q=80" },
        bebida: { nombre: "Licuado de banano", img: "https://images.unsplash.com/photo-1576402187878-974f38e5dd03?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Flan casero", img: "https://images.unsplash.com/photo-1613140932237-58d6c727dcdc?auto=format&fit=crop&w=600&q=80" }
      },
      salado: {
        crujiente: { nombre: "Pretzel", img: "https://images.unsplash.com/photo-1576186726115-4a47c0b5c2f4?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Muffins de queso", img: "https://images.unsplash.com/photo-1616529734032-8a1ffb1b6021?auto=format&fit=crop&w=600&q=80" },
        bebida: { nombre: "Jugo de tomate con sal", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Rollitos de jamón y queso", img: "https://images.unsplash.com/photo-1590086782792-6a6b6d43a7b8?auto=format&fit=crop&w=600&q=80" }
      },
      refrescante: {
        crujiente: { nombre: "Galletas de manzana", img: "https://images.unsplash.com/photo-1581382575301-8a1801a8d8d6?auto=format&fit=crop&w=600&q=80" },
        esponjoso: { nombre: "Rosca gelatina", img: "https://images.unsplash.com/photo-1623276524567-1632cc4c3c99?auto=format&fit=crop&w=600&q=80" },
        bebida: { nombre: "Jugo de avena", img: "https://images.unsplash.com/photo-1575908522061-5d6bb6124571?auto=format&fit=crop&w=600&q=80" },
        frio: { nombre: "Mousse de fruta", img: "https://images.unsplash.com/photo-1613140932237-58d6c727dcdc?auto=format&fit=crop&w=600&q=80" }
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
    volverBtn.onclick = () => location.reload();
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

  



 
