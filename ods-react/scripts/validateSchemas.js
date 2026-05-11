import { z } from 'zod';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.resolve(__dirname, '../src/data');

// Schema for dinoDatabase.json
const DinoDatabaseSchema = z.record(
  z.object({
    idStatus: z.string().optional(),
    fullName: z.string(),
    image: z.string(),
    diet: z.string(),
    stats: z.object({
      group: z.number().nullable(),
      growth: z.number().nullable(),
      price: z.number().nullable(),
      skin1: z.number().nullable(),
      skin2: z.number().nullable(),
      fotinha: z.number().nullable(),
      cormoeda: z.number().nullable(),
      corgema: z.number().nullable(),
    }).optional(),
    passives: z.array(
      z.object({
        title: z.string(),
        desc: z.string(),
        icon: z.string()
      })
    ).optional(),
    actives: z.array(
      z.object({
        title: z.string(),
        desc: z.string(),
        icon: z.string()
      })
    ).optional()
  })
);

// Schema for tasks.json
const TasksSchema = z.object({
  tasks: z.array(
    z.object({
      nome: z.string(),
      galeriaId: z.string().nullable(),
      sobreviver: z.object({
        tempoMinutos: z.number().nullable(),
        recompensa: z.object({
          gemas: z.number(),
          moedas: z.number()
        }),
        xp: z.number()
      }),
      crescer: z.object({
        tempoMinutos: z.number().nullable(),
        recompensa: z.object({
          gemas: z.number(),
          moedas: z.number()
        }),
        xp: z.number()
      })
    })
  )
});

// Schema for status.json
const StatusSchema = z.object({
  colunas: z.array(z.string()),
  tiers: z.array(
    z.object({
      tier: z.number(),
      titulo: z.string(),
      criaturas: z.array(
        z.object({
          id: z.string(),
          nome: z.string(),
          velocidade: z.object({
            terraMin: z.number().nullable(),
            terraMax: z.number().nullable(),
            aguaMin: z.number().nullable(),
            aguaMax: z.number().nullable(),
            arMin: z.number().nullable(),
            arMax: z.number().nullable()
          }),
          hpMin: z.number(),
          hpMax: z.number(),
          danoBaseMin: z.number(),
          danoBaseMax: z.number(),
          fraturaMin: z.number(),
          fraturaMax: z.number(),
          sangramentoMin: z.number(),
          sangramentoMax: z.number()
        })
      )
    })
  )
});

// Validation runner
function validateFiles() {
  let hasErrors = false;

  const validate = (filename, schema) => {
    try {
      const filePath = path.join(dataDir, filename);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      schema.parse(data);
      console.log(`✅ ${filename} passed validation.`);
    } catch (err) {
      console.error(`❌ Validation failed for ${filename}:`);
      if (err instanceof z.ZodError) {
        console.error(err.errors);
      } else {
        console.error(err.message);
      }
      hasErrors = true;
    }
  };

  validate('dinoDatabase.json', DinoDatabaseSchema);
  validate('tasks.json', TasksSchema);
  validate('status.json', StatusSchema);

  if (hasErrors) {
    console.error('Build failed due to data validation errors.');
    process.exit(1);
  }
}

validateFiles();
