# อัตราส่วนรูป (Aspect Ratio) ที่เหมาะสมสำหรับเว็บคลินิกความงาม

## 📐 Aspect Ratio คืออะไร?

**Aspect Ratio** = อัตราส่วนระหว่างความกว้างและความสูงของรูป

ตัวอย่าง:
- **16:9** = กว้าง 16 ส่วน : สูง 9 ส่วน (แนวนอน)
- **9:16** = กว้าง 9 ส่วน : สูง 16 ส่วน (แนวตั้ง)
- **1:1** = กว้างเท่าสูง (จัตุรัส)

---

## 🎯 อัตราส่วนที่แนะนำสำหรับแต่ละส่วน

### 1. Hero Section (รูปหลัก)

**Aspect Ratio:** `9:16` (แนวตั้ง)
**ขนาดแนะนำ:**
- 最低: 1080 x 1920 px
- แนะนำ: 1440 x 2560 px (2K)
- ดีที่สุด: 2160 x 3840 px (4K)

**เหตุผล:**
- ✅ เต็มหน้าจอมือถือ (Mobile-first)
- ✅ ดูโดดเด่น สวยงาม
- ✅ เหมาะกับรูปคนเต็มตัว

**AI Prompt (Midjourney):**
```
--ar 9:16
```

**AI Prompt (Leonardo.ai):**
- เลือก dimensions: 720 x 1280 หรือ 1080 x 1920

---

### 2. Service Cards (บริการ)

**Aspect Ratio:** `4:3` (แนวนอน)
**ขนาดแนะนำ:**
- 最低: 800 x 600 px
- แนะนำ: 1200 x 900 px
- ดีที่สุด: 1600 x 1200 px

**เหตุผล:**
- ✅ พอดีกับการ์ด
- ✅ ไม่ยาวเกินไป
- ✅ โหลดเร็ว

**AI Prompt (Midjourney):**
```
--ar 4:3
```

---

### 3. Before/After Slider (หลัก)

**Aspect Ratio:** `4:3` หรือ `3:4`
**ขนาดแนะนำ:**
- 最低: 800 x 600 px
- แนะนำ: 1200 x 900 px
- ดีที่สุด: 1600 x 1200 px

**เหตุผล:**
- ✅ ใบหน้าชัดเจน
- ✅ เห็นรายละเอียดผิว
- ✅ เปรียบเทียบง่าย

**AI Prompt (Midjourney):**
```
--ar 4:3
```

---

### 4. Before/After Grid (เพิ่มเติม)

**Aspect Ratio:** `1:1` (จัตุรัส)
**ขนาดแนะนำ:**
- 最低: 600 x 600 px
- แนะนำ: 800 x 800 px
- ดีที่สุด: 1000 x 1000 px

**เหตุผล:**
- ✅ สมมาตร สวยงาม
- ✅ เหมาะกับ grid
- ✅ โหลดเร็ว

**AI Prompt (Midjourney):**
```
--ar 1:1
```

---

### 5. Gallery (ผลงาน)

**Aspect Ratio:** `1:1` (จัตุรัส)
**ขนาดแนะนำ:**
- 最低: 600 x 600 px
- แนะนำ: 800 x 800 px
- ดีที่สุด: 1000 x 1000 px

**เหตุผล:**
- ✅ ดูเป็นระเบียบ
- ✅ Grid สวยงาม
- ✅ Responsive ดี

**AI Prompt (Midjourney):**
```
--ar 1:1
```

---

### 6. About Section

**Aspect Ratio:** `1:1` หรือ `4:3`
**ขนาดแนะนำ:**
- 最低: 800 x 800 px (1:1)
- แนะนำ: 1200 x 900 px (4:3)
- ดีที่สุด: 1600 x 1200 px

**เหตุผล:**
- ✅ สมดุลกับเนื้อหา
- ✅ ไม่ใหญ่เกินไป

**AI Prompt (Midjourney):**
```
--ar 4:3
```

---

### 7. Doctor Photo

**Aspect Ratio:** `3:4` (แนวตั้ง)
**ขนาดแนะนำ:**
- 最低: 600 x 800 px
- แนะนำ: 900 x 1200 px
- ดีที่สุด: 1200 x 1600 px

**เหตุผล:**
- ✅ เห็นใบหน้าชัด
- ✅ ดูเป็นมืออาชีพ
- ✅ คล้ายรูปประจำตัว

**AI Prompt (Midjourney):**
```
--ar 3:4
```

---

### 8. Testimonial Avatars

**Aspect Ratio:** `1:1` (จัตุรัส)
**ขนาดแนะนำ:**
- 最低: 200 x 200 px
- แนะนำ: 400 x 400 px
- ดีที่สุด: 500 x 500 px

**เหตุผล:**
- ✅ เล็ก กระชับ
- ✅ โหลดเร็วมาก
- ✅ สวยงาม

**AI Prompt (Midjourney):**
```
--ar 1:1
```

---

## 📊 ตารางสรุป Aspect Ratio

| ส่วน | Aspect Ratio | ขนาด (px) | AI Prompt |
|------|--------------|-------------|-----------|
| **Hero** | 9:16 | 1440 x 2560 | `--ar 9:16` |
| **Service Cards** | 4:3 | 1200 x 900 | `--ar 4:3` |
| **Before/After หลัก** | 4:3 | 1200 x 900 | `--ar 4:3` |
| **Before/After Grid** | 1:1 | 800 x 800 | `--ar 1:1` |
| **Gallery** | 1:1 | 800 x 800 | `--ar 1:1` |
| **About** | 4:3 | 1200 x 900 | `--ar 4:3` |
| **Doctor** | 3:4 | 900 x 1200 | `--ar 3:4` |
| **Avatar** | 1:1 | 400 x 400 | `--ar 1:1` |

