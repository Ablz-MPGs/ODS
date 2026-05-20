# MAPEAMENTO COMPLETO DE DINOSSAUROS

## Documentação
- **cw**: Creature Weight (Peso da Criatura) - valor de referência para cálculo de dano
- **db**: Damage Base (Dano Base) - dano fundamental do dinossauro
- **tr**: Tier (Nível) - classificação de poder (1-5)
- **peso**: Peso em kg (quando disponível em data.js)
- **dano_base**: Dano base conforme definido em data.js

---

## TIER 1 (7 dinossauros)

| ABBR | Nome Completo | Peso (kg) | CW | DB (status) | DB (data.js) | Tier |
|------|---------------|-----------|-------|------------|-------------|------|
| CY | Coelophysis bauri | 750 | 750 | 60 | 80 | 1 |
| CP | Changyuraptor yangi | 750 | 750 | 80 | 60 | 1 |
| OT | Ornithomimus velox | 900 | 900 | 100 | 100 | 1 |
| DY | Deinonychus antirrhopus | 950 | 950 | 120 | 120 | 1 |
| PS | Psittacosaurus mongoliensis | 1000 | 1000 | 110 | 110 | 1 |
| BR | Barbaridactylus grandis | 1000 | 1000 | 120 | 120 | 1 |
| GG | Guanlong wucaii | 1000 | 1000 | 120 | 120 | 1 |

---

## TIER 2 (6 dinossauros)

| ABBR | Nome Completo | CW | DB (status) | DB (data.js) | Tier |
|------|---------------|-------|------------|-------------|------|
| PC | Parasaurolophus walkeri | 1100 | 185 | 200 | 2 |
| QT | Quetzalcoatlus northropi | 1150 | 160 | 160 | 2 |
| AT | Austroraptor cabazai | 1200 | 150 | 150 | 2 |
| DL | Dilophosaurus wetherilli | 1200 | 160 | 160 | 2 |
| CT | Concavenator corcovatus | 1200 | 220 | 140 | 2 |
| CC | Pachycephalosaurus wyomingensis | 1250 | 140 | 185 | 2 |

---

## TIER 3 (7 dinossauros)

| ABBR | Nome Completo | CW | DB (status) | DB (data.js) | Tier |
|------|---------------|-------|------------|-------------|------|
| FS | Fasolasuchus tenax | 1250 | 245 | 245 | 3 |
| MG | Megaraptor namunhuaiquii | 1300 | 245 | 245 | 3 |
| GT | Gigantoraptor erlianensis | 1350 | 180 | 180 | 3 |
| CN | Carnotaurus satrei | 1350 | 200 | 200 | 3 |
| AL | Allosaurus fragilis | 1350 | 240 | 240 | 3 |
| ST | Styracosaurus albertensis | 1400 | 220 | 220 | 3 |
| KT | Kentrosaurus aethiopicus | 1500 | 250 | 250 | 3 |

---

## TIER 4 (9 dinossauros)

| ABBR | Nome Completo | CW | DB (status) | DB (data.js) | Tier |
|------|---------------|-------|------------|-------------|------|
| SC | Suchomimus tenerensis | 1450 | 210 | 210 | 4 |
| PT | Plateosaurus trossingensis | 1500 | 180 | 180 | 4 |
| TC | Tarchia kielanae | 1500 | 325 | 325 | 4 |
| PR | Amargasaurus cazaui | 1550 | 200 | 250 | 4 |
| PH | Parasaurolophus walkeri | 1500 | 250 | 200 | 4 |
| SG | Sarcosuchus imperator | 1500 | 300 | 300 | 4 |
| TH | Therizinosaurus cheloniformis | 1500 | 305 | 305 | 4 |
| AG | Amargasaurus cazaui | 1500 | 250 | 250 | 4 |
| SS | Pachyrhinosaurus canadensis | 1500 | 300 | 250 | 4 |

---

## TIER 5 (5 dinossauros)

