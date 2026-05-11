import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.resolve(__dirname, '../src/data');

// Utility to extract numbers
function parseNumber(value, fallback = null) {
  if (value === null || value === undefined || value === 'N/A' || value === '-' || value === '???') return fallback;
  if (typeof value === 'number') return value;
  // handle ranges like 1500-15
  if (typeof value === 'string' && value.includes('-') && !value.startsWith('-')) {
    // take the higher bound for now, or just fallback, actually let's take the higher bound
    const parts = value.split('-');
    value = parts[parts.length - 1];
  }
  const str = String(value).replace(/g|k|\*|m|%| /g, '').replace(/\./g, '');
  const num = Number(str);
  return isNaN(num) ? fallback : num;
}

// 1. Clean dinoDatabase.json
function cleanDinoDatabase() {
  const filePath = path.join(dataDir, 'dinoDatabase.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  for (const [key, dino] of Object.entries(data)) {
    if (dino.stats) {
      dino.stats.group = parseNumber(dino.stats.group, 0); // e.g. "1 slot" -> 1
      dino.stats.growth = parseNumber(dino.stats.growth, 0); // e.g. "15 min" -> 15
      dino.stats.price = parseNumber(dino.stats.price, null);
      dino.stats.skin1 = parseNumber(dino.stats.skin1, null);
      dino.stats.skin2 = parseNumber(dino.stats.skin2, null);
      dino.stats.fotinha = parseNumber(dino.stats.fotinha, null);
      dino.stats.cormoeda = parseNumber(dino.stats.cormoeda, null);
      dino.stats.corgema = parseNumber(dino.stats.corgema, null);
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('Cleaned dinoDatabase.json');
}

// 2. Clean tasks.json
function cleanTasks() {
  const filePath = path.join(dataDir, 'tasks.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  for (const task of data.tasks) {
    if (task.sobreviver) {
      task.sobreviver.tempoMinutos = parseNumber(task.sobreviver.tempo, null) || task.sobreviver.tempoMinutos;
      delete task.sobreviver.tempo;
      if (task.sobreviver.recompensa) {
        delete task.sobreviver.recompensa.texto;
      }
    }
    if (task.crescer) {
      task.crescer.tempoMinutos = parseNumber(task.crescer.tempo, null) || task.crescer.tempoMinutos;
      delete task.crescer.tempo;
      if (task.crescer.recompensa) {
        delete task.crescer.recompensa.texto;
      }
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('Cleaned tasks.json');
}

// 3. Clean status.json
function cleanStatus() {
  const filePath = path.join(dataDir, 'status.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  for (const tier of data.tiers) {
    for (const criatura of tier.criaturas) {
      // Fix potential bad numbers
      if (criatura.velocidade) {
        criatura.velocidade.terraMin = parseNumber(criatura.velocidade.terraMin, null);
        criatura.velocidade.terraMax = parseNumber(criatura.velocidade.terraMax, null);
        criatura.velocidade.aguaMin = parseNumber(criatura.velocidade.aguaMin, null);
        criatura.velocidade.aguaMax = parseNumber(criatura.velocidade.aguaMax, null);
        criatura.velocidade.arMin = parseNumber(criatura.velocidade.arMin, null);
        criatura.velocidade.arMax = parseNumber(criatura.velocidade.arMax, null);

        // specific fix: Pachyrhinosaurus terraMin: 14 -> 1400
        if (criatura.velocidade.terraMin < 100 && criatura.velocidade.terraMin > 0) {
          criatura.velocidade.terraMin *= 100;
        }
      }
      criatura.hpMin = parseNumber(criatura.hpMin, 0);
      criatura.hpMax = parseNumber(criatura.hpMax, 0);
      criatura.danoBaseMin = parseNumber(criatura.danoBaseMin, 0);
      criatura.danoBaseMax = parseNumber(criatura.danoBaseMax, 0);
      criatura.fraturaMin = parseNumber(criatura.fraturaMin, 0);
      criatura.fraturaMax = parseNumber(criatura.fraturaMax, 0);
      criatura.sangramentoMin = parseNumber(criatura.sangramentoMin, 0);
      criatura.sangramentoMax = parseNumber(criatura.sangramentoMax, 0);
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log('Cleaned status.json');
}

try {
  cleanDinoDatabase();
  cleanTasks();
  cleanStatus();
} catch (e) {
  console.error(e);
}