---

## 🤖 ใช้กับ AI Generation Tools

### Midjourney
เพิ่ม `--ar [ratio]` ต่อท้าย prompt:

```
Professional photo of beautiful Thai woman,
glowing healthy skin, soft lighting --ar 9:16
```

**Aspect Ratio ที่รองรับ:**
- `--ar 1:1` (จัตุรัส)
- `--ar 4:3` (แนวนอน)
- `--ar 3:4` (แนวตั้ง)
- `--ar 16:9` (แนวนอนกว้าง)
- `--ar 9:16` (แนวตั้งสูง)

---

### Leonardo.ai

**วิธี 1: ใช้ preset dimensions**
- แตะที่ dimension dropdown
- เลือก custom size
- ใส่ค่า width x height เอง

**ตัวอย่าง:**
- 9:16 → 720 x 1280
- 4:3 → 1024 x 768
- 1:1 → 768 x 768

**วิธี 2: คำนวณเอง**
```
ความกว้าง ÷ ความสูง = Aspect Ratio

ตัวอย่าง:
1440 ÷ 2560 = 0.5625 ≈ 9:16 ✓
```

---

### Stable Diffusion

ใช้ `--width` และ `--height`:

```bash
python scripts/txt2img.py --prompt "..." --width 1440 --height 2560
```

---

## ⚠️ ข้อควรระวัง

### 1. **ขนาดไฟล์**
- **เกิน 2MB** → โหลดช้า
- **แนะนำ:** 100KB - 500KB ต่อรูป
- **ใช้:** TinyPNG.com หรือ Squoosh.app บีบอัด

### 2. **Format รูป**
- **ดีที่สุด:** WebP (ขนาดเล็ก คุณภาพสูง)
- **ดีมาก:** JPG (รองรับทุกที่)
- **ไม่แนะนำ:** PNG (ไฟล์ใหญ่เกินไป)

### 3. **Responsive Images**
ใช้ `srcset` สำหรับหน้าจอขนาดต่างกัน:

```html
<img src="image-800.jpg"
     srcset="image-400.jpg 400w,
             image-800.jpg 800w,
             image-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1200px) 800px,
            1200px">
```

---

## 🎨 Tips เพิ่มเติม

### สำหรับคลินิกความงาม:

1. **ใบหน้าต้องชัด**
   - ใช้ 4:3 หรือ 3:4 สำหรับรูปใบหน้า
   - ไม่แนะนำ 16:9 (กว้างเกินไป ใบหน้าเล็กเกินไป)

2. **รูปบริการ**
   - ใช้ 1:1 หรือ 4:3
   - เห็นทั้งหน้าและบริการ

3. **รูปลูกค้า**
   - ใช้ 1:1 สำหรับ avatar
   - ใช้ 3:4 สำหรับรูปครึ่งตัว

### สำหรับ Mobile-First:

- **ใช้ 9:16** สำหรับ Hero
- 75% ของผู้ใช้ดูบนมือถือ
- รูปแนวตั้งดีกว่าบนมือถือ

---

## 📏 การคำนวณ Aspect Ratio

### สูตร:
```
Aspect Ratio = ความกว้าง : ความสูง
             = width : height
             = width Û height  (หารด้วยตัวหารร่วมมากที่สุด)
```

### ตัวอย่าง:
```
1440 x 2560
= 1440 ÷ 160 : 2560 ÷ 160
= 9 : 16 ✓

1200 x 900
= 1200 ÷ 300 : 900 ÷ 300
= 4 : 3 ✓

800 x 800
= 1 : 1 ✓
```

### Online Calculator:
- https://aspectratiocalculator.com
- https://www.omnicalculator.com/other/aspect-ratio

---

## 🚀 Quick Reference

### Prompt Templates พร้อม Aspect Ratio

#### Hero (9:16)
```
Beautiful Thai woman with glowing skin,
standing in modern aesthetic clinic,
soft natural lighting, professional photo --ar 9:16 --v 6
```

#### Service Card (4:3)
```
Close-up of aesthetic treatment result,
glowing skin, professional photography,
bright and clean, high quality --ar 4:3 --v 6
```

#### Before/After (4:3)
```
Professional photo of woman's face,
medical aesthetic treatment result,
clear skin, clinic lighting --ar 4:3 --v 6
```

#### Gallery (1:1)
```
Square format aesthetic treatment result,
glowing healthy skin, professional photo,
soft lighting --ar 1:1 --v 6
```

---

## ✅ สรุป

| งาน | ใช้เท่าไหร่ | เหตุผล |
|-----|--------------|---------|
| รูปหลัก Hero | **9:16** | เต็มจอมือถือ |
| รูปบริการ | **4:3** | พอดีการ์ด |
| รูป Before/After | **4:3** | ใบหน้าชัด |
| รูป Gallery | **1:1** | สวยงามสมมาตร |
| รูปแพทย์ | **3:4** | คล้ายรูปประจำตัว |
| รูป Avatar | **1:1** | เล็กโหลดเร็ว |

**คำแนะนำสุดท้าย:**
- ใช้ **9:16** สำหรับ Hero (สำคัญที่สุด)
- ใช้ **1:1** หรือ **4:3** สำหรับส่วนอื่นๆ
- ไม่แนะนำ **16:9** สำหรับรูปคน (กว้างเกินไป)