| ABBR | Nome Completo | Peso (kg) | CW | DB (status) | DB (data.js) | Tier |
|------|---------------|-----------|-------|------------|-------------|------|
| DC | Deinocheirus mirificus | - | 1650 | 250 | 250 | 5 |
| TK | Triceratops horridus | 1650 | 1650 | 270 | 270 | 5 |
| GS | Giganotosaurus carolini | - | 1750 | 280 | 280 | 5 |
| SP | Spinosaurus aegyptiacus | - | 1750 | 265 | 265 | 5 |
| TY | Tyrannosaurus rex | - | 1750 | 340 | 340 | 5 |

---

## NOTAS IMPORTANTES

### Discrepâncias Encontradas:
1. **DB diferente entre data.js e status.js**: Alguns dinossauros têm valores de dano base diferentes. Isso pode indicar:
   - Balanceamento realizado após a criação de data.js
   - Valores duplicados ou incorretos em um dos arquivos
   
2. **Peso não disponível para todos**: Alguns dinossauros em data.js não têm o campo "peso" preenchido
   - Tier 2 em geral: sem peso especificado (usar CW como referência)
   - Tier 4 parcialmente: alguns têm valores no CW apenas
   - Tier 5 parcialmente: alguns sem peso especificado

3. **Sugestão de preenchimento de data.js**:
   - Adicionar campo "peso" aos dinossauros que faltam
   - Sincronizar valores de dano_base entre data.js e status.js/peso.html
   - Revisar abreviações ambíguas (PC, PH, PR, AG, SS em Tier 4)

---

## ORDENAÇÃO POR TIER E ABREVIAÇÃO (Conforme Solicitado)

### TIER 1
- CY = Coelophysis bauri (Peso: 750kg, CW: 750, DB: 60)
- CP = Changyuraptor yangi (Peso: 750kg, CW: 750, DB: 80)
- DY = Deinonychus antirrhopus (Peso: 950kg, CW: 950, DB: 120)
- GG = Guanlong wucaii (Peso: 1000kg, CW: 1000, DB: 120)
- OT = Ornithomimus velox (Peso: 900kg, CW: 900, DB: 100)
- PS = Psittacosaurus mongoliensis (Peso: 1000kg, CW: 1000, DB: 110)
- BR = Barbaridactylus grandis (Peso: 1000kg, CW: 1000, DB: 120)

### TIER 2
- AT = Austroraptor cabazai (CW: 1200, DB: 150)
- CC = Pachycephalosaurus wyomingensis (CW: 1250, DB: 140)
- CT = Concavenator corcovatus (CW: 1200, DB: 220)
- DL = Dilophosaurus wetherilli (CW: 1200, DB: 160)
- PC = Parasaurolophus walkeri (CW: 1100, DB: 185)
- QT = Quetzalcoatlus northropi (CW: 1150, DB: 160)

### TIER 3
- AL = Allosaurus fragilis (CW: 1350, DB: 240)
- CN = Carnotaurus satrei (CW: 1350, DB: 200)
- FS = Fasolasuchus tenax (CW: 1250, DB: 245)
- GT = Gigantoraptor erlianensis (CW: 1350, DB: 180)
- KT = Kentrosaurus aethiopicus (CW: 1500, DB: 250)
- MG = Megaraptor namunhuaiquii (CW: 1300, DB: 245)
- ST = Styracosaurus albertensis (CW: 1400, DB: 220)

### TIER 4
- AG = Amargasaurus cazaui (CW: 1500, DB: 250)
- PH = Parasaurolophus walkeri (CW: 1500, DB: 250)
- PR = Amargasaurus cazaui (CW: 1550, DB: 200)
- PT = Plateosaurus trossingensis (CW: 1500, DB: 180)
- SC = Suchomimus tenerensis (CW: 1450, DB: 210)
- SG = Sarcosuchus imperator (CW: 1500, DB: 300)
- SS = Pachyrhinosaurus canadensis (CW: 1500, DB: 300)
- TC = Tarchia kielanae (CW: 1500, DB: 325)
- TH = Therizinosaurus cheloniformis (CW: 1500, DB: 305)

### TIER 5
- DC = Deinocheirus mirificus (CW: 1650, DB: 250)
- GS = Giganotosaurus carolini (CW: 1750, DB: 280)
- SP = Spinosaurus aegyptiacus (CW: 1750, DB: 265)
- TK = Triceratops horridus (Peso: 1650kg, CW: 1650, DB: 270)
- TY = Tyrannosaurus rex (CW: 1750, DB: 340)
