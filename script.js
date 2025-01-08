document.addEventListener("DOMContentLoaded", () => {
  const carouselItems = document.querySelector(".carousel-items");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.querySelector(".close-modal");

  // Generar imágenes dinámicamente con títulos y descripciones personalizados
  for (let i = 1; i <= 30; i++) {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";

    const img = document.createElement("img");
    img.src = `./images/img${i}.jpg`; // Ruta de la imagen
    img.alt = `Image ${i}`;

    // Personalizar título y descripción para cada imagen
    switch (i) {
      case 1:
        img.dataset.title = "FUNJI";
        img.dataset.description = "Serie de tres ilustraciones digitales creadas en Adobe Illustrator para el grupo musical Prehistóricos. Estas obras capturan la esencia de la naturaleza...";
        break;
      case 2:
        img.dataset.title = "FUNJI";
        img.dataset.description = "Serie de tres ilustraciones digitales creadas en Adobe Illustrator para el grupo musical Prehistóricos...";
        break;
        case 3:
        img.dataset.title = "FUNJI";
        img.dataset.description = "Serie de tres ilustraciones digitales creadas en Adobe Illustrator para el grupo musical Prehistóricos...";
        break;
        case 4:
          img.dataset.title = "PETRI";
          img.dataset.description = "Ilustraciones inspiradas en las placas Petri, diseñadas en Blender, evocando patrones orgánicos y científicos.";
          break;
          case 5:
          img.dataset.title = "PETRI";
          img.dataset.description = "Ilustraciones inspiradas en las placas Petri, diseñadas en Blender, evocando patrones orgánicos y científicos.";
          break;
          case 6:
            img.dataset.title = "PETRI";
            img.dataset.description = "Ilustraciones inspiradas en las placas Petri, diseñadas en Blender, evocando patrones orgánicos y científicos.";
            break;
            case 7:
              img.dataset.title = "PETRI";
              img.dataset.description = "Ilustraciones inspiradas en las placas Petri, diseñadas en Blender, evocando patrones orgánicos y científicos.";
              break;
              case 8:
                img.dataset.title = "PETRI";
                img.dataset.description = "Ilustraciones inspiradas en las placas Petri, diseñadas en Blender, evocando patrones orgánicos y científicos.";
                break;
                case 9:
                  img.dataset.title = "PETRI";
                  img.dataset.description = "Ilustraciones inspiradas en las placas Petri, diseñadas en Blender, evocando patrones orgánicos y científicos.";
                  break;
                  case 10:
                    img.dataset.title = "PETRI";
                    img.dataset.description = "Ilustraciones inspiradas en las placas Petri, diseñadas en Blender, evocando patrones orgánicos y científicos.";
                    break;
                    case 11:
                      img.dataset.title = "PETRI";
                      img.dataset.description = "Ilustraciones inspiradas en las placas Petri, diseñadas en Blender, evocando patrones orgánicos y científicos.";
                      break;
                      case 12:
                        img.dataset.title = "PETRI";
                        img.dataset.description = "Ilustraciones inspiradas en las placas Petri, diseñadas en Blender, evocando patrones orgánicos y científicos.";
                        break;
                        case 13:
                          img.dataset.title = "PETRI";
                          img.dataset.description = "Ilustraciones inspiradas en las placas Petri, diseñadas en Blender, evocando patrones orgánicos y científicos.";
                          break;
                          case 14:
                            img.dataset.title = "PETRI";
                            img.dataset.description = "Ilustraciones inspiradas en las placas Petri, diseñadas en Blender, evocando patrones orgánicos y científicos.";
                            break;
                            case 15:
                              img.dataset.title = "PREHISTORICOS";
                              img.dataset.description = "Visuales para el concierto de la banda Prehistóricos, realizado en Santiago, Chile.";
                              break;
                              case 16:
                              img.dataset.title = "PREHISTORICOS";
                              img.dataset.description = "Creación de visuales para el concierto de celebración del décimo aniversario de la banda Prehistóricos, realizado en Santiago, Chile. Los gráficos combinaron técnicas avanzadas de After Effects y Blender, logrando un resultado inmersivo y emocional que complementó la atmósfera del evento.";
                              break;
                              case 17:
                                img.dataset.title = "PREHISTORICOS";
                                img.dataset.description = "Creación de visuales para el concierto de celebración del décimo aniversario de la banda Prehistóricos, realizado en Santiago, Chile. Los gráficos combinaron técnicas avanzadas de After Effects y Blender, logrando un resultado inmersivo y emocional que complementó la atmósfera del evento.";
                                break;
                                case 18:
                                  img.dataset.title = "PREHISTORICOS";
                                  img.dataset.description = "Creación de visuales para el concierto de celebración del décimo aniversario de la banda Prehistóricos, realizado en Santiago, Chile. Los gráficos combinaron técnicas avanzadas de After Effects y Blender, logrando un resultado inmersivo y emocional que complementó la atmósfera del evento.";
                                  break;
                                  case 19:
                                    img.dataset.title = "PREHISTORICOS";
                                    img.dataset.description = "Creación de visuales para el concierto de celebración del décimo aniversario de la banda Prehistóricos, realizado en Santiago, Chile. Los gráficos combinaron técnicas avanzadas de After Effects y Blender, logrando un resultado inmersivo y emocional que complementó la atmósfera del evento.";
                                    break;
                                    case 20:
                                      img.dataset.title = "PREHISTORICOS";
                                      img.dataset.description = "Creación de visuales para el concierto de celebración del décimo aniversario de la banda Prehistóricos, realizado en Santiago, Chile. Los gráficos combinaron técnicas avanzadas de After Effects y Blender, logrando un resultado inmersivo y emocional que complementó la atmósfera del evento.";
                                      break;
                                      case 21:
                                        img.dataset.title = "MONDRIAN";
                                        img.dataset.description = "Composición rojo y azul.";
                                        break;
                                        case 22:
                                          img.dataset.title = "SFERA";
                                          img.dataset.description = "Creación de esferas abstractas con texturas detalladas, explorando formas y materiales en Blender.";
                                          break;
                                          case 23:
                                          img.dataset.title = "SFERA";
                                          img.dataset.description = "Creación de esferas abstractas con texturas detalladas, explorando formas y materiales en Blender.";
                                          break;
                                          case 24:
                                          img.dataset.title = "SFERA";
                                          img.dataset.description = "Creación de esferas abstractas con texturas detalladas, explorando formas y materiales en Blender.";
                                          break;
                                          case 25:
                                          img.dataset.title = "SFERA";
                                          img.dataset.description = "Creación de esferas abstractas con texturas detalladas, explorando formas y materiales en Blender.";
                                          break;
                                          case 26:
                                          img.dataset.title = "SFERA";
                                          img.dataset.description = "Creación de esferas abstractas con texturas detalladas, explorando formas y materiales en Blender.";
                                          break;
                                          case 27:
                                          img.dataset.title = "SFERA";
                                          img.dataset.description = "Creación de esferas abstractas con texturas detalladas, explorando formas y materiales en Blender.";
                                          break;
                                          case 28:
                                          img.dataset.title = "ABSTRACT";
                                          img.dataset.description = "Ilustraciones abstractas generadas en Blender, destacando composiciones experimentales y creativas.";
                                          break;
                                          case 29:
                                          img.dataset.title = "ABSTRACT";
                                          img.dataset.description = "Ilustraciones abstractas generadas en Blender, destacando composiciones experimentales y creativas.";
                                          break;
                                          case 30:
                                          img.dataset.title = "ABSTRACT";
                                          img.dataset.description = "Ilustraciones abstractas generadas en Blender, destacando composiciones experimentales y creativas.";
                                          break;
     
    }

    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modalTitle.textContent = img.dataset.title;
      modalDescription.textContent = img.dataset.description;
      modal.style.display = "flex";
    });

    carouselItem.appendChild(img);
    carouselItems.appendChild(carouselItem);
  }

  // Cerrar modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar modal al hacer clic fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Scroll horizontal con rueda del ratón
  carouselItems.addEventListener("wheel", (e) => {
    e.preventDefault();
    carouselItems.scrollLeft += e.deltaY * 1.5; // Ajusta este valor para controlar la velocidad del scroll
  });
});
