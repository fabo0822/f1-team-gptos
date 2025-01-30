export const vehiculos = [
    {
      equipo: "Red Bull Racing",
      modelo: "RB20",
      motor: "Honda",
      velocidad_maxima_kmh: 360,
      aceleracion_0_100: 2.5,
      pilotos: [1, 2], // Max Verstappen y Sergio Pérez
      rendimiento: {
        conduccion_normal: {
          velocidad_promedio_kmh: 320,
          consumo_combustible: { seco: 1.9, lluvioso: 2.1, extremo: 2.4 },
          desgaste_neumaticos: { seco: 1.5, lluvioso: 0.8, extremo: 2.5 }
        },
        conduccion_agresiva: {
          velocidad_promedio_kmh: 340,
          consumo_combustible: { seco: 2.4, lluvioso: 2.6, extremo: 3.0 },
          desgaste_neumaticos: { seco: 2.2, lluvioso: 1.2, extremo: 3.5 }
        },
        ahorro_combustible: {
          velocidad_promedio_kmh: 300,
          consumo_combustible: { seco: 1.6, lluvioso: 1.8, extremo: 2.1 },
          desgaste_neumaticos: { seco: 1.0, lluvioso: 0.5, extremo: 1.8 }
        }
      },
      imagen: "https://upload.wikimedia.org/wikipedia/commons/8/89/Max_Verstappen_2023_Austria_FP2_%28cropped%29.jpg"
    },
    {
      equipo: "Mercedes-AMG Petronas",
      modelo: "W15",
      motor: "Mercedes",
      velocidad_maxima_kmh: 355,
      aceleracion_0_100: 2.6,
      pilotos: [3, 4], // Lewis Hamilton y George Russell
      rendimiento: {
        conduccion_normal: {
          velocidad_promedio_kmh: 315,
          consumo_combustible: { seco: 2.0, lluvioso: 2.2, extremo: 2.5 },
          desgaste_neumaticos: { seco: 1.6, lluvioso: 0.9, extremo: 2.6 }
        },
        conduccion_agresiva: {
          velocidad_promedio_kmh: 335,
          consumo_combustible: { seco: 2.6, lluvioso: 2.8, extremo: 3.2 },
          desgaste_neumaticos: { seco: 2.3, lluvioso: 1.4, extremo: 3.8 }
        },
        ahorro_combustible: {
          velocidad_promedio_kmh: 295,
          consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
          desgaste_neumaticos: { seco: 1.1, lluvioso: 0.6, extremo: 1.9 }
        }
      },
      imagen: "https://upload.wikimedia.org/wikipedia/commons/8/87/Lewis_Hamilton_2022_Imola.jpg"
    },
    {
      equipo: "Ferrari",
      modelo: "SF23",
      motor: "Ferrari",
      velocidad_maxima_kmh: 350,
      aceleracion_0_100: 2.7,
      pilotos: [5, 6], // Charles Leclerc y Carlos Sainz
      rendimiento: {
        conduccion_normal: {
          velocidad_promedio_kmh: 310,
          consumo_combustible: { seco: 1.8, lluvioso: 2.0, extremo: 2.3 },
          desgaste_neumaticos: { seco: 1.4, lluvioso: 0.9, extremo: 2.4 }
        },
        conduccion_agresiva: {
          velocidad_promedio_kmh: 330,
          consumo_combustible: { seco: 2.3, lluvioso: 2.5, extremo: 2.9 },
          desgaste_neumaticos: { seco: 2.0, lluvioso: 1.1, extremo: 3.4 }
        },
        ahorro_combustible: {
          velocidad_promedio_kmh: 290,
          consumo_combustible: { seco: 1.5, lluvioso: 1.7, extremo: 2.0 },
          desgaste_neumaticos: { seco: 1.0, lluvioso: 0.4, extremo: 1.7 }
        }
      },
      imagen: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Charles_Leclerc_2023.jpg"
    },
    {
      equipo: "McLaren",
      modelo: "MCL37",
      motor: "Mercedes",
      velocidad_maxima_kmh: 345,
      aceleracion_0_100: 2.8,
      pilotos: [7, 8], // Lando Norris y Oscar Piastri
      rendimiento: {
        conduccion_normal: {
          velocidad_promedio_kmh: 310,
          consumo_combustible: { seco: 1.9, lluvioso: 2.1, extremo: 2.4 },
          desgaste_neumaticos: { seco: 1.5, lluvioso: 0.8, extremo: 2.3 }
        },
        conduccion_agresiva: {
          velocidad_promedio_kmh: 330,
          consumo_combustible: { seco: 2.4, lluvioso: 2.7, extremo: 3.1 },
          desgaste_neumaticos: { seco: 2.1, lluvioso: 1.3, extremo: 3.6 }
        },
        ahorro_combustible: {
          velocidad_promedio_kmh: 295,
          consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
          desgaste_neumaticos: { seco: 1.1, lluvioso: 0.5, extremo: 1.9 }
        }
      },
      imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Lando_Norris_2023.jpg"
    },
    {
      equipo: "Aston Martin",
      modelo: "AMR23",
      motor: "Aston Martin",
      velocidad_maxima_kmh: 340,
      aceleracion_0_100: 2.7,
      pilotos: [9, 10], // Fernando Alonso y Lance Stroll
      rendimiento: {
        conduccion_normal: {
          velocidad_promedio_kmh: 308,
          consumo_combustible: { seco: 1.7, lluvioso: 1.9, extremo: 2.2 },
          desgaste_neumaticos: { seco: 1.3, lluvioso: 0.7, extremo: 2.2 }
        },
        conduccion_agresiva: {
          velocidad_promedio_kmh: 328,
          consumo_combustible: { seco: 2.2, lluvioso: 2.4, extremo: 2.8 },
          desgaste_neumaticos: { seco: 1.9, lluvioso: 1.0, extremo: 3.3 }
        },
        ahorro_combustible: {
          velocidad_promedio_kmh: 290,
          consumo_combustible: { seco: 1.5, lluvioso: 1.7, extremo: 2.0 },
          desgaste_neumaticos: { seco: 1.0, lluvioso: 0.4, extremo: 1.6 }
        }
      },
      imagen: "https://upload.wikimedia.org/wikipedia/commons/4/43/Fernando_Alonso_2023.jpg"
    }
  ];
  