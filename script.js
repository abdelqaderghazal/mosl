// =====================
// COLUMN MAPPING (Arabic headers from actual CSV)
// =====================
const COLUMN_MAP_INV = {};
// =====================
// INLINE CSV DATA (works on file:// without internet)
// =====================
const INLINE_CSV_DATA = `المحافظة,الشهر,السنة,عدد السكان,ذكور,إناث,السكان دون 15 سنة,السكان 15-60 سنة,السكان 60+ سنة,حجم قوة العمل (مليون),المشتغلون,المتعطلون,معدل البطالة العام,معدل بطالة الذكور,معدل بطالة الاناث,معدل بطالة الشباب,معدل المشاركة في النشاط الاقتصادي / ذكور,معدل المشاركة في النشاط الاقتصادي / إناث,نسبة العمال في القطاع الخاص غير المنظم,معدل زواج القاصرات حسب المحافظات,%معدل عمل الأطفال,معدل اكمال الدراسة في مرحلة التعليم الأساسيي,نسبة النساء المعيلات,%تقديرات الفقر وفق الأمن الغذائي ( الاسر الأمنة غذائيا ),%تقديرات الفقر وفق الأمن الغذائي (الاسر ذات الهشاشة),%تقديرات الفقر - الأمن الغذائي (الاسر المعدومة ),دور رعاية كبار السن,عدد المستفيدين من خدمات دور رعاية المسنين,عدد  معاهد رعاية وتأهيل الأشخاص ذوي الاعاقة,عدد الطلاب المسجلين في المعاهد الخاصة بذوي الاعاقة,عدد المستفيدين من توزيع المعينات الحركية,المستفيدين  من المعونة النقدية لأسر الأشخاص من ذوي  الإعاقة,عدد الحاصلين الجدد على بطاقة الاشخاص ذوي الاعاقة,عدد دور رعاية الايتام,المستفيدين من الخدمات (كفالة داخلية ),المستفيدين من الخدمات (كفالة خارجية),عدد مراكز رعاية المتسولين,دور رعاية المتسولين في الخدمة,عدد النزلاء في مراكز التسول,معاهد الاحداث/ مراكز الملاحظة,عدد معاهد الاحداث في الخدمة,عدد النزلاء من الاحداث,المستفيدين من دار لحن الحياة,عدد مراكز التأهيل المهني,عدد المراكز في الخدمة الفعلية,عدد المستفيدين من التأهيل,عدد المسجلين على منصة سوق العمل(2024- 2025),عدد المنشآت المسجلة في المنصة,عدد فرص العمل على المنصة,عدد فرص التدريب على المنصة,عدد مراكز التنمية الريفية خارج الخدمة,مراكز التنمية في الخدمة,عدد وحدات الصناعات الريفية خارج الخدمة,عدد وحدات الصناعة في الخدمة,مستفيدو مراكز التنمية الريفية,مستفيدو وحدات الصناعات الريفية,اجمالي عدد المنظمات غير الحكومية,عدد المنظمات غير الحكومية المسحوب ترخيصها,عدد المنظمات غير الحكومية المشهرة,عدد المساعدات  (سلة غذائية),عدد المساعدات عينية (ادوية - عمليات- منظفات),اعانات مالية,عدد المراكز المجتمعية,مساحات امنة للنساء,عدد المخيمات,عدد الاسر المقيمة في المخيمات,عدد المسجلين في التأمينات الاجتماعية/ قطاع عام,عدد المسجلين في التأمينات الاجتماعية / قطاع خاص,اجمالي عدد المسجلين القائمين على راس عملهم,عدد المسجلين  الجدد من خلال الزيارات التفتيشية,عدد المتقاعدين المستفيدين,عدد المستفيدين من تعويضات إصابات العمل,قرارات ضم الخدمة,عدد المنشآت التي تم اشراكها بالتامينات, منح تراخيص العمل  للعاملين غير السوريين,تجديد تراخيص العمل  للعاملين غير السوريين,عدد مكاتب التشغيل المرخصة  لمزاولة مهنة استقدام العاملات غير السوريات,العاملات المنزليات غير السوريات (نم منحهن ترخيص العمل ),عدد المكاتب المرخصة لتشغيل العمال المنزليين السوريين,مكاتب مرخصة لمزاولة مهنة تشغيل خاص للعمال السوريين,عدد الزيارات التفتيشية على المنشأت (صناعي – زراعي ),زيارات تفتيشية على المنشآت (صناعي),زيارات تفتيشية على المنشآت (زراعي),المخالفات الناتجة عن الزيارات,مشاريع الصكوك القانونية الجديدة,مشاريع الصكوك القانونية  قيد المراجعة والتحديث,أهم ثلاث إنجازات,أهم ثلاث توصيات,الاحتياجات الرئيسية,التقرير الشهرية
دمشق,كانون الثاني,2025,2500000,1280000,1220000,875000,1375000,250000,1.25,950000,300000,24.0,18.5,32.0,28.5,65.2,18.5,42.0,12.5,8.2,78.5,22.0,35.0,28.0,37.0,8,450,12,320,85,120,950,6,280,150,45,5,180,3,2,45,120,4,3,85,8500,120,350,280,2,2,3,2,450,280,85,15,25,3200,850,420,6,12,3,150,450000,280000,730000,12500,95000,4500,850,320,45,120,8,5,12,8,450,280,170,85,25,15,تطوير مركز التأهيل المهني وتوسيع قاعدة المستفيدين,تعزيز الشراكة مع المنظمات المحلية لخدمة الأيتام,زيادة عدد مراكز رعاية الأشخاص ذوي الإعاقة,https://docs.google.com/document/d/example1
ريف دمشق,كانون الثاني,2025,2800000,1430000,1370000,980000,1540000,280000,1.4,1050000,350000,25.0,19.2,33.5,29.8,64.8,17.2,45.0,13.8,9.5,76.0,24.5,32.0,30.0,38.0,7,380,10,280,72,105,820,5,250,120,38,4,155,2,2,38,95,3,3,72,7200,95,280,220,3,2,4,3,380,220,72,12,22,2800,720,380,5,10,2,120,380000,250000,630000,11200,82000,3800,720,280,38,95,6,4,10,6,380,220,155,72,22,12,إنشاء مركز جديد للتنمية الريفية في منطقة الزبداني,توسيع برنامج الكفالة الخارجية للأيتام,دعم مشاريع التأهيل المهني للشباب,https://docs.google.com/document/d/example2
حلب,كانون الثاني,2025,3200000,1640000,1560000,1120000,1760000,320000,1.6,1180000,420000,26.2,20.5,35.0,31.2,63.5,15.8,48.0,15.2,11.0,74.5,26.8,30.0,32.0,38.0,9,520,14,380,95,140,1100,7,320,180,52,6,210,4,3,52,145,5,4,110,9800,145,420,340,4,3,5,4,520,340,110,18,32,3800,980,520,7,14,3,180,420000,320000,740000,14500,98000,5200,980,420,52,145,10,7,15,10,520,340,210,110,32,18,إعادة تأهيل مركز رعاية الأحداث بعد الصيانة,توسيع برنامج المساعدات الغذائية للأسر المتضررة,تطوير البنية التحتية لمراكز التنمية الريفية,https://docs.google.com/document/d/example3
حمص,كانون الثاني,2025,1900000,970000,930000,665000,1045000,190000,0.95,720000,230000,24.2,18.8,32.5,28.8,65.0,18.0,43.0,13.0,8.8,77.5,23.2,34.0,29.0,37.0,6,340,8,240,65,95,720,4,210,110,32,3,130,2,1,32,85,3,2,65,6500,85,250,200,2,2,3,2,340,200,65,10,18,2200,650,340,4,8,2,95,340000,220000,560000,9500,72000,3400,650,250,32,85,5,3,9,5,340,200,130,65,18,10,تطوير خدمات رعاية المسنين في دور الإيواء,تعزيز برامج التوعية بمخاطر عمل الأطفال,دعم مشاريع التشغيل الذاتي للنساء المعيلات,https://docs.google.com/document/d/example4
حماه,كانون الثاني,2025,1600000,820000,780000,560000,880000,160000,0.8,620000,180000,22.5,17.5,30.0,26.5,66.5,19.5,40.0,11.5,7.5,79.0,21.5,36.0,27.0,37.0,5,280,7,200,55,80,620,4,180,95,28,3,110,2,1,28,75,3,2,55,5500,75,210,170,2,1,2,2,280,170,55,8,15,1800,550,280,3,6,2,80,280000,190000,470000,8200,62000,2800,550,210,28,75,4,3,7,4,280,170,110,55,15,8,توسيع مراكز التأهيل المهني في المناطق الريفية,تطوير برامج الكفالة الداخلية للأيتام,زيادة عدد فرص التدريب المهني للشباب,https://docs.google.com/document/d/example5
اللاذقية,كانون الثاني,2025,1200000,615000,585000,420000,660000,120000,0.6,480000,120000,20.0,15.5,28.0,24.5,68.0,21.0,38.0,10.5,6.5,80.5,20.0,38.0,26.0,36.0,4,220,6,160,42,65,480,3,140,75,22,2,85,1,1,22,60,2,2,42,4200,60,160,130,1,1,2,1,220,130,42,6,12,1400,420,220,3,5,1,65,220000,150000,370000,6500,48000,2200,420,160,22,60,3,2,6,3,220,130,85,42,12,6,تطوير السياحة الاجتماعية المستدامة,تعزيز برامج التوعية البيئية للمجتمعات الساحلية,دعم مشاريع الصناعات الريفية التقليدية,https://docs.google.com/document/d/example6
طرطوس,كانون الثاني,2025,950000,485000,465000,332500,522500,95000,0.475,380000,95000,20.0,15.5,27.5,24.2,68.2,21.2,37.5,10.2,6.2,81.0,19.8,39.0,25.5,35.5,3,180,5,130,35,55,380,2,110,60,18,2,70,1,1,18,50,2,1,35,3500,50,130,105,1,1,2,1,180,105,35,5,10,1100,350,180,2,4,1,55,180000,120000,300000,5200,38000,1800,350,130,18,50,2,2,5,2,180,105,70,35,10,5,تطوير مراكز التدريب البحري للشباب,تعزيز برامج الأمن الغذائي للمجتمعات الساحلية,دعم مشاريع الاستزراع السمكي التعاوني,https://docs.google.com/document/d/example7
السويداء,كانون الثاني,2025,420000,215000,205000,147000,231000,42000,0.21,168000,42000,20.0,15.5,27.0,24.0,68.5,21.5,36.0,9.8,5.8,82.0,19.5,40.0,25.0,35.0,2,85,3,60,18,28,168,1,50,28,10,1,32,1,0,10,22,1,1,18,1680,22,60,50,1,1,1,1,85,50,18,2,5,500,168,85,1,2,1,28,85000,55000,140000,2800,16800,850,168,60,10,22,1,1,2,1,85,50,32,18,5,2,تطوير السياحة الريفية والبيئية,تعزيز برامج الحفاظ على التراث الثقافي,دعم مشاريع الزراعة العضوية التعاونية,https://docs.google.com/document/d/example8
درعا,كانون الثاني,2025,1100000,565000,535000,385000,605000,110000,0.55,440000,110000,20.0,15.5,27.5,24.2,68.0,21.0,37.5,10.5,6.5,81.0,19.8,38.0,25.5,36.5,3,200,5,140,38,58,440,2,130,68,20,2,78,1,1,20,55,2,1,38,3800,55,140,115,1,1,2,1,200,115,38,5,10,1200,380,200,2,4,1,58,200000,130000,330000,5500,44000,2000,380,140,20,55,2,2,5,2,200,115,78,38,10,5,إعادة تأهيل البنية التحتية للمراكز الاجتماعية,توسيع برامج التوعية الصحية للمجتمعات الريفية,دعم مشاريع الزراعة المستدامة والمروية,https://docs.google.com/document/d/example9
القنيطرة,كانون الثاني,2025,110000,56500,53500,38500,60500,11000,0.055,44000,11000,20.0,15.5,27.0,24.0,68.5,21.5,36.0,9.5,5.5,82.5,19.5,40.0,25.0,35.0,1,25,1,18,5,8,44,1,15,8,3,1,12,1,0,3,8,1,0,5,440,8,18,15,1,0,1,0,25,15,5,1,2,150,44,25,1,1,0,8,25000,16000,41000,850,4400,250,44,18,3,8,1,0,1,0,25,15,12,5,2,1,تطوير السياحة البيئية في المنطقة المحررة,تعزيز برامج التوعية بمخاطر الألغام,دعم مشاريع الزراعة المروية للمزارعين العائدين,https://docs.google.com/document/d/example10
ادلب,كانون الثاني,2025,1800000,920000,880000,630000,990000,180000,0.9,720000,180000,20.0,15.5,27.5,24.2,68.0,21.0,37.5,10.5,6.5,81.0,19.8,38.0,25.5,36.5,4,280,6,200,52,80,720,3,180,95,28,3,110,2,1,28,75,3,2,52,5200,75,200,165,2,1,2,1,280,165,52,6,12,1800,520,280,3,5,1,80,280000,180000,460000,7200,72000,2800,520,200,28,75,3,2,6,3,280,165,110,52,12,6,تطوير مراكز التأهيل المهني للشباب العائدين,توسيع برامج المساعدات الإنسانية للنازحين,دعم مشاريع الإعمار المجتمعي التعاوني,https://docs.google.com/document/d/example11
الرقة,كانون الثاني,2025,950000,485000,465000,332500,522500,95000,0.475,380000,95000,20.0,15.5,27.5,24.2,68.2,21.2,37.5,10.2,6.2,81.0,19.8,39.0,25.5,35.5,3,180,5,130,35,55,380,2,110,60,18,2,70,1,1,18,50,2,1,35,3500,50,130,105,1,1,2,1,180,105,35,5,10,1100,350,180,2,4,1,55,180000,120000,300000,5200,38000,1800,350,130,18,50,2,2,5,2,180,105,70,35,10,5,إعادة تأهيل المراكز الاجتماعية المتضررة,توسيع برامج التوعية بمخاطر الألغام والمخلفات الحربية,دعم مشاريع الزراعة المروية والتعاونية,https://docs.google.com/document/d/example12
دير الزور,كانون الثاني,2025,1400000,715000,685000,490000,770000,140000,0.7,560000,140000,20.0,15.5,27.5,24.2,68.0,21.0,37.5,10.5,6.5,81.0,19.8,38.0,25.5,36.5,4,220,6,160,42,65,560,3,140,75,22,2,85,1,1,22,60,2,2,42,4200,60,160,130,2,1,2,1,220,130,42,6,12,1400,420,220,3,5,1,65,220000,150000,370000,6500,56000,2200,420,160,22,60,3,2,6,3,220,130,85,42,12,6,تطوير مراكز التأهيل المهني للشباب,توسيع برامج المساعدات الإنسانية للمجتمعات المتضررة,دعم مشاريع الزراعة المروية والتنمية الريفية,https://docs.google.com/document/d/example13
الحسكة,كانون الثاني,2025,1500000,765000,735000,525000,825000,150000,0.75,600000,150000,20.0,15.5,27.5,24.2,68.0,21.0,37.5,10.5,6.5,81.0,19.8,38.0,25.5,36.5,4,240,6,170,45,70,600,3,150,80,24,2,90,1,1,24,65,2,2,45,4500,65,170,140,2,1,2,1,240,140,45,6,12,1500,450,240,3,5,1,70,240000,160000,400000,7000,60000,2400,450,170,24,65,3,2,6,3,240,140,90,45,12,6,تطوير مراكز التنمية الريفية في المناطق الحدودية,تعزيز برامج التوعية بالحقوق الاجتماعية,دعم مشاريع الزراعة المروية والاستزراع السمكي,https://docs.google.com/document/d/example14`;

// =====================
// GOOGLE SHEETS API CONFIG
// =====================
const SHEETS_CONFIG = {
  apiKey: 'AIzaSyCJ1xkZxmF0UnWMdQYjLElklIPYgCkHM2A',
  spreadsheetId: '1gbP938zd_pO3qfYRG4Yd7LmH7MOSbeyvuwjq0Tnnnds',
  range: 'سوريا!A1:ZZ5000'
};

const COLUMN_MAP = {
  // === Core identifiers ===
  "المحافظة": "gov",
  "المحافظة ": "gov",
  "الشهر": "month",
  "السنة": "year",

  // === NEW: Population & Demographics ===
  "السكان دون 15 سنة": "pop_under15",
  "السكان 15-60 سنة": "pop_15_60",
  "السكان 60+ سنة": "pop_over60",

  // === NEW: Labor Market ===
  "حجم قوة العمل (مليون)": "labor_force",
  "المشتغلون": "employed",
  "المتعطلون": "unemployed",
  "معدل البطالة العام": "unemployment_rate",
  "معدل بطالة الذكور": "male_unemployment",
  "معدل بطالة الاناث": "female_unemployment",
  "معدل بطالة الشباب": "youth_unemployment",
  "معدل المشاركة في النشاط الاقتصادي / ذكور": "male_participation",
  "معدل المشاركة في النشاط الاقتصادي / إناث": "female_participation",
  "نسبة العمال في القطاع الخاص غير المنظم": "unorganized_workers",
  "توزع المشتغلين حسب العلاقة برب العمل": "employment_relation",

  // === NEW: Social Issues ===
  "معدل زواج القاصرات حسب المحافظات": "child_marriage_rate",
  "%معدل عمل الأطفال": "child_labor_rate",
  "معدل اكمال الدراسة في مرحلة التعليم الأساسيي": "basic_edu_completion",
  "نسبة النساء المعيلات": "female_breadwinners",

  // === NEW: Poverty ===
  // Exact names from user's CSV file (% at beginning)
  "%تقديرات الفقر وفق الأمن الغذائي ( الاسر الأمنة غذائيا )": "food_secure_pct",
  "%تقديرات الفقر وفق الأمن الغذائي (الاسر ذات الهشاشة)": "food_vulnerable_pct",
  "%تقديرات الفقر - الأمن الغذائي (الاسر المعدومة )": "food_insecure_pct",
  // Legacy names (for backward compatibility)
  "تقديرات الفقر وفق الأمن الغذائي ( الاسر الأمنة غذائيا ) %": "food_secure_pct",
  "تقديرات الفقر وفق الأمن الغذائي (الاسر ذات الهشاشة) %": "food_vulnerable_pct",
  "تقديرات الفقر وفق الأمن الغذائي (الاسر المعدومة) %": "food_insecure_pct",
  "تقديرات الفقر - الأمن الغذائي (الاسر المعدومة) %": "food_insecure_pct",

  // === Elderly Care ===
  "عدد دور الرعاية للمسنين": "elderly_homes",
  "عدد المستفيدين من خدمات دور رعاية المسنين": "elderly_benef",
  "النزلاء المستفيدين من الخدمات": "elderly_benef",

  // === Disability ===
  "عدد مراكز رعاية الاشخاص ذوي الاعاقة": "disability_centers",
  "عدد الطلاب المسجلين في المعاهد الخاصة بذوي الاعاقة": "disability_benef",
  "المستفيدين من خدمات المعاهد": "disability_benef",
  "عدد المستفيدين من توزيع المعينات الحركية": "mobility_aids",
  "المستفيدين  من المعونة النقدية لأسر الأشخاص من ذوي  الإعاقة": "disability_cash",
  "عدد الحاصلين الجدد على بطاقة الاشخاص ذوي الاعاقة": "disabled_cards",
  "عدد الأشخاص  ذوي الإعاقة الحاصلين على بطاقة الإعاقة": "disabled_cards",
  "عدد الأشخاص ذوي الإعاقة الحاصلين على بطاقة الإعاقة": "disabled_cards",

  // === Orphans ===
  "عدد دور رعاية الايتام": "orphan_homes",
  "عدد المستفيدين من خدمات  دور رعاية الايتام": "orphan_total_benef",
  "عدد المستفيدين من خدمات  دور رعاية الايتام": "orphan_total_benef",
  "عدد المستفيدين من الخدمات (كفالة داخلية )": "sponsor_internal",
  "عدد المستفيدين من الخدمات (كفالة خارجية)": "sponsor_external",

  // === Beggars ===
  "عدد مراكز رعاية المتسولين": "beggar_centers_total",
  "دور رعاية المتسولين الاجمالي": "beggar_centers_total",
  "دور رعاية المتسولين في الخدمة": "beggar_centers_active",
  "عدد النزلاء في مراكز التسول": "beggar_inmates",
  "عدد النزلاء": "beggar_inmates",

  // === Juvenile ===
  "معاهد الاحداث/ مراكز الملاحظة": "juvenile_inst",
  "عدد معاهد الاحداث في الخدمة": "juvenile_inst_active",
  "عدد النزلاء من الاحداث": "juvenile_inmates",

  // === Dar Lahn ===
  "المستفيدين من دار لحن الحياة": "dar_lahn_benef",

  // === Vocational Rehab ===
  "عدد مراكز التأهيل والتدريب المهني  (مراكز تمكين الشباب ان وجدت)": "vocational_centers",
  "عدد المراكز في الخدمة الفعلية": "vocational_active",
  "عدد المستفيدين من برامج مراكز التأهيل والتدريب المهني (مراكز تمكين الشباب ان وجدت)": "vocational_benef",

  // === Platform ===
  "عدد المسجلين على منصة سوق العمل(2024- 2025)": "platform_registered",
  "عدد المنشآت المسجلة في المنصة": "platform_establishments",
  "عدد فرص العمل على المنصة": "platform_jobs",
  "عدد فرص التدريب على المنصة": "platform_training",

  // === Rural ===
  "عدد مراكز التنمية الريفية خارج الخدمة": "rural_dev_total",
  "مراكز التنمية في الخدمة": "rural_dev_active",
  "عدد وحدات الصناعات الريفية خارج الخدمة": "rural_ind_total",
  "عدد وحدات الصناعة في الخدمة": "rural_ind_active",
  "مستفيدو مراكز التنمية الريفية": "rural_dev_benef",
  "مستفيدو وحدات الصناعات الريفية": "rural_ind_benef",

  // === NGOs ===
  "اجمالي عدد المنظمات غير الحكومية": "ngo_total",
  "عدد المنظمات غير الحكومية المسحوب ترخيصها": "ngo_active",
  "عدد المنظمات غير الحكومية المشهرة": "ngo_new_pct",

  // === Aid ===
  "عدد المساعدات  (سلة غذائية)": "food_baskets",
  "عدد المساعدات عينية (ادوية - عمليات- منظفات)": "in_kind_aid",
  "اعانات مالية": "cash_assistance",

  // === UN ===
  "عدد المراكز المجتمعية": "unhcr_centers",
  "مساحات امنة للنساء": "unfpa_safe_spaces",

  // === Camps ===
  "عدد المخيمات": "camps_count",
  "عدد الاسر المقيمة في المخيمات": "camp_families",
  "عدد العائدين": "returnees",

  // === Insurance ===
  "عدد المسجلين في التأمينات الاجتماعية/ قطاع عام": "insurance_public",
  "عدد المسجلين في التأمينات الاجتماعية / قطاع خاص": "insurance_private",
  "اجمالي عدد المسجلين القائمين على رأس عملهم": "insurance_total",
  "عدد المسجلين  الجدد من خلال الزيارات التفتيشية": "new_workers_insp",

  // === Pensions ===
  "عدد المتقاعدين المستفيدين": "pensioners",
  "عدد المستفيدين من تعويضات إصابات العمل": "work_injury_comp",
  "قرارات ضم الخدمة": "service_merge_decisions",
  "عدد المنشآت التي تم اشراكها بالتامينات": "insurance_establishments",

  // === Work Permits ===
  " منح تراخيص العمل  للعاملين غير السوريين": "work_permits_new",
  "تجديد تراخيص العمل  للعاملين غير السوريين": "work_permits_renew",
  "عدد مكاتب التشغيل المرخصة  لمزاولة مهنة استقدام العاملات غير السوريات": "recruitment_offices",
  "العاملات المنزليات غير السوريات (نم منحهن ترخيص العمل )": "domestic_permits_new",
  "عدد المكاتب المرخصة لتشغيل العمال المنزليين السوريين": "domestic_offices_syrian",
  "مكاتب مرخصة لمزاولة مهنة تشغيل خاص للعمال السوريين": "private_offices_syrian",

  // === Inspection ===
  "عدد الزيارات التفتيشية على المنشأت (صناعي – زراعي )": "insp_total",
  "زيارات تفتيشية على المنشآت (صناعي)": "insp_industrial",
  "الزيارات التفتيشية على المنشآت (صناعي)": "insp_industrial",
  "زيارات تفتيشية على المنشآت (زراعي)": "insp_agricultural",
  "الزيارات التفتيشية على المنشآت (زراعي)": "insp_agricultural",
  "المخالفات الناتجة عن الزيارات": "violations",

  // === Legal ===
  "مشاريع الصكوك القانونية الجديدة": "legal_docs_new",
  "مشاريع الصكوك القانونية  قيد المراجعة والتحديث": "legal_docs_review",

  // === Population ===
  "عدد السكان": "population",
  "ذكور": "males",
  "إناث": "females",

  "التقرير الشهرية": "monthly_report",

  // === ADDITIONAL MAPPINGS for user's Google Sheet columns ===
  "عدد الطلاب المسجلين في المعاهد  الخاصة بذوي الاعاقة": "disability_benef",
  "دور رعاية المسنين": "elderly_homes",
  "عدد معاهد الاحداث": "juvenile_inst",
  "عدد المسجلين  الجدد من العاملين خلال الزيارات التفتيشية لهذا الشهر": "new_workers_insp",
  "عدد الزيارات التفتيشية على المنشآت (صناعي)": "insp_industrial",
  "عدد الزيارات التفتيشية على المنشآت (زراعي)": "insp_agricultural",
  "عدد المخالفات الناتجة عن الزيارات": "violations",
  "عدد المنظمات غير الحكومية المشهرة في العام  2025": "ngo_new_pct_2025",
  "مشاريع الصكوك القانونية قيد المراجعة والتحديث": "legal_docs_review",
  "طابع زمني": "timestamp",
  "عنوان البريد الإلكتروني": "email",
  "عدد الندوات الحوارية والدورات حول قضايا الصحة والسلامة المهنية": "safety_workshops",
  "نسبة الانفاق الاستثماري": "investment_spending_pct",
  "عدد الاتفاقيات الموقعة بخصوص الحماية الاجتماعية": "social_protection_agreements",
  "عدد معاهد الاحداث ضمن الخدمة": "juvenile_inst_active",
  "عدد مراكز التنمية الريفية ضمن الخدمة": "rural_dev_active",
  "عدد وحدات الصناعات الريفية ضمن الخدمة": "rural_ind_active",
  "عدد المستفيدين من مراكز التنمية الريفية": "rural_dev_benef",
  "عدد المستفيدين من  وحدات الصناعات الريفية": "rural_ind_benef",
  "عدد   تراخيص العمل الممنوحة  للعاملين غير السوريين": "work_permits_new",
  "عدد تراخيص العمل المجدد  للعاملين غير السوريين": "work_permits_renew",
  "عدد تراخيص العمل  للعاملات المنزليات غير السوريات": "domestic_permits_new",
  "عدد تراحيص العمل  للعاملات المنزليات غير السوريات": "domestic_permits_issued",
  "عدد تراخيص العمل المجدد  للعاملات المنزليات غير السوريات": "domestic_permits_renew",
  "عدد المكاتب الخاصة  المرخصة لمزاولة مهنة تشغيل  للعمال السوريين": "private_offices_syrian",
  "عدد المستفيدين من برامج مراكز التأهيل والتدريب المهني (مراكز تنمية ريفية)": "vocational_benef_rural",
  "عدد المساعدات عينية ( ادوية - عمليات- منظفات)": "in_kind_aid",
  // === Qualitative ===
  "أهم ثلاث إنجازات": "achievements",
  "أهم ثلاث توصيات": "recommendations",
  "الاحتياجات الرئيسية": "needs",
};

// Build inverse mapping
Object.keys(COLUMN_MAP).forEach(k => { COLUMN_MAP_INV[COLUMN_MAP[k]] = k; });

// =====================
// STATE
// =====================
let ALL_DATA = [];
let activeGov = "all";
let selectedMonths = new Set();
let selectedMonthChips = new Set();
let charts = {};
let currentRankingMode = 'absolute'; // 'absolute' | 'perCapita' | 'coverage' | 'activityCount'
const MONTHS_LIST = ["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"];
const MONTH_ALIASES = {
  "كانون الثاني":"كانون الثاني", "يناير":"كانون الثاني", "يناير":"كانون الثاني", "january":"كانون الثاني", "jan":"كانون الثاني",
  "شباط":"شباط", "فبراير":"شباط", "فبرابر":"شباط", "february":"شباط", "feb":"شباط",
  "آذار":"آذار", "اذار":"آذار", "مارس":"آذار", "march":"آذار", "mar":"آذار",
  "نيسان":"نيسان", "ابريل":"نيسان", "أبريل":"نيسان", "april":"نيسان", "apr":"نيسان",
  "أيار":"أيار", "ايار":"أيار", "مايو":"أيار", "may":"أيار",
  "حزيران":"حزيران", "يونيو":"حزيران", "يونيه":"حزيران", "june":"حزيران", "jun":"حزيران",
  "تموز":"تموز", "يوليو":"تموز", "july":"تموز", "jul":"تموز",
  "آب":"آب", "اب":"آب", "أغسطس":"آب", "اغسطس":"آب", "august":"آب", "aug":"آب",
  "أيلول":"أيلول", "ايلول":"أيلول", "سبتمبر":"أيلول", "september":"أيلول", "sep":"أيلول", "sept":"أيلول",
  "تشرين الأول":"تشرين الأول", "تشرين الاول":"تشرين الأول", "أكتوبر":"تشرين الأول", "اكتوبر":"تشرين الأول", "october":"تشرين الأول", "oct":"تشرين الأول",
  "تشرين الثاني":"تشرين الثاني", "تشرين الثاني":"تشرين الثاني", "نوفمبر":"تشرين الثاني", "november":"تشرين الثاني", "nov":"تشرين الثاني",
  "كانون الأول":"كانون الأول", "كانون الاول":"كانون الأول", "ديسمبر":"كانون الأول", "december":"كانون الأول", "dec":"كانون الأول"
};
function normalizeMonth(value){
  const key = String(value ?? '').replace(/[ًٌٍَُِّْـ]/g, '').replace(/[أإآ]/g, 'ا').replace(/\s+/g, ' ').trim().toLowerCase();
  const normalizedAliases = Object.keys(MONTH_ALIASES).reduce((acc, alias) => {
    const normalizedKey = alias.replace(/[أإآ]/g, 'ا').toLowerCase();
    acc[normalizedKey] = MONTH_ALIASES[alias];
    return acc;
  }, {});
  return normalizedAliases[key] || String(value ?? '').replace(/\s+/g, ' ').trim();
}
const ALL_GOVS = ["دمشق","ريف دمشق","حلب","حمص","حماه","اللاذقية","طرطوس","السويداء","درعا","القنيطرة","ادلب","الرقة","دير الزور","الحسكة"];

function filtered(){
  let data = ALL_DATA;
  if(activeGov !== "all"){
    data = data.filter(d => d.gov === activeGov);
  }
  if(selectedMonths.size > 0){
    data = data.filter(d => selectedMonths.has(normalizeMonth(d.month)));
  }
  return data;
}

function sum(field, arr, fallback){
  return arr.reduce((a, r) => {
    let val = r[field];
    if ((val === undefined || val === null || val === '') && fallback !== undefined) {
      val = r[fallback];
    }
    const num = parseFloat(val);
    return a + (isNaN(num) ? 0 : num);
  }, 0);
}

const fmt = n => n.toLocaleString('en-US');
const PALETTE = ['#2563EB','#06B6D4','#14B8A6','#8B5CF6','#F59E0B','#F43F5E','#10B981','#6366F1','#0EA5E9','#84CC16','#EC4899','#64748B','#0F766E','#7C3AED'];

// =====================
// CSV PARSING - Auto detect delimiter
// =====================
function detectDelimiter(csvText){
  const firstLine = csvText.split('\n')[0];
  const delimiters = [
    {char:',', name:'فاصلة إنجليزية'},
    {char:'؛', name:'فاصلة عربية'},
    {char:';', name:'فاصلة منقوطة'},
    {char:'\t', name:'تاب'},
    {char:'|', name:'خط عمودي'}
  ];
  let best = {char:',', count:0};
  for(const d of delimiters){
    const count = (firstLine.match(new RegExp(d.char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    if(count > best.count) best = {char:d.char, count:count, name:d.name};
  }
  console.log('Detected delimiter:', best.name || best.char, 'count:', best.count);
  return best.char;
}

function parseCSVWithDelimiter(csvText, delimiter){
  // Proper CSV parser that supports multi-line quoted fields
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;
  let i = 0;

  function pushField(){
    let val = currentField.trim();
    // Remove surrounding quotes
    if(val.startsWith('"') && val.endsWith('"')){
      val = val.slice(1, -1);
    }
    // Unescape double quotes
    val = val.replace(/""/g, '"');
    currentRow.push(val);
    currentField = '';
  }

  function pushRow(){
    if(currentRow.length > 0){
      rows.push(currentRow);
      currentRow = [];
    }
  }

  while(i < csvText.length){
    const char = csvText[i];
    const nextChar = csvText[i+1];

    if(char === '"'){
      if(inQuotes && nextChar === '"'){
        currentField += '"';
        i += 2;
        continue;
      }
      inQuotes = !inQuotes;
      i++;
      continue;
    }

    if(char === '\r'){
      i++;
      continue; // Skip carriage return
    }

    if(char === '\n'){
      if(inQuotes){
        currentField += '\n';
        i++;
        continue;
      }
      pushField();
      pushRow();
      i++;
      continue;
    }

    if(char === delimiter && !inQuotes){
      pushField();
      i++;
      continue;
    }

    currentField += char;
    i++;
  }

  // Handle last field/row
  if(currentField !== '' || currentRow.length > 0){
    pushField();
    pushRow();
  }

  if(rows.length < 2) return [];

  const rawHeaders = rows[0];
  const headers = rawHeaders.map(h => {
    const key = h.trim();
    return COLUMN_MAP[key] || key;
  });

  console.log('Parsed headers:', headers);

  const result = [];
  for(let r = 1; r < rows.length; r++){
    const values = rows[r];
    if(values.length < 2) continue;

    const obj = {};
    headers.forEach((h, idx) => {
      let val = values[idx] !== undefined ? values[idx].trim() : '';
      if(h === 'month' && val) val = normalizeMonth(val);
      if(val && val !== ''){
        // Strip % sign and commas for percentage/numeric fields
        const cleanVal = val.replace(/%/g, '').replace(/,/g, '').trim();
        const num = parseFloat(cleanVal);
        if(!isNaN(num) && cleanVal !== '' && /^-?\d+\.?\d*$/.test(cleanVal)){
          obj[h] = num;
        }
        else obj[h] = val;
      }
      else if(val === '' || val === 'null' || val === 'NULL'){
        obj[h] = null;
      }
      else {
        obj[h] = val;
      }
    });
    result.push(obj);
  }
  return result;
}

// =====================
// DATA PROCESSING
// =====================
function processCSVData(csvText){
  try {
    const delimiter = detectDelimiter(csvText);
    const parsed = parseCSVWithDelimiter(csvText, delimiter);

    console.log('Parsed rows:', parsed.length);
    console.log('First row:', parsed[0]);

    if(parsed.length === 0) throw new Error('لا توجد بيانات في الملف');

    const firstRow = parsed[0];
    if(!firstRow.gov || !firstRow.month){ 
      throw new Error('الملف لا يحتوي على أعمدة المحافظة والشهر المطلوبة. تأكد من أن أسماء الأعمدة تطابق النموذج.');
    }

    ALL_DATA = parsed;
    selectedMonths = new Set([...new Set(ALL_DATA.map(d => d.month))]);
    selectedMonthChips.clear();

    const statusEl = document.getElementById('dataStatus');
    statusEl.textContent = `تم التحميل: ${parsed.length} سجل`; 
    statusEl.className = 'status-badge status-ok';

    syncMonthChipsWithData();
    renderAll();
    return true;
  } catch(err) {
    const statusEl = document.getElementById('dataStatus');
    statusEl.textContent = 'خطأ: ' + err.message;
    statusEl.className = 'status-badge status-error';
    alert('خطأ في معالجة البيانات: ' + err.message);
    return false;
  }
}

// =====================
// MONTH FILTER
// =====================
function filterByMonth(chipEl){
  const month = normalizeMonth(chipEl.getAttribute('data-month'));
  const allMonthChips = document.querySelectorAll('#monthToolbar .chip');

  if(month === 'all'){
    selectedMonthChips.clear();
    allMonthChips.forEach(c => {
      c.classList.remove('active');
      if(c.getAttribute('data-month') === 'all') c.classList.add('active');
    });
    selectedMonths = new Set([...new Set(ALL_DATA.map(d => d.month))]);
  } else {
    document.querySelector('#monthToolbar .chip[data-month="all"]').classList.remove('active');

    if(selectedMonthChips.has(month)){
      selectedMonthChips.delete(month);
      chipEl.classList.remove('active');
    } else {
      selectedMonthChips.add(month);
      chipEl.classList.add('active');
    }

    if(selectedMonthChips.size === 0){
      document.querySelector('#monthToolbar .chip[data-month="all"]').classList.add('active');
      selectedMonths = new Set([...new Set(ALL_DATA.map(d => d.month))]);
    } else {
      selectedMonths = new Set(selectedMonthChips);
    }
  }
  renderAll();
}

function syncMonthChipsWithData(){
  const availableMonths = new Set(ALL_DATA.map(d => normalizeMonth(d.month)));
  document.querySelectorAll('#monthSelect option').forEach(option => {
    if(option.value !== 'all') option.disabled = !availableMonths.has(normalizeMonth(option.value));
  });
}

// =====================
// MONTH FILTER SETUP
// =====================
function setupMonthFilter(){
  const select = document.getElementById('monthSelect');
  if(!select) return;
  select.addEventListener('change', function(){
    const month = normalizeMonth(this.value);
    if(month === 'all'){
      selectedMonthChips.clear();
      selectedMonths = new Set([...new Set(ALL_DATA.map(d => normalizeMonth(d.month)))]);
    } else {
      selectedMonthChips = new Set([month]);
      selectedMonths = new Set([month]);
    }
    updateActiveFilters();
    renderAll();
  });
}

// =====================
// GOVERNORATE FILTER
// =====================

// ===== COLLAPSIBLE FILTER PANEL =====
function toggleFilterPanel(){
  const panel = document.getElementById('filterPanel');
  const icon = document.getElementById('filterToggleIcon');
  const desc = document.getElementById('filterDesc');
  panel.classList.toggle('collapsed');
  const isCollapsed = panel.classList.contains('collapsed');
  if(desc){
    desc.textContent = isCollapsed 
      ? 'انقر لعرض خيارات التصفية' 
      : 'اختر المحافظة والشهر لعرض البيانات المطلوبة — انقر للطي';
  }
}

function resetFilters(){
  activeGov = 'all';
  selectedMonthChips.clear();
  selectedMonths = new Set([...new Set(ALL_DATA.map(d => normalizeMonth(d.month)))].filter(m => m));
  const govSelect = document.getElementById('govSelect');
  const monthSelect = document.getElementById('monthSelect');
  if(govSelect) govSelect.value = 'all';
  if(monthSelect) monthSelect.value = 'all';
  updateActiveFilters();
  renderAll();
}
function setupGovFilter(){
  const select = document.getElementById('govSelect');
  const reset = document.getElementById('filterReset');
  if(select){
    select.addEventListener('change', function(){
      activeGov = this.value;
      updateActiveFilters();
      renderAll();
    });
  }
  if(reset){
    reset.addEventListener('click', function(){
      activeGov = 'all';
      selectedMonthChips.clear();
      selectedMonths = new Set([...new Set(ALL_DATA.map(d => normalizeMonth(d.month)))]);
      if(select) select.value = 'all';
      const monthSelect = document.getElementById('monthSelect');
      if(monthSelect) monthSelect.value = 'all';
      updateActiveFilters();
      renderAll();
    });
  }
  updateActiveFilters();
}

function updateActiveFilters(){
  const container = document.getElementById('activeFilters');
  if(!container) return;
  const govText = activeGov === 'all' ? 'كل المحافظات' : activeGov;
  const monthValues = [...selectedMonthChips];
  const monthText = monthValues.length === 0 ? 'كل الأشهر' : monthValues.join('، ');
  container.innerHTML = '<span class="active-filters-label">الحالة الحالية:</span>' +
    `<span class="filter-tag">${govText}</span><span class="filter-tag">${monthText}</span>`;
}

// =====================
// KPIs
// =====================
function kpiDefs(arr){
  return [
    {em:"👥",lbl:"إجمالي السكان",val:sumStatic("population")},
    {em:"♂️",lbl:"الذكور",val:sumStatic("males")},
    {em:"♀️",lbl:"الإناث",val:sumStatic("females")},
    {em:"💼",lbl:"المشتغلون",val:sumStatic("employed")},
    {em:"📉",lbl:"معدل البطالة",val:avgStatic("unemployment_rate")+"%",raw:true},
    {em:"👵",lbl:"دور رعاية المسنين",val:sum("elderly_homes",arr)},
    {em:"🦽",lbl:"بطاقات إعاقة جديدة",val:sum("disabled_cards",arr)},
    {em:"🏛️",lbl:"معاهد الإعاقة",val:sum("disability_centers",arr)},
    {em:"👶",lbl:"دور رعاية الأيتام",val:sum("orphan_homes",arr)},
    {em:"💞",lbl:"كفالة داخلية",val:sum("sponsor_internal",arr)},
    {em:"🌍",lbl:"كفالة خارجية",val:sum("sponsor_external",arr)},
    {em:"🤝",lbl:"عدد المنظمات غير الحكومية المسحوب ترخيصها",val:sum("ngo_active",arr)},
    {em:"📜",lbl:"عدد المنظمات غير الحكومية المشهرة 2025",val:sum("ngo_new_pct_2025",arr)},
    {em:"📜",lbl:"عدد المنظمات غير الحكومية المشهرة",val:sum("ngo_new_pct",arr)},
    {em:"🏗️",lbl:"المنشآت المسجلة",val:sum("platform_establishments",arr)},
    {em:"📋",lbl:"فرص العمل",val:sum("platform_jobs",arr)},
    {em:"🎓",lbl:"فرص التدريب",val:sum("platform_training",arr)},
    {em:"🏥",lbl:"اجمالي المستفيدين القائمين على راس عملهم",val:sum("insurance_total",arr)},
    {em:"🍞",lbl:"سلل غذائية",val:sum("food_baskets",arr)},
    {em:"🏕️",lbl:"المخيمات",val:sum("camps_count",arr)},
    {em:"🏠",lbl:"العائدون",val:sum("returnees",arr)},
    {em:"⚠️",lbl:"مخالفات مسجّلة",val:sum("violations",arr)},
    {em:"📜",lbl:"تراخيص عمل جديدة",val:sum("work_permits_new",arr)}];
}

function avg(field, arr){
  const vals = arr.map(d => {
    const v = d[field];
    if(v === null || v === undefined || v === '') return null;
    const n = parseFloat(v);
    return isNaN(n) ? null : n;
  }).filter(v => v !== null);
  if(vals.length === 0) return 0;
  return (vals.reduce((a,b) => a+b, 0) / vals.length).toFixed(1);
}

function renderKPIs(){
  const arr = filtered();
  document.getElementById('kpiGrid').innerHTML = kpiDefs(arr).map(k => {
    const displayVal = k.raw ? k.val : fmt(k.val);
    return `<div class="kpi"><div class="seal">${k.em}</div><div class="val">${displayVal}</div><div class="lbl">${k.lbl}</div></div>`;
  }).join('');
}

// =====================
// CHARTS
// =====================
function barChart(canvasId, dataField){
  const arr = filtered();

  // If single governorate selected, show INDICATORS as bars instead of governorates
  if(activeGov !== 'all' && arr.length > 0){
    renderSingleGovChart(canvasId, arr, dataField);
    return;
  }

  // Default: show all governorates (aggregate by gov)
  const grouped = {};
  arr.forEach(d => {
    if(!grouped[d.gov]) grouped[d.gov] = {...d};
    else {
      Object.keys(d).forEach(key => {
        if(typeof d[key] === 'number'){
          grouped[d.gov][key] = (grouped[d.gov][key] || 0) + d[key];
        }
      });
    }
  });

  // When showing "all" governorates, ensure all 14 appear even with 0 values
  ALL_GOVS.forEach(gov => {
    if(!grouped[gov]){
      grouped[gov] = { gov: gov };
    }
  });

  const govList = Object.values(grouped);
  const labels = govList.map(d => d.gov);
  const data = govList.map(d => d[dataField] || 0);

  const chartHeight = Math.max(220, labels.length * 42);
  const canvas = document.getElementById(canvasId);
  if(canvas && canvas.parentElement){
    canvas.parentElement.style.height = chartHeight + 'px';
  }

  if(charts[canvasId]) charts[canvasId].destroy();
  const ctx = canvas.getContext('2d');
  charts[canvasId] = new Chart(ctx, {
    type: 'bar',
    data: { 
      labels, 
      datasets: [{ 
        data, 
        backgroundColor: labels.map((_,i) => PALETTE[i % PALETTE.length]),
        borderColor: 'rgba(255,255,255,.7)',
        borderWidth: 1,
        hoverBackgroundColor: '#06B6D4',
        borderRadius: 8,
        maxBarThickness: 30,
        barPercentage: 0.68,
        categoryPercentage: 0.78
      }] 
    },
    options: { 
      indexAxis: 'y', 
      plugins: { 
        legend: { display: false }, 
        tooltip: { rtl: true, titleFont: { family: 'Cairo' }, bodyFont: { family: 'Cairo' } } 
      }, 
      scales: { 
        x: { 
          grid: { color: 'rgba(100,116,139,.14)', drawBorder: false }, 
          ticks: { font: { family: 'IBM Plex Mono', size: 11 } },
          beginAtZero: true
        }, 
        y: { 
          grid: { display: false }, 
          ticks: { font: { family: 'Cairo', size: 12.5 } } 
        } 
      }, 
      responsive: true, 
      maintainAspectRatio: false 
    }
  });
}

// NEW: Chart for single governorate showing all indicators
function renderSingleGovChart(canvasId, arr, categoryField){
  // Aggregate ALL rows for this governorate (multiple months)
  const agg = {};
  let govName = '';
  arr.forEach(row => {
    govName = row.gov || govName;
    Object.keys(row).forEach(key => {
      if (key === 'gov' || key === 'month') return;
      const val = row[key];
      if (typeof val === 'number') {
        agg[key] = (agg[key] || 0) + val;
      } else if (typeof val === 'string' && val.trim()) {
        if (!agg[key]) agg[key] = val;
      }
    });
  });

  // Define indicators for each category
  const indicatorMap = {
    'disabled_cards': [
      {key:'disabled_cards', label:'بطاقات إعاقة'},
      {key:'disability_centers', label:'معاهد الإعاقة'},
      {key:'disability_benef', label:'طلاب معاهد الإعاقة'},
      {key:'mobility_aids', label:'معينات حركية'},
      {key:'disability_cash', label:'معونة نقدية'}
    ],
    'elderly_benef': [
      {key:'elderly_homes', label:'دور مسنين'},
      {key:'elderly_benef', label:'مستفيدو دور المسنين'},
      {key:'beggar_centers_total', label:'مراكز تسول (إجمالي)'},
      {key:'beggar_centers_active', label:'مراكز تسول نشطة'},
      {key:'beggar_inmates', label:'نزلاء مراكز التسول'},
      {key:'orphan_homes', label:'دور أيتام'},
      {key:'sponsor_internal', label:'كفالة داخلية'},
      {key:'sponsor_external', label:'كفالة خارجية'},
      {key:'dar_lahn_benef', label:'مستفيدو دار لحن'}
    ],
    'ngo_active': [
      {key:'ngo_active', label:'المنظمات المسحوب ترخيصها'},
      {key:'ngo_new_pct', label:'المنظمات المشهرة (عام)'},
      {key:'ngo_new_pct_2025', label:'المنظمات المشهرة 2025'}
    ],
    'juvenile_inmates': [
      {key:'juvenile_inst', label:'معاهد أحداث'},
      {key:'juvenile_inst_active', label:'معاهد بالخدمة'},
      {key:'juvenile_inmates', label:'نزلاء أحداث'}
    ],
    'rural_dev_benef': [
      {key:'rural_dev_total', label:'مراكز تنمية (خارج الخدمة)'},
      {key:'rural_dev_active', label:'مراكز تنمية نشطة'},
      {key:'rural_ind_total', label:'وحدات صناعية (خارج الخدمة)'},
      {key:'rural_ind_active', label:'وحدات صناعية نشطة'},
      {key:'rural_dev_benef', label:'مستفيدو التنمية الريفية'},
      {key:'rural_ind_benef', label:'مستفيدو الصناعات الريفية'}
    ],
    'insp_industrial': [
      {key:'insp_industrial', label:'زيارات صناعية', fallback:'insp_total'},
      {key:'insp_agricultural', label:'زيارات زراعية'},
      {key:'insp_total', label:'إجمالي الزيارات'},
      {key:'violations', label:'مخالفات'},
      {key:'new_workers_insp', label:'عمال جدد'},
      {key:'work_permits_new', label:'تراخيص عمل جديدة'},
      {key:'work_permits_renew', label:'تجديد تراخيص'},
      {key:'recruitment_offices', label:'مكاتب استقدام'},
      {key:'domestic_permits_new', label:'تراخيص منزليات'},
      {key:'domestic_offices_syrian', label:'مكاتب تشغيل سوريين'},
      {key:'private_offices_syrian', label:'مكاتب خاصة سوريين'},
      {key:'legal_docs_new', label:'صكوك جديدة'},
      {key:'legal_docs_review', label:'صكوك قيد المراجعة'}
    ],
    'insp_total': [
      {key:'insp_total', label:'إجمالي الزيارات'},
      {key:'violations', label:'مخالفات'},
      {key:'new_workers_insp', label:'عمال جدد'},
      {key:'work_permits_new', label:'تراخيص جديدة'},
      {key:'work_permits_renew', label:'تجديد تراخيص'},
      {key:'recruitment_offices', label:'مكاتب استقدام'},
      {key:'domestic_permits_new', label:'تراخيص منزليات'},
      {key:'domestic_offices_syrian', label:'مكاتب تشغيل سوريين'},
      {key:'private_offices_syrian', label:'مكاتب خاصة سوريين'},
      {key:'legal_docs_new', label:'صكوك جديدة'},
      {key:'legal_docs_review', label:'صكوك قيد المراجعة'}
    ],
    'population': [
      {key:'population', label:'السكان'},
      {key:'males', label:'الذكور'},
      {key:'females', label:'الإناث'},
      {key:'pop_under15', label:'دون 15 سنة'},
      {key:'pop_15_60', label:'15-60 سنة'},
      {key:'pop_over60', label:'60+ سنة'}
    ],
    'food_baskets': [
      {key:'food_baskets', label:'سلل غذائية'},
      {key:'in_kind_aid', label:'مساعدات عينية'},
      {key:'cash_assistance', label:'إعانات مالية'},
      {key:'unhcr_centers', label:'مراكز UNHCR'},
      {key:'unfpa_safe_spaces', label:'مساحات آمنة'}
    ],
    'platform_registered': [
      {key:'platform_registered', label:'مسجّلون على المنصة'},
      {key:'platform_establishments', label:'منشآت مسجّلة'},
      {key:'platform_jobs', label:'فرص عمل'},
      {key:'platform_training', label:'فرص تدريب'},
      {key:'vocational_centers', label:'مراكز التأهيل والإرشاد (قدرات)'},
      {key:'vocational_benef', label:'مستفيدو التأهيل والإرشاد (تمكين الشباب)'}
    ],
    'insurance_total': [
      {key:'insurance_public', label:'قطاع عام'},
      {key:'insurance_private', label:'قطاع خاص'},
      {key:'insurance_total', label:'إجمالي المسجّلين'},
      {key:'pensioners', label:'متقاعدون'},
      {key:'work_injury_comp', label:'تعويضات إصابات'},
      {key:'service_merge_decisions', label:'ضم خدمة'},
      {key:'injury_beneficiaries', label:'مستفيدو إصابات'},
      {key:'insurance_establishments', label:'منشآت مشمولة'}
    ],
    'employed': [
      {key:'labor_force', label:'حجم قوة العمل (مليون)'},
      {key:'employed', label:'المشتغلون'},
      {key:'unemployed', label:'المتعطلون'},
      {key:'unemployment_rate', label:'معدل البطالة %'},
      {key:'male_unemployment', label:'بطالة الذكور %'},
      {key:'female_unemployment', label:'بطالة الإناث %'},
      {key:'youth_unemployment', label:'بطالة الشباب %'},
      {key:'male_participation', label:'مشاركة الذكور %'},
      {key:'female_participation', label:'مشاركة الإناث %'},
      {key:'unorganized_workers', label:'عمال غير منظم %'}],
    'camps_count': [
      {key:'camps_count', label:'المخيمات'},
      {key:'camp_families', label:'الأسر المقيمة'}
    ]
  };

  // Find the right indicator set
  let indicators = indicatorMap[categoryField];

  // Fallback: search all sets for a matching key
  if(!indicators){
    for(const set of Object.values(indicatorMap)){
      if(set.some(item => item.key === categoryField)){
        indicators = set;
        break;
      }
    }
  }

  // Ultimate fallback: show all numeric fields with values >= 0
  if(!indicators || indicators.length === 0){
    indicators = Object.keys(agg)
      .filter(k => typeof agg[k] === 'number')
      .slice(0, 12)
      .map(k => ({key:k, label: COLUMN_MAP_INV[k] || k}));
  }

  // Filter out indicators with zero values for cleaner display
  // BUT always keep the primary indicator (categoryField itself) if it exists
  const primaryKey = categoryField;
  let activeIndicators = indicators.filter(i => {
    const val = agg[i.key] !== undefined ? agg[i.key] : (i.fallback ? agg[i.fallback] : 0);
    return (val || 0) > 0;
  });

  // Ensure primary indicator is always shown if it has any value (even 0)
  const primaryInActive = activeIndicators.some(i => i.key === primaryKey);
  const primaryInList = indicators.some(i => i.key === primaryKey);
  if(!primaryInActive && primaryInList){
    const primaryItem = indicators.find(i => i.key === primaryKey);
    if(primaryItem) activeIndicators.unshift(primaryItem);
  }

  // If ALL zeros, show them anyway so user sees something
  const finalIndicators = activeIndicators.length > 0 ? activeIndicators : indicators;

  const labels = finalIndicators.map(i => i.label);
  const data = finalIndicators.map(i => {
    const val = agg[i.key] !== undefined ? agg[i.key] : (i.fallback ? agg[i.fallback] : 0);
    return val || 0;
  });

  const canvas = document.getElementById(canvasId);
  if(!canvas) return;

  if(canvas.parentElement){
    canvas.parentElement.style.height = Math.max(280, labels.length * 42) + 'px';
  }

  if(charts[canvasId]) charts[canvasId].destroy();
  const ctx = canvas.getContext('2d');
  charts[canvasId] = new Chart(ctx, {
    type: 'bar',
    data: { 
      labels, 
      datasets: [{ 
        label: govName,
        data, 
        backgroundColor: labels.map((_,i) => PALETTE[i % PALETTE.length]), 
        borderRadius: 8, 
        maxBarThickness: 32,
        barPercentage: 0.65
      }] 
    },
    options: { 
      indexAxis: 'y', 
      plugins: { 
        legend: { display: false }, 
        tooltip: { 
          rtl: true, 
          titleFont: { family: 'Cairo' }, 
          bodyFont: { family: 'Cairo' },
          callbacks: {
            label: function(context) {
              const val = context.parsed.x;
              return (val ? val.toLocaleString('en-US') : '0') + ' — ' + context.dataset.label;
            }
          }
        } 
      }, 
      scales: { 
        x: { 
          grid: { color: 'rgba(100,116,139,.14)', drawBorder: false }, 
          ticks: { 
            font: { family: 'IBM Plex Mono', size: 11 },
            callback: function(value) {
              return value >= 1000000 ? (value/1000000).toFixed(1) + 'M' : 
                     value >= 1000 ? (value/1000).toFixed(0) + 'k' : value;
            }
          },
          beginAtZero: true
        }, 
        y: { 
          grid: { display: false }, 
          ticks: { font: { family: 'Cairo', size: 12 } } 
        } 
      }, 
      responsive: true, 
      maintainAspectRatio: false 
    }
  });
}

function renderCards(containerId, items){
  document.getElementById(containerId).innerHTML = items.map(it => {
    const displayN = it.raw ? it.n : fmt(it.n);
    return `<div class="ind-card"><span class="em">${it.em}</span><div><div class="n">${displayN}</div><div class="t">${it.t}</div></div></div>`;
  }).join('');
}

// =====================
// STATIC INDICATORS (month-independent)
// =====================
function getStaticValues(field){
  const govValues = {};
  ALL_DATA.forEach(d => {
    if(activeGov !== 'all' && d.gov !== activeGov) return;
    const val = d[field];
    if(val !== null && val !== undefined && val !== ''){
      const n = (typeof val === 'number') ? val : parseFloat(val);
      if(!isNaN(n)){
        if(!(d.gov in govValues) || n > govValues[d.gov]){
          govValues[d.gov] = n;
        }
      }
    }
  });
  return Object.values(govValues);
}

function sumStatic(field){
  const vals = getStaticValues(field);
  if(vals.length === 0){
    console.warn('sumStatic: no values for field', field, 'gov:', activeGov);
    return 0;
  }
  return vals.reduce((a, v) => a + v, 0);
}

function avgStatic(field){
  const vals = getStaticValues(field);
  if(vals.length === 0){
    console.warn('avgStatic: no values for field', field, 'gov:', activeGov);
    return 0;
  }
  return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
}

function renderCategory(cat){
  const arr = filtered();

  if(cat === 'disability'){
    barChart('chart-disability', 'disabled_cards');
    renderCards('cards-disability', [
      {em:'🦽',n:sum('disabled_cards',arr),t:'إجمالي بطاقات الإعاقة الصادرة'},
      {em:'🏛️',n:sum('disability_centers',arr),t:'معاهد رعاية وتأهيل الأشخاص ذوي الإعاقة'},
      {em:'👨‍🎓',n:sum('disability_benef',arr),t:'عدد الطلاب المسجلين في المعاهد الخاصة بذوي الاعاقة'},
      {em:'🦽',n:sum('mobility_aids',arr),t:'المستفيدين من توزيع المعينات الحركية'},
      {em:'💰',n:sum('disability_cash',arr),t:'المعونة النقدية لأسر ذوي الإعاقة'}
    ]);
    const zeroGovs = arr.filter(d => (d.disabled_cards||0) === 0).map(d => d.gov);
    document.getElementById('note-disability').textContent = zeroGovs.length > 0 
      ? `💡 محافظة ${zeroGovs.join(' و')} سجّلت صفراً في بطاقات الإعاقة — يستحق التحقق.` 
      : `💡 جميع المحافظات سجّلت بطاقات إعاقة.`;
  }

  if(cat === 'social'){
    barChart('chart-social', 'elderly_benef');
    renderCards('cards-social', [
      {em:'👵',n:sum('elderly_homes',arr),t:'دور رعاية كبار السن'},
      {em:'🧓',n:sum('elderly_benef',arr),t:'عدد المستفيدين من خدمات دور رعاية المسنين'},
      {em:'🏚️',n:sum('beggar_centers_total',arr),t:'عدد مراكز رعاية المتسولين'},
      {em:'🚶',n:sum('beggar_inmates',arr),t:'عدد النزلاء في مراكز التسول'},
      {em:'👶',n:sum('orphan_homes',arr),t:'دور رعاية الأيتام'},
      {em:'🧒',n:sum('orphan_total_benef',arr),t:'إجمالي المستفيدين من خدمات دور رعاية الأيتام'},
      {em:'💞',n:sum('sponsor_internal',arr),t:'مستفيدو الكفالة الداخلية'},
      {em:'🌍',n:sum('sponsor_external',arr),t:'مستفيدو الكفالة الخارجية'},
      {em:'🎵',n:sum('dar_lahn_benef',arr),t:'مستفيدو دار لحن الحياة'}
    ]);
    const totalOrphanBenef = sum('orphan_total_benef', arr);
    const intSponsor = sum('sponsor_internal', arr);
    const extSponsor = sum('sponsor_external', arr);
    const extTotal = sum('sponsor_external', arr);
    const idlibExt = arr.filter(d => d.gov === 'ادلب').reduce((a,d) => a + (d.sponsor_external||0), 0);
    const pct = extTotal > 0 ? Math.round((idlibExt/extTotal)*100) : 0;
    const darLahn = sum('dar_lahn_benef', arr);
    document.getElementById('note-social').textContent = 
      `💡 إجمالي المستفيدين من خدمات الأيتام: ${fmt(totalOrphanBenef)} (كفالة داخلية: ${fmt(intSponsor)}، كفالة خارجية: ${fmt(extSponsor)}). تتركز الكفالة الخارجية بنسبة ~${pct}% في ادلب. عدد النزلاء في مراكز التسول: ${fmt(sum('beggar_inmates',arr))}. مستفيدو دار لحن: ${fmt(darLahn)}.`;
  }

  if(cat === 'ngo'){
    barChart('chart-ngo', 'ngo_active');
    renderCards('cards-ngo', [
      {em:'📜',n:sum('ngo_new_pct',arr),t:'عدد المنظمات غير الحكومية المشهرة (عام)'},
      {em:'📅',n:sum('ngo_new_pct_2025',arr),t:'عدد المنظمات غير الحكومية المشهرة 2025'},
      {em:'🤝',n:sum('ngo_active',arr),t:'عدد المنظمات غير الحكومية المسحوب ترخيصها'}]);
    document.getElementById('note-ngo').textContent = 
      `💡 ${sum('ngo_active',arr)} منظمة مسحوبة الترخيص من إجمالي ${sum('ngo_total',arr)} منظمة — المشهرة (عام): ${sum('ngo_new_pct',arr)} | المشهرة (2025): ${sum('ngo_new_pct_2025',arr)}.`;
  }

  if(cat === 'juvenile'){
    barChart('chart-juvenile', 'juvenile_inmates');
    renderCards('cards-juvenile', [
      {em:'🏛️',n:sum('juvenile_inst',arr),t:'معاهد إصلاح الأحداث (الكلي)'},
      {em:'✅',n:sum('juvenile_inst_active',arr),t:'معاهد الأحداث في الخدمة'},
      {em:'⚖️',n:sum('juvenile_inmates',arr),t:'نزلاء معاهد الأحداث'}
    ]);
    const total = sum('juvenile_inmates', arr);
    const top2 = arr.filter(d => d.gov === 'ريف دمشق' || d.gov === 'حلب').reduce((a,d) => a + (d.juvenile_inmates||0), 0);
    const pct = total > 0 ? Math.round((top2/total)*100) : 0;
    document.getElementById('note-juvenile').textContent = 
      `💡 أكثر من ${pct}% من نزلاء الأحداث في ريف دمشق وحلب فقط، رغم وجود معاهد مرخصة في محافظات أخرى بلا نزلاء مسجّلين — قد يعني معاهد متوقفة فعلياً.`;
  }

  if(cat === 'rural'){
    barChart('chart-rural', 'rural_dev_benef');
    renderCards('cards-rural', [
      {em:'🌾',n:sum('rural_dev_total',arr),t:'عدد مراكز التنمية الريفية خارج الخدمة'},
      {em:'🏘️',n:sum('rural_dev_active',arr),t:'مراكز التنمية في الخدمة'},
      {em:'🏭',n:sum('rural_ind_total',arr),t:'وحدات الصناعات الريفية خارج الخدمة'},
      {em:'🏗️',n:sum('rural_ind_active',arr),t:'عدد وحدات الصناعة في الخدمة'},
      {em:'👥',n:sum('rural_dev_benef',arr),t:'مستفيدو مراكز التنمية الريفية'},
      {em:'👷',n:sum('rural_ind_benef',arr),t:'مستفيدو وحدات الصناعات الريفية'}
    ]);
    const topDev = arr.reduce((a,d) => (d.rural_dev_benef||0) > (a.val||0) ? {gov:d.gov, val:d.rural_dev_benef||0} : a, {gov:'', val:0});
    const topInd = arr.reduce((a,d) => (d.rural_ind_benef||0) > (a.val||0) ? {gov:d.gov, val:d.rural_ind_benef||0} : a, {gov:'', val:0});
    document.getElementById('note-rural').textContent = 
      `💡 ${topDev.gov || 'لا توجد بيانات'} تتصدر التنمية الريفية (${fmt(topDev.val)})، و${topInd.gov || 'لا'} تتصدر الصناعات الريفية (${fmt(topInd.val)}).`;
  }

  if(cat === 'labor'){
    // Check if new split columns exist, otherwise fall back to insp_total
    const hasInspInd = arr.some(d => d.insp_industrial !== undefined && d.insp_industrial !== null && d.insp_industrial !== '');
    const hasInspAgri = arr.some(d => d.insp_agricultural !== undefined && d.insp_agricultural !== null && d.insp_agricultural !== '');
    const hasInspTotal = arr.some(d => d.insp_total !== undefined && d.insp_total !== null && d.insp_total !== '');

    if (hasInspInd || hasInspAgri) {
      // New format: separate industrial and agricultural columns
      barChart('chart-labor', 'insp_industrial');
      renderCards('cards-labor', [
        {em:'👷',n:sum('new_workers_insp',arr),t:'عمال مسجّلون حديثاً بالتفتيش'},
        {em:'🏭',n:sum('insp_industrial',arr),t:'زيارات تفتيشية على المنشآت (صناعي)'},
        {em:'🌾',n:sum('insp_agricultural',arr),t:'زيارات تفتيشية على المنشآت (زراعي)'},
        {em:'⚠️',n:sum('violations',arr),t:'مخالفات مسجّلة'},
        {em:'📜',n:sum('legal_docs_new',arr),t:'صكوك قانونية جديدة'},
        {em:'📝',n:sum('legal_docs_review',arr),t:'صكوك قيد المراجعة'},
        {em:'📋',n:sum('work_permits_new',arr),t:'تراخيص عمل جديدة (غير سوريين)'},
        {em:'🔄',n:sum('work_permits_renew',arr),t:'تجديد تراخيص العمل'},
        {em:'🏢',n:sum('recruitment_offices',arr),t:'مكاتب استقدام عاملات منزليات'},
        {em:'👩',n:sum('domestic_permits_new',arr),t:'تراخيص عاملات منزليات جديدة'},
        {em:'🏠',n:sum('domestic_offices_syrian',arr),t:'مكاتب تشغيل عمال منزليين سوريين'},
        {em:'🔧',n:sum('private_offices_syrian',arr),t:'مكاتب تشغيل خاص للعمال السوريين'}
      ]);
      const totalInspInd = sum('insp_industrial', arr);
      const totalInspAgri = sum('insp_agricultural', arr);
      const totalInsp = totalInspInd + totalInspAgri;
      const totalViol = sum('violations', arr);
      const violRate = totalInsp > 0 ? ((totalViol/totalInsp)*100).toFixed(1) : 0;
      document.getElementById('note-labor').textContent = 
        `💡 ${fmt(totalInspInd)} زيارة صناعية + ${fmt(totalInspAgri)} زيارة زراعية = ${fmt(totalInsp)} إجمالي — أسفرت عن ${fmt(totalViol)} مخالفة (نسبة ${violRate}%).`;
    } else if (hasInspTotal) {
      // Legacy format: single insp_total column
      barChart('chart-labor', 'insp_total');
      renderCards('cards-labor', [
        {em:'👷',n:sum('new_workers_insp',arr),t:'عمال مسجّلون حديثاً بالتفتيش'},
        {em:'🏗️',n:sum('insp_total',arr),t:'الزيارات التفتيشية على المنشآت (صناعي+زراعي)'},
        {em:'⚠️',n:sum('violations',arr),t:'مخالفات مسجّلة'},
        {em:'📜',n:sum('legal_docs_new',arr),t:'صكوك قانونية جديدة'},
        {em:'📝',n:sum('legal_docs_review',arr),t:'صكوك قيد المراجعة'},
        {em:'📋',n:sum('work_permits_new',arr),t:'تراخيص عمل جديدة (غير سوريين)'},
        {em:'🔄',n:sum('work_permits_renew',arr),t:'تجديد تراخيص العمل'},
        {em:'🏢',n:sum('recruitment_offices',arr),t:'مكاتب استقدام عاملات منزليات'},
        {em:'👩',n:sum('domestic_permits_new',arr),t:'تراخيص عاملات منزليات جديدة'},
        {em:'🏠',n:sum('domestic_offices_syrian',arr),t:'مكاتب تشغيل عمال منزليين سوريين'},
        {em:'🔧',n:sum('private_offices_syrian',arr),t:'مكاتب تشغيل خاص للعمال السوريين'}
      ]);
      const totalInsp = sum('insp_total', arr);
      const totalViol = sum('violations', arr);
      const violRate = totalInsp > 0 ? ((totalViol/totalInsp)*100).toFixed(1) : 0;
      document.getElementById('note-labor').textContent = 
        `💡 ${fmt(totalInsp)} زيارة تفتيشية (صناعي+زراعي) — أسفرت عن ${fmt(totalViol)} مخالفة (نسبة ${violRate}%). ملاحظة: أضف عمودي "زيارات تفتيشية على المنشآت (صناعي)" و"زيارات تفتيشية على المنشآت (زراعي)" في CSV للتفصيل.`;
    } else {
      // No inspection data at all
      barChart('chart-labor', 'insp_industrial');
      renderCards('cards-labor', [
        {em:'👷',n:sum('new_workers_insp',arr),t:'عمال مسجّلون حديثاً بالتفتيش'},
        {em:'🏭',n:0,t:'زيارات تفتيشية على المنشآت (صناعي)'},
        {em:'🌾',n:0,t:'زيارات تفتيشية على المنشآت (زراعي)'},
        {em:'⚠️',n:sum('violations',arr),t:'مخالفات مسجّلة'},
        {em:'📜',n:sum('legal_docs_new',arr),t:'صكوك قانونية جديدة'},
        {em:'📝',n:sum('legal_docs_review',arr),t:'صكوك قيد المراجعة'},
        {em:'📋',n:sum('work_permits_new',arr),t:'تراخيص عمل جديدة (غير سوريين)'},
        {em:'🔄',n:sum('work_permits_renew',arr),t:'تجديد تراخيص العمل'},
        {em:'🏢',n:sum('recruitment_offices',arr),t:'مكاتب استقدام عاملات منزليات'},
        {em:'👩',n:sum('domestic_permits_new',arr),t:'تراخيص عاملات منزليات جديدة'},
        {em:'🏠',n:sum('domestic_offices_syrian',arr),t:'مكاتب تشغيل عمال منزليين سوريين'},
        {em:'🔧',n:sum('private_offices_syrian',arr),t:'مكاتب تشغيل خاص للعمال السوريين'}
      ]);
      document.getElementById('note-labor').textContent = 
        `💡 لا توجد بيانات تفتيشية مسجّلة. أضف أعمدة "زيارات تفتيشية على المنشآت (صناعي)" و"زيارات تفتيشية على المنشآت (زراعي)" في ملف CSV.`;
    }
  }

  if(cat === 'labor_market'){
    barChart('chart-labor_market', 'employed');
    renderCards('cards-labor_market', [
      {em:'💪',n:sum('labor_force',arr),t:'حجم قوة العمل (مليون)'},
      {em:'💼',n:sum('employed',arr),t:'المشتغلون'},
      {em:'🚫',n:sum('unemployed',arr),t:'المتعطلون'},
      {em:'📉',n:avg('unemployment_rate',arr)+'%',t:'معدل البطالة العام',raw:true},
      {em:'👨‍💼',n:avg('male_unemployment',arr)+'%',t:'بطالة الذكور',raw:true},
      {em:'👩‍💼',n:avg('female_unemployment',arr)+'%',t:'بطالة الإناث',raw:true},
      {em:'🧑‍🎓',n:avg('youth_unemployment',arr)+'%',t:'بطالة الشباب',raw:true},
      {em:'♂️',n:avg('male_participation',arr)+'%',t:'مشاركة الذكور اقتصادياً',raw:true},
      {em:'♀️',n:avg('female_participation',arr)+'%',t:'مشاركة الإناث اقتصادياً',raw:true},
      {em:'🏭',n:avg('unorganized_workers',arr)+'%',t:'عمال القطاع غير المنظم'}]);
    // Add text card for employment relation if exists
    const empRelation = arr.map(d => d.employment_relation).filter(v => v && v.trim()).join(' | ');
    if(empRelation){
      document.getElementById('cards-labor_market').innerHTML += 
        `<div class="ind-card" style="grid-column:1/-1;background:#e3f2fd;border-color:#1565c0;"><span class="em">📋</span><div><div class="n" style="font-size:12px;font-family:Cairo;color:#1565c0;">توزع المشتغلين حسب العلاقة برب العمل</div><div class="t" style="color:#333;font-size:11.5px;">${empRelation}</div></div></div>`;
    }
    const emp = sum('employed', arr);
    const unemp = sum('unemployed', arr);
    const total = emp + unemp;
    const rate = total > 0 ? ((unemp/total)*100).toFixed(1) : 0;
    document.getElementById('note-labor_market').textContent = 
      `💡 إجمالي القوى العاملة: ${fmt(total)} — منهم ${fmt(emp)} مشتغل و${fmt(unemp)} متعطل (معدل بطالة: ${rate}%).`;
  }

  if(cat === 'insurance'){
    barChart('chart-insurance', 'insurance_total');
    renderCards('cards-insurance', [
      {em:'🏛️',n:sum('insurance_public',arr),t:'مسجّلون تأمينات — قطاع عام'},
      {em:'🏭',n:sum('insurance_private',arr),t:'مسجّلون تأمينات — قطاع خاص'},
      {em:'📊',n:sum('insurance_total',arr),t:'اجمالي المستفيدين القائمين على راس عملهم'},
      {em:'👴',n:sum('pensioners',arr),t:'المتقاعدون المستفيدون'},
      {em:'💰',n:sum('work_injury_comp',arr),t:'تعويضات إصابات العمل'},
      {em:'📋',n:sum('service_merge_decisions',arr),t:'قرارات ضم الخدمة'},
      {em:'🏥',n:sum('injury_beneficiaries',arr),t:'مستفيدو تعويضات الإصابات'},
      {em:'🏢',n:sum('insurance_establishments',arr),t:'المنشآت المشمولة بالتأمينات'},
      {em:'🆕',n:sum('new_workers_insp',arr),t:'مسجّلون جدد عبر الزيارات التفتيشية'}
    ]);
    const pub = sum('insurance_public', arr);
    const priv = sum('insurance_private', arr);
    const total = sum('insurance_total', arr);
    document.getElementById('note-insurance').textContent = 
      `💡 ${fmt(total)} مستفيد قائم على راس عمله (${fmt(pub)} قطاع عام، ${fmt(priv)} قطاع خاص).`;
  }

  if(cat === 'aid'){
    barChart('chart-aid', 'food_baskets');
    renderCards('cards-aid', [
      {em:'🍞',n:sum('food_baskets',arr),t:'سلل غذائية موزّعة'},
      {em:'💊',n:sum('in_kind_aid',arr),t:'مساعدات عينية (أدوية/عمليات)'},
      {em:'💵',n:sum('cash_assistance',arr),t:'إعانات مالية'},
      {em:'🏠',n:sum('unhcr_centers',arr),t:'المراكز المجتمعية (UNHCR)'},
      {em:'🛡️',n:sum('unfpa_safe_spaces',arr),t:'مساحات آمنة للنساء (UNFPA)'}
    ]);
    const food = sum('food_baskets', arr);
    const inkind = sum('in_kind_aid', arr);
    const cash = sum('cash_assistance', arr);
    document.getElementById('note-aid').textContent = 
      `💡 إجمالي المساعدات: ${fmt(food)} سلة غذائية + ${fmt(inkind)} مساعدة عينية + ${fmt(cash)} إعانة مالية.`;
  }

  if(cat === 'camps'){
    barChart('chart-camps', 'camps_count');
    renderCards('cards-camps', [
      {em:'🏕️',n:sum('camps_count',arr),t:'عدد المخيمات'},
      {em:'👨‍👩‍👧‍👦',n:sum('camp_families',arr),t:'الأسر المقيمة في المخيمات'},
      {em:'🏠',n:sum('returnees',arr),t:'عدد العائدين'}
    ]);
    const camps = sum('camps_count', arr);
    const families = sum('camp_families', arr);
    const returnees = sum('returnees', arr);
    const avgPerCamp = camps > 0 ? Math.round(families / camps) : 0;
    document.getElementById('note-camps').textContent = 
      `💡 ${fmt(camps)} مخيم يؤوي ${fmt(families)} أسرة (متوسط ${fmt(avgPerCamp)} أسرة لكل مخيم). عدد العائدين: ${fmt(returnees)}.`;
  }

  if(cat === 'platform'){
    barChart('chart-platform', 'platform_registered');
    renderCards('cards-platform', [
      {em:'👤',n:sum('platform_registered',arr),t:'مسجّلون على المنصة'},
      {em:'🏢',n:sum('platform_establishments',arr),t:'المنشآت المسجّلة'},
      {em:'💼',n:sum('platform_jobs',arr),t:'فرص العمل المتاحة'},
      {em:'🎓',n:sum('platform_training',arr),t:'فرص التدريب'},
      {em:'🏫',n:sum('vocational_centers',arr),t:'مراكز التأهيل والإرشاد (قدرات)'},
      {em:'👨‍🔧',n:sum('vocational_benef',arr),t:'مستفيدو التأهيل والإرشاد (تمكين الشباب)'}
    ]);
    const reg = sum('platform_registered', arr);
    const est = sum('platform_establishments', arr);
    const jobs = sum('platform_jobs', arr);
    const train = sum('platform_training', arr);
    const voc = sum('vocational_benef', arr);
    document.getElementById('note-platform').textContent = 
      `💡 المنصة تضم ${fmt(reg)} مسجّل و${fmt(est)} منشأة مع ${fmt(jobs)} فرصة عمل و${fmt(train)} فرصة تدريب. مراكز التأهيل والإرشاد (قدرات): ${fmt(sum('vocational_centers',arr))} | مستفيدو تمكين الشباب: ${fmt(voc)}.`;
  }

  if(cat === 'demographics'){
    barChart('chart-demographics', 'population');
    renderCards('cards-demographics', [
      {em:'👥',n:sumStatic('population'),t:'إجمالي عدد السكان'},
      {em:'♂️',n:sumStatic('males'),t:'إجمالي الذكور'},
      {em:'♀️',n:sumStatic('females'),t:'إجمالي الإناث'},
      {em:'👶',n:sumStatic('pop_under15'),t:'السكان دون 15 سنة'},
      {em:'🧑',n:sumStatic('pop_15_60'),t:'السكان 15-60 سنة'},
      {em:'👴',n:sumStatic('pop_over60'),t:'السكان 60+ سنة'},
      {em:'📉',n:avgStatic('unemployment_rate')+'%',t:'معدل البطالة العام (متوسط)'},
      {em:'📉',n:avgStatic('male_unemployment')+'%',t:'معدل بطالة الذكور',raw:true},
      {em:'📉',n:avgStatic('female_unemployment')+'%',t:'معدل بطالة الإناث',raw:true},
      {em:'📉',n:avgStatic('youth_unemployment')+'%',t:'معدل بطالة الشباب (متوسط)'},
      {em:'♂️',n:avgStatic('male_participation')+'%',t:'مشاركة الذكور اقتصادياً',raw:true},
      {em:'♀️',n:avgStatic('female_participation')+'%',t:'مشاركة الإناث اقتصادياً',raw:true},
      {em:'💼',n:sumStatic('employed'),t:'المشتغلون'},
      {em:'🚫',n:sumStatic('unemployed'),t:'المتعطلون'},
      {em:'👩‍👧',n:avgStatic('female_breadwinners')+'%',t:'نسبة النساء المعيلات',raw:true},
      {em:'💍',n:avgStatic('child_marriage_rate')+'%',t:'معدل زواج القاصرات',raw:true},
      {em:'👷',n:avgStatic('child_labor_rate')+'%',t:'معدل عمل الأطفال',raw:true},
      {em:'📚',n:avgStatic('basic_edu_completion')+'%',t:'معدل إكمال التعليم الأساسي',raw:true},
      {em:'🍞',n:avgStatic('food_secure_pct')+'%',t:'% الأسر الآمنة غذائياً'},
      {em:'⚠️',n:avgStatic('food_vulnerable_pct')+'%',t:'% الأسر ذات الهشاشة الغذائية'},
      {em:'🔴',n:avgStatic('food_insecure_pct')+'%',t:'% الأسر المعدومة غذائياً'}
    ]);
    // Add text card for employment relation if exists
    const demoEmpRelation = arr.map(d => d.employment_relation).filter(v => v && v.trim()).join(' | ');
    if(demoEmpRelation){
      document.getElementById('cards-demographics').innerHTML += 
        `<div class="ind-card" style="grid-column:1/-1;background:#e3f2fd;border-color:#1565c0;"><span class="em">📋</span><div><div class="n" style="font-size:12px;font-family:Cairo;color:#1565c0;">توزع المشتغلين حسب العلاقة برب العمل</div><div class="t" style="color:#333;font-size:11.5px;">${demoEmpRelation}</div></div></div>`;
    }
    const totalPop = sumStatic('population');
    const totalMales = sumStatic('males');
    const totalFemales = sumStatic('females');
    const genderRatio = totalFemales > 0 ? (totalMales / totalFemales).toFixed(2) : 0;
    const femalePct = totalPop > 0 ? Math.round((totalFemales / totalPop) * 100) : 0;
    const malePct = totalPop > 0 ? Math.round((totalMales / totalPop) * 100) : 0;
    document.getElementById('note-demographics').textContent = 
      `💡 نسبة الذكور ${malePct}% مقابل ${femalePct}% للإناث. معدل البطالة العام: ${avgStatic('unemployment_rate')}%. الأمن الغذائي: آمنة ${avgStatic('food_secure_pct')}% | هشاشة ${avgStatic('food_vulnerable_pct')}% | معدومة ${avgStatic('food_insecure_pct')}%.`;
  }
}

// =====================
// GOVERNORATE DETAILS
// =====================
function renderGovList(){
  const arr = filtered();
  const grouped = {};

  arr.forEach(d => {
    if(!grouped[d.gov]){
      grouped[d.gov] = {...d};
    } else {
      Object.keys(d).forEach(key => {
        if(typeof d[key] === 'number'){
          grouped[d.gov][key] = (grouped[d.gov][key] || 0) + d[key];
        }
        else if(typeof d[key] === 'string' && d[key] && key !== 'gov' && key !== 'month'){
          if(!grouped[d.gov][key]) grouped[d.gov][key] = d[key];
          else grouped[d.gov][key] += " | " + d[key];
        }
      });
    }
  });

  const govList = Object.values(grouped);
  document.getElementById('govList').innerHTML = govList.map(d => {
    return `
    <div class="gov-item">
      <div class="gh" onclick="this.parentElement.classList.toggle('open')">
        <div class="stamp">${d.gov ? d.gov[0] : '?'}</div>
        <strong>${d.gov || 'غير معروف'}</strong>
        <button onclick="event.stopPropagation(); openGovProfile('${d.gov || 'غير معروف'}');" style="background:#0B5A7A;color:#fff;border:none;border-radius:6px;padding:4px 10px;font-family:Cairo;font-size:11px;font-weight:600;cursor:pointer;margin-inline-start:8px;flex-shrink:0;z-index:5;">📊</button>
        <div class="chev">⌄</div>
      </div>
      <div class="gb">
        <div class="row"><b>🏆 أهم الإنجازات</b><span>${d.achievements ? d.achievements : '<span class="empty-note">لم تُدرَج بيانات</span>'}</span></div>
        <div class="row"><b>📌 أهم التوصيات</b><span>${d.recommendations ? d.recommendations : '<span class="empty-note">لم تُدرَج بيانات</span>'}</span></div>
        <div class="row"><b>🧰 الاحتياجات الرئيسية</b><span>${d.needs ? d.needs : '<span class="empty-note">لم تُدرَج بيانات</span>'}</span></div>
      </div>
    </div>`;
  }).join('');
}
function renderModernVisuals(){
  if(typeof Chart === 'undefined') return;
  const arr = filtered();
  const ids = ['modernGenderChart','modernSectorChart','modernRadarChart','modernGovernorChart'];
  if(!arr.length){ ids.forEach(id=>{const el=document.getElementById(id); if(el) el.parentElement.innerHTML='<div class="modern-chart-empty">لا توجد بيانات مطابقة للفلاتر الحالية</div>';}); return; }
  ids.forEach(id=>{ if(charts[id]) charts[id].destroy(); });
  const chartInk = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#0B5A7A';
  const chartSoft = getComputedStyle(document.documentElement).getPropertyValue('--ink-soft').trim() || '#58717e';
  const gridColor = 'rgba(128,160,172,.18)';
  const totalMales = sum('males', arr), totalFemales = sum('females', arr);
  const genderCanvas = document.getElementById('modernGenderChart');
  if(genderCanvas) charts.modernGenderChart = new Chart(genderCanvas.getContext('2d'), {type:'doughnut',data:{labels:['الذكور','الإناث'],datasets:[{data:[totalMales,totalFemales],backgroundColor:['#2563EB','#06B6D4'],borderColor:'transparent',hoverOffset:12,spacing:4}]},options:{responsive:true,maintainAspectRatio:false,cutout:'68%',plugins:{legend:{position:'bottom',rtl:true,labels:{font:{family:'Cairo',weight:'600'},color:chartInk,usePointStyle:true,padding:18}},tooltip:{rtl:true,padding:12,cornerRadius:10,displayColors:false,callbacks:{label:ctx=>` ${analyticsNumber(ctx.raw)}`}}},animation:{duration:1000,easing:'easeOutQuart'}}});
  const sectorDefs=[['السكان','population'],['المشتغلون','employed'],['السلال','food_baskets'],['فرص العمل','platform_jobs'],['المخيمات','camps_count']];
  const sectorData=sectorDefs.map(([,key])=>sum(key,arr)); const sectorCanvas=document.getElementById('modernSectorChart');
  if(sectorCanvas) charts.modernSectorChart=new Chart(sectorCanvas.getContext('2d'),{type:'polarArea',data:{labels:sectorDefs.map(([label])=>label),datasets:[{data:sectorData,backgroundColor:['rgba(37,99,235,.86)','rgba(6,182,212,.84)','rgba(20,184,166,.84)','rgba(139,92,246,.84)','rgba(245,158,11,.84)'],borderColor:'rgba(255,255,255,.72)',borderWidth:2}]},options:{responsive:true,maintainAspectRatio:false,scales:{r:{grid:{color:gridColor},angleLines:{color:gridColor},ticks:{display:false},pointLabels:{font:{family:'Cairo',size:11,weight:'600'},color:chartSoft}}},plugins:{legend:{position:'bottom',rtl:true,labels:{font:{family:'Cairo',size:11},color:chartInk,usePointStyle:true,padding:10}},tooltip:{rtl:true,padding:12,cornerRadius:10,displayColors:false,callbacks:{label:ctx=>` ${analyticsNumber(ctx.raw)}`}}},animation:{duration:1000,easing:'easeOutQuart'}}});
  const radarDefs=[['مشاركة الذكور','male_participation'],['مشاركة الإناث','female_participation'],['الأمن الغذائي','food_secure_pct'],['التغطية التأمينية','insurance_coverage'],['التمكين الاقتصادي','female_breadwinners']];
  const radarData=radarDefs.map(([,key])=>Math.min(100,Math.max(0,parseFloat(avg(key,arr))||0))); const radarCanvas=document.getElementById('modernRadarChart');
  if(radarCanvas) charts.modernRadarChart=new Chart(radarCanvas.getContext('2d'),{type:'radar',data:{labels:radarDefs.map(([label])=>label),datasets:[{label:'المؤشر الحالي',data:radarData,backgroundColor:'rgba(37,99,235,.18)',borderColor:'#2563EB',pointBackgroundColor:'#06B6D4',pointBorderColor:'#fff',pointHoverRadius:7,borderWidth:3}]},options:{responsive:true,maintainAspectRatio:false,scales:{r:{beginAtZero:true,max:100,ticks:{display:false},grid:{color:gridColor},angleLines:{color:gridColor},pointLabels:{font:{family:'Cairo',size:11,weight:'600'},color:chartInk}}},plugins:{legend:{display:false},tooltip:{rtl:true,padding:12,cornerRadius:10,callbacks:{label:ctx=>` ${Number(ctx.raw||0).toFixed(1)}%`}}},animation:{duration:1000,easing:'easeOutQuart'}}});
  const grouped={}; arr.forEach(d=>{grouped[d.gov]=(grouped[d.gov]||0)+(Number(d.population)||0);}); const govRows=Object.entries(grouped).sort((a,b)=>b[1]-a[1]).slice(0,8); const govCanvas=document.getElementById('modernGovernorChart');
  if(govCanvas) charts.modernGovernorChart=new Chart(govCanvas.getContext('2d'),{type:'bar',data:{labels:govRows.map(x=>x[0]),datasets:[{label:'عدد السكان',data:govRows.map(x=>x[1]),backgroundColor:govRows.map((_,i)=>i===0?'#2563EB':'#7DD3FC'),borderRadius:9,borderSkipped:false,barThickness:22}]},options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{rtl:true,padding:12,cornerRadius:10,displayColors:false,callbacks:{label:ctx=>` ${analyticsNumber(ctx.raw)} نسمة`}}},scales:{x:{beginAtZero:true,grid:{color:gridColor},ticks:{callback:v=>analyticsNumber(v),color:chartSoft}},y:{grid:{display:false},ticks:{font:{family:'Cairo',weight:'600'},color:chartInk}}},animation:{duration:900,easing:'easeOutQuart'}}});
}

function renderAll(){
  console.log('Rendering with', filtered().length, 'rows, activeGov:', activeGov, 'selectedMonths:', [...selectedMonths]);
  renderKPIs();
  renderModernVisuals();
  ['disability','social','ngo','juvenile','rural','labor','labor_market','insurance','aid','camps','platform','demographics'].forEach(renderCategory);
  renderGovList();
  updateMastheadBadge();
  updateFooterNote();
  updateMapMarkers();
  if(document.getElementById('insightsSection').classList.contains('open')){
    renderInsights();
  }
  // ← Render strategic plan compass
  renderStrategicCompass();
  if(document.getElementById('advancedAnalyticsSection')?.classList.contains('open')){
    renderAdvancedAnalytics();
  }
}

function toggleAdvancedAnalytics(headEl){
  const section = headEl.parentElement;
  section.classList.toggle('open');
  if(section.classList.contains('open')) renderAdvancedAnalytics();
}

const ANALYTICS_METRICS = {
  population: {label:'إجمالي السكان', unit:'نسمة'},
  employed: {label:'المشتغلون', unit:'مشتغل'},
  disabled_cards: {label:'بطاقات الإعاقة الجديدة', unit:'بطاقة'},
  food_baskets: {label:'السلال الغذائية', unit:'سلة'},
  platform_jobs: {label:'فرص العمل على المنصة', unit:'فرصة'},
  insurance_total: {label:'المسجلون القائمون على رأس عملهم', unit:'مسجل'},
  camps_count: {label:'عدد المخيمات', unit:'مخيم'},
  ngo_active: {label:'المنظمات المسحوب ترخيصها', unit:'منظمة'},
  ngo_new_pct: {label:'المنظمات المشهرة (عام)', unit:'منظمة'},
  ngo_new_pct_2025: {label:'المنظمات المشهرة 2025', unit:'منظمة'}
};

function analyticsNumber(value){
  return Number(value || 0).toLocaleString('en-US', {maximumFractionDigits:1});
}

function analyticsMonthOrder(month){
  const index = MONTHS_LIST.indexOf(month);
  return index < 0 ? 99 : index;
}

function updateMastheadBadge(){
  const arr = filtered();
  const govCount = new Set(arr.map(d => d.gov)).size;
  const monthCount = new Set(arr.map(d => d.month)).size;
  const monthText = monthCount === 1 ? (arr[0]?.month || '') : `متعدد الأشهر (${monthCount})`;
  document.getElementById('mastheadBadge').innerHTML = `🗓️ ${monthText} &nbsp;·&nbsp; ${govCount} من 14 محافظة`;
}

function updateFooterNote(){
  const arr = ALL_DATA;
  const allGovs = ["دمشق","ريف دمشق","حلب","حمص","حماه","اللاذقية","طرطوس","السويداء","درعا","القنيطرة","ادلب","الرقة","دير الزور","الحسكة"];
  const presentGovs = new Set(arr.map(d => d.gov));
  const missingGovs = allGovs.filter(g => !presentGovs.has(g));
  const note = missingGovs.length > 0 
    ? `⚠️ ملاحظة على جودة البيانات: ${missingGovs.length} محافظة لم ترفع بياناتها (${missingGovs.join('، ')}). مصدر البيانات: نموذج «مؤشرات تشغيلية إجمالية وفق المحافظات».`
    : `✅ جميع المحافظات الـ 14 رفعت بياناتها. مصدر البيانات: نموذج «مؤشرات تشغيلية إجمالية وفق المحافظات».`;
  document.getElementById('footerNote').textContent = note;
}

function toggleCat(headEl){
  headEl.parentElement.classList.toggle('open');
  const cat = headEl.parentElement.getAttribute('data-cat');
  if(cat !== 'details') setTimeout(() => renderCategory(cat), 0);
  if(cat === 'map') initMapOnDemand();
}

function toggleInsights(headEl){
  headEl.parentElement.classList.toggle('open');
  if(headEl.parentElement.classList.contains('open')){
    renderInsights();
  }
}


function renderAdvancedAnalytics(){
  const section = document.getElementById('advancedAnalyticsSection');
  if(!section || !section.classList.contains('open')) return;
  const arr = filtered();
  const metricEl = document.getElementById('analyticsMetric');
  const metric = metricEl?.value || 'population';
  const meta = ANALYTICS_METRICS[metric] || ANALYTICS_METRICS.population;
  const kpis = document.getElementById('analyticsKpis');
  const narrative = document.getElementById('analyticsNarrative');
  if(!arr.length){
    if(kpis) kpis.innerHTML = '<div class="analytics-kpi"><div class="ak-value">—</div><div class="ak-label">لا توجد بيانات للتحليل</div></div>';
    if(narrative) narrative.textContent = 'لا توجد سجلات مطابقة للفلاتر الحالية.';
    return;
  }

  const govTotals = {};
  const monthTotals = {};
  arr.forEach(row => {
    const value = Number(row[metric]) || 0;
    govTotals[row.gov] = (govTotals[row.gov] || 0) + value;
    monthTotals[row.month] = (monthTotals[row.month] || 0) + value;
  });
  const ranking = Object.entries(govTotals).sort((a,b) => b[1] - a[1]);
  const months = Object.keys(monthTotals).sort((a,b) => analyticsMonthOrder(a) - analyticsMonthOrder(b));
  const values = months.map(m => monthTotals[m]);
  const total = values.reduce((a,b) => a+b, 0);
  const average = values.length ? total / values.length : 0;
  const first = values[0] || 0;
  const last = values[values.length - 1] || 0;
  const change = first ? ((last - first) / first) * 100 : 0;
  const highest = ranking[0] || ['—', 0];
  const lowest = ranking[ranking.length - 1] || ['—', 0];
  const changeClass = change > 0.05 ? 'positive' : change < -0.05 ? 'negative' : 'neutral';
  const changeText = `${change >= 0 ? '▲' : '▼'} ${Math.abs(change).toFixed(1)}%`;

  if(kpis){
    kpis.innerHTML = [
      ['الإجمالي', analyticsNumber(total), meta.unit, 'neutral'],
      ['المتوسط الشهري', analyticsNumber(average), meta.unit, 'neutral'],
      ['أعلى محافظة', `${highest[0]} — ${analyticsNumber(highest[1])}`, '', 'neutral'],
      ['التغير بين أول وآخر شهر', changeText, '', changeClass]
    ].map(([label,value,unit,klass]) => `<div class="analytics-kpi"><div class="ak-value">${value}</div><div class="ak-label">${label}${unit ? ` (${unit})` : ''}</div><div class="ak-change ${klass}">${label === 'التغير بين أول وآخر شهر' ? (change >= 0 ? 'تحسن' : 'انخفاض') : 'حسب الفلاتر الحالية'}</div></div>`).join('');
  }

  if(narrative){
    narrative.innerHTML = `يبلغ إجمالي <strong>${meta.label}</strong> ضمن الفلاتر الحالية <strong>${analyticsNumber(total)}</strong> ${meta.unit}. تسجل <strong>${highest[0]}</strong> أعلى قيمة بإجمالي ${analyticsNumber(highest[1])}، بينما تسجل <strong>${lowest[0]}</strong> أدنى قيمة بإجمالي ${analyticsNumber(lowest[1])}. وقد تغير المؤشر بنسبة <strong class="${changeClass}">${changeText}</strong> بين أول وآخر شهر متاح.`;
  }

  const rankingCanvas = document.getElementById('analyticsRankingChart');
  const trendCanvas = document.getElementById('analyticsTrendChart');
  if(typeof Chart === 'undefined' || !rankingCanvas || !trendCanvas) return;
  if(charts.analyticsRanking) charts.analyticsRanking.destroy();
  if(charts.analyticsTrend) charts.analyticsTrend.destroy();
  charts.analyticsRanking = new Chart(rankingCanvas.getContext('2d'), {
    type:'bar',
    data:{labels:ranking.map(x=>x[0]), datasets:[{label:meta.label, data:ranking.map(x=>x[1]), backgroundColor:ranking.map((_,i)=>PALETTE[i % PALETTE.length]), borderColor:'rgba(255,255,255,.75)', borderWidth:1, hoverBackgroundColor:'#0D8BA8', borderRadius:10, barPercentage:.68, categoryPercentage:.78}]},
    options:{responsive:true, maintainAspectRatio:false, indexAxis:'y', animation:{duration:900,easing:'easeOutQuart'}, interaction:{intersect:false,mode:'nearest'}, plugins:{legend:{display:false}, tooltip:{rtl:true,padding:12,cornerRadius:10,displayColors:false,callbacks:{label:ctx=>`${analyticsNumber(ctx.raw)} ${meta.unit}`}}}, scales:{x:{beginAtZero:true,grid:{color:'rgba(128,160,172,.16)',drawBorder:false},ticks:{callback:v=>analyticsNumber(v)}},y:{grid:{display:false},ticks:{font:{family:'Cairo',weight:'600'}}}}}
  });
  charts.analyticsTrend = new Chart(trendCanvas.getContext('2d'), {
    type:'line',
    data:{labels:months, datasets:[{label:meta.label, data:values, borderColor:'#2563EB', backgroundColor:'rgba(37,99,235,.14)', fill:true, tension:.42, borderWidth:3, pointRadius:4, pointHoverRadius:7, pointBorderWidth:2, pointBorderColor:'#fff', pointBackgroundColor:'#06B6D4'}]},
    options:{responsive:true, maintainAspectRatio:false, animation:{duration:1000,easing:'easeOutQuart'},interaction:{intersect:false,mode:'index'},plugins:{legend:{display:false},tooltip:{rtl:true,padding:12,cornerRadius:10,displayColors:false,callbacks:{label:ctx=>`${analyticsNumber(ctx.raw)} ${meta.unit}`}}},scales:{y:{beginAtZero:true,grid:{color:'rgba(128,160,172,.16)',drawBorder:false},ticks:{callback:v=>analyticsNumber(v)}},x:{grid:{display:false},ticks:{font:{family:'Cairo',weight:'600'}}}}}
  });
}


// =====================
// RENDER ALL
// =====================
// =====================
// INSIGHTS & COMPARISONS ENGINE - ENHANCED
// =====================

function renderInsights(){
  const arr = filtered();
  const content = document.getElementById('insightsContent');
  const summary = document.getElementById('insightsSummaryText');

  if(arr.length === 0){
    content.innerHTML = '<p style="text-align:center;color:var(--ink-soft);padding:20px;">💡 ارفع ملف CSV لعرض التحليلات والمقارنات</p>';
    summary.textContent = 'لا توجد بيانات للتحليل';
    return;
  }

  let html = '';

  // 1. COMPOSITE INDICES (The Big Picture)
  html += renderCompositeIndices(arr);

  // 2. GOVERNORATE RANKING WITH MULTI-MODE
  html += renderGovComparison(arr);

  // 3. EFFICIENCY & PRODUCTIVITY METRICS
  html += renderEfficiencyMetrics(arr);

  // 4. EARLY WARNING SYSTEM
  html += renderEarlyWarningSystem(arr);

  // 5. SECTORAL HEATMAP (Best vs Worst)
  html += renderSectorHeatmap(arr);

  // 6. AID & VULNERABILITY ANALYSIS
  html += renderAidAnalysis(arr);

  // 7. DIGITAL DIVIDE & LABOR MARKET INSIGHTS
  html += renderDigitalAndLaborInsights(arr);

  // 8. GENDER & DEMOGRAPHIC PATTERNS
  html += renderGenderInsights(arr);

  // 9. CROSS-SECTORAL PATTERNS
  html += renderPatterns(arr);

  content.innerHTML = html;

  // Update summary with composite scores
  const govCount = new Set(arr.map(d => d.gov)).size;
  const sdi = calculateSDI(arr);
  summary.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;align-items:center;">
      <span>📊 <strong>${arr.length}</strong> سجل من <strong>${govCount}</strong> محافظة</span>
      <span style="display:inline-block;width:1px;height:16px;background:rgba(255,255,255,0.3);"></span>
      <span>🎯 مؤشر التنمية الاجتماعية: <strong style="color:#FFD700;">${sdi.toFixed(1)}/100</strong></span>
      <span style="display:inline-block;width:1px;height:16px;background:rgba(255,255,255,0.3);"></span>
      <span>⚠️ تنبيهات: <strong style="color:#ffcc80;">${countAlerts(arr)}</strong></span>
    </div>
  `;
}

// =====================
// 1. COMPOSITE INDICES
// =====================
function calculateSDI(arr){
  // Social Development Index: weighted composite of social care, insurance, and inclusion
  const weights = {
    elderly: 0.15, disability: 0.20, orphans: 0.15,
    insurance: 0.20, vocational: 0.15, ngo: 0.15
  };
  const totalPop = sum('population', arr) || 1;
  
  const elderlyScore = Math.min((sum('elderly_benef', arr) / totalPop) * 5000, 100);
  const disabilityScore = Math.min((sum('disabled_cards', arr) / totalPop) * 8000, 100);
  const orphanScore = Math.min(((sum('sponsor_internal', arr) + sum('sponsor_external', arr)) / totalPop) * 3000, 100);
  const insuranceScore = Math.min((sum('insurance_total', arr) / totalPop) * 2000, 100);
  const vocationalScore = Math.min((sum('vocational_benef', arr) / totalPop) * 4000, 100);
  const ngoScore = Math.min((sum('ngo_active', arr) / 14) * 20, 100); // per governorate average
  
  return (elderlyScore * weights.elderly + disabilityScore * weights.disability +
          orphanScore * weights.orphans + insuranceScore * weights.insurance +
          vocationalScore * weights.vocational + ngoScore * weights.ngo);
}

function renderCompositeIndices(arr){
  const sdi = calculateSDI(arr);
  const lpi = calculateLPI(arr); // Labor Pressure Index
  const adr = calculateADR(arr); // Aid Dependency Ratio
  
  let sdiColor = sdi >= 70 ? '#4F7A63' : sdi >= 40 ? '#B08D57' : '#B5533C';
  let lpiColor = lpi >= 70 ? '#B5533C' : lpi >= 40 ? '#B08D57' : '#4F7A63'; // Higher = more pressure = worse
  let adrColor = adr >= 30 ? '#B5533C' : adr >= 15 ? '#B08D57' : '#4F7A63';

  return `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-bottom:24px;">
      <div style="background:linear-gradient(135deg,#ffffff,#f8f9fa);border:2px solid ${sdiColor};border-radius:16px;padding:20px;text-align:center;position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;left:0;right:0;height:4px;background:${sdiColor};"></div>
        <div style="font-size:32px;margin-bottom:8px;">🎯</div>
        <div style="font-family:'IBM Plex Mono';font-size:36px;font-weight:700;color:${sdiColor};line-height:1;">${sdi.toFixed(1)}</div>
        <div style="font-family:'Tajawal';font-weight:700;color:var(--ink);margin-top:4px;">مؤشر التنمية الاجتماعية</div>
        <div style="font-size:11px;color:var(--ink-soft);margin-top:6px;">يُقيس تكامل الخدمات الاجتماعية والتأمينية</div>
        <div style="margin-top:10px;height:6px;background:#eee;border-radius:3px;overflow:hidden;">
          <div style="width:${sdi}%;height:100%;background:${sdiColor};transition:width 1s ease;"></div>
        </div>
      </div>
      
      <div style="background:linear-gradient(135deg,#ffffff,#f8f9fa);border:2px solid ${lpiColor};border-radius:16px;padding:20px;text-align:center;position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;left:0;right:0;height:4px;background:${lpiColor};"></div>
        <div style="font-size:32px;margin-bottom:8px;">⚖️</div>
        <div style="font-family:'IBM Plex Mono';font-size:36px;font-weight:700;color:${lpiColor};line-height:1;">${lpi.toFixed(1)}</div>
        <div style="font-family:'Tajawal';font-weight:700;color:var(--ink);margin-top:4px;">مؤشر ضغط سوق العمل</div>
        <div style="font-size:11px;color:var(--ink-soft);margin-top:6px;">ارتفاعه = ضغط أكبر على فرص العمل</div>
        <div style="margin-top:10px;height:6px;background:#eee;border-radius:3px;overflow:hidden;">
          <div style="width:${lpi}%;height:100%;background:${lpiColor};transition:width 1s ease;"></div>
        </div>
      </div>
      
      <div style="background:linear-gradient(135deg,#ffffff,#f8f9fa);border:2px solid ${adrColor};border-radius:16px;padding:20px;text-align:center;position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;left:0;right:0;height:4px;background:${adrColor};"></div>
        <div style="font-size:32px;margin-bottom:8px;">🆘</div>
        <div style="font-family:'IBM Plex Mono';font-size:36px;font-weight:700;color:${adrColor};line-height:1;">${adr.toFixed(1)}%</div>
        <div style="font-family:'Tajawal';font-weight:700;color:var(--ink);margin-top:4px;">مؤشر الاعتماد على المساعدات</div>
        <div style="font-size:11px;color:var(--ink-soft);margin-top:6px;">نسبة السكان المستفيدين من الإغاثة</div>
        <div style="margin-top:10px;height:6px;background:#eee;border-radius:3px;overflow:hidden;">
          <div style="width:${Math.min(adr*2,100)}%;height:100%;background:${adrColor};transition:width 1s ease;"></div>
        </div>
      </div>
    </div>
  `;
}

function calculateLPI(arr){
  const unemployed = sum('unemployed', arr);
  const laborForce = sum('labor_force', arr) * 1000000; // convert from millions
  const establishments = sum('platform_establishments', arr) || 1;
  if(laborForce === 0) return 0;
  const unempRate = (unemployed / laborForce) * 100;
  const pressure = (unemployed / establishments) * 10;
  return Math.min((unempRate * 0.6 + Math.min(pressure, 50) * 0.4), 100);
}

function calculateADR(arr){
  const totalPop = sum('population', arr) || 1;
  const aidRecipients = sum('food_baskets', arr) + sum('cash_assistance', arr) + sum('in_kind_aid', arr);
  return Math.min((aidRecipients / totalPop) * 100, 100);
}

function countAlerts(arr){
  let alerts = 0;
  ALL_GOVS.forEach(gov => {
    const g = arr.filter(d => d.gov === gov);
    if(g.length === 0) return;
    const unemp = avg('unemployment_rate', g);
    const disabled = sum('disabled_cards', g);
    const pop = sum('population', g);
    const juvInst = sum('juvenile_inst_active', g);
    const juvInmates = sum('juvenile_inmates', g);
    if(parseFloat(unemp) > 25) alerts++;
    if(pop > 1000 && disabled === 0) alerts++;
    if(juvInst > 0 && juvInmates === 0) alerts++;
  });
  return alerts;
}

// =====================
// 2. ENHANCED RANKING
// =====================
function renderGovComparison(arr){
  // ... (keep existing ranking code but enhance visuals)
  const govScores = {};
  ALL_GOVS.forEach(gov => {
    const govData = arr.filter(d => d.gov === gov);
    if(govData.length === 0) return;
    const pop = sum('population', govData) || 1;
    
    if(currentRankingMode === 'absolute'){
      let intensity = 0;
      govData.forEach(d => {
        intensity += (d.disabled_cards||0) + (d.elderly_benef||0) + (d.ngo_active||0) +
                     (d.juvenile_inmates||0) + (d.rural_dev_benef||0) + ((d.insp_industrial !== undefined ? d.insp_industrial : d.insp_total)||0) + (d.insp_agricultural||0) +
                     (d.new_workers_insp||0) + (d.disability_benef||0) + (d.vocational_benef||0);
      });
      govScores[gov] = {val: intensity, unit: 'نقطة نشاط', display: fmt(intensity), sub: 'النشاط الإجمالي'};
    }
    else if(currentRankingMode === 'perCapita'){
      let intensity = 0;
      govData.forEach(d => {
        intensity += (d.disabled_cards||0) + (d.elderly_benef||0) + (d.ngo_active||0) +
                     (d.juvenile_inmates||0) + (d.rural_dev_benef||0) + ((d.insp_industrial !== undefined ? d.insp_industrial : d.insp_total)||0) + (d.insp_agricultural||0) +
                     (d.new_workers_insp||0) + (d.employed||0) + (d.platform_registered||0) +
                     (d.vocational_benef||0) + (d.food_baskets||0) + (d.insurance_total||0);
      });
      const perCapita = (intensity / pop) * 1000;
      govScores[gov] = {val: perCapita, unit: 'لكل 1000 نسمة', display: perCapita.toFixed(1), sub: 'النشاط النسبي'};
    }
    else if(currentRankingMode === 'coverage'){
      const disabled = sum('disabled_cards', govData);
      const coverage = ((disabled / pop) * 100);
      govScores[gov] = {val: coverage, unit: '% تغطية', display: coverage.toFixed(2) + '%', sub: 'تغطية الإعاقة'};
    }
    else if(currentRankingMode === 'activityCount'){
      let count = 0;
      const keys = ['disabled_cards','elderly_benef','ngo_active','juvenile_inmates',
                    'rural_dev_benef','insp_industrial','insp_agricultural','new_workers_insp',
                    'disability_benef','beggar_inmates','orphan_homes',
                    'sponsor_internal','sponsor_external','violations','platform_registered',
                    'vocational_centers','vocational_benef'];
      govData.forEach(d => {
        keys.forEach(key => { if((d[key]||0) > 0) count++; });
      });
      govScores[gov] = {val: count, unit: 'مؤشر نشط', display: fmt(count), sub: 'التنوع النشاطي'};
    }
  });

  const sortedGovs = Object.entries(govScores).sort((a,b) => b[1].val - a[1].val);
  const maxVal = sortedGovs.length > 0 ? sortedGovs[0][1].val : 1;

  let html = '<h3 style="font-family:Tajawal;font-size:18px;color:var(--ink);margin:0 0 16px;display:flex;align-items:center;gap:10px;">🏆 ترتيب المحافظات</h3>';
  
  // Enhanced mode selector
  html += `
    <div style="background:var(--sand);border-radius:12px;padding:14px;margin-bottom:18px;border:1px solid var(--line);">
      <div style="font-family:Tajawal;font-weight:700;font-size:13px;color:var(--ink);margin-bottom:10px;">🎛️ طريقة الترتيب:</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;">
        <button class="ranking-mode-btn ${currentRankingMode==='absolute'?'active':''}" data-mode="absolute" onclick="setRankingMode('absolute')" style="border:1px solid var(--line);background:${currentRankingMode==='absolute'?'#0B5A7A':'var(--paper)'};color:${currentRankingMode==='absolute'?'#fff':'var(--ink-soft)'};padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;cursor:pointer;transition:.15s;font-family:Cairo;">📊 النشاط الإجمالي</button>
        <button class="ranking-mode-btn ${currentRankingMode==='perCapita'?'active':''}" data-mode="perCapita" onclick="setRankingMode('perCapita')" style="border:1px solid var(--line);background:${currentRankingMode==='perCapita'?'#0B5A7A':'var(--paper)'};color:${currentRankingMode==='perCapita'?'#fff':'var(--ink-soft)'};padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;cursor:pointer;transition:.15s;font-family:Cairo;">👥 لكل 1000 نسمة</button>
        <button class="ranking-mode-btn ${currentRankingMode==='coverage'?'active':''}" data-mode="coverage" onclick="setRankingMode('coverage')" style="border:1px solid var(--line);background:${currentRankingMode==='coverage'?'#0B5A7A':'var(--paper)'};color:${currentRankingMode==='coverage'?'#fff':'var(--ink-soft)'};padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;cursor:pointer;transition:.15s;font-family:Cairo;">🦽 تغطية الإعاقة</button>
        <button class="ranking-mode-btn ${currentRankingMode==='activityCount'?'active':''}" data-mode="activityCount" onclick="setRankingMode('activityCount')" style="border:1px solid var(--line);background:${currentRankingMode==='activityCount'?'#0B5A7A':'var(--paper)'};color:${currentRankingMode==='activityCount'?'#fff':'var(--ink-soft)'};padding:6px 14px;border-radius:100px;font-size:12px;font-weight:600;cursor:pointer;transition:.15s;font-family:Cairo;">🔢 عدد المؤشرات</button>
      </div>
      <div style="font-size:12px;color:var(--ink-soft);margin-top:10px;padding:8px 12px;background:var(--paper);border-radius:8px;border-inline-start:3px solid #0B5A7A;line-height:1.7;">
        💡 <strong>${getRankingModeLabel(currentRankingMode)}:</strong> ${getRankingModeDescription(currentRankingMode)}
      </div>
    </div>
  `;

  // Top 5 with enhanced cards
  html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">';
  sortedGovs.slice(0, 5).forEach(([gov, data], idx) => {
    const pct = maxVal > 0 ? Math.round((data.val / maxVal) * 100) : 0;
    const medals = ['🥇','🥈','🥉','4️⃣','5️⃣'];
    const colors = ['#FFD700','#C0C0C0','#CD7F32','#0B5A7A','#0B5A7A'];
    html += `
      <div style="background:var(--paper);border:2px solid ${idx < 3 ? colors[idx] : '#e0e0e0'};border-radius:14px;padding:16px;text-align:center;transition:.2s;position:relative;overflow:hidden;">
        <div style="position:absolute;top:8px;left:8px;font-size:24px;opacity:0.15;">${medals[idx]}</div>
        <div style="font-family:IBM Plex Mono;font-size:32px;font-weight:700;color:${idx < 3 ? colors[idx] : '#0B5A7A'};margin-bottom:4px;">${medals[idx]}</div>
        <div style="font-family:Tajawal;font-weight:700;font-size:16px;color:var(--ink);margin-bottom:4px;">${gov}</div>
        <div style="font-family:IBM Plex Mono;font-size:15px;color:var(--syria-red);font-weight:600;">${data.display}</div>
        <div style="font-size:11px;color:var(--ink-soft);margin-top:2px;">${data.unit}</div>
        <div style="margin-top:10px;height:5px;background:#f0f0f0;border-radius:3px;overflow:hidden;">
          <div style="width:${pct}%;height:100%;background:linear-gradient(90deg,${idx < 3 ? colors[idx] : '#0B5A7A'},${idx < 3 ? colors[idx] : '#0D8BA8'});transition:width 0.8s ease;"></div>
        </div>
        <div style="font-size:10px;color:var(--ink-soft);margin-top:6px;">${data.sub}</div>
      </div>
    `;
  });
  html += '</div>';

  // Bottom performers (insightful)
  if(sortedGovs.length > 5){
    html += `
      <div style="background:#fff3e0;border:1px solid #ffcc80;border-radius:12px;padding:14px 16px;margin-bottom:18px;">
        <div style="font-family:Tajawal;font-weight:700;font-size:13px;color:#e65100;margin-bottom:6px;">📉 محافظات تحتاج دعماً إضافياً:</div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          ${sortedGovs.slice(-3).reverse().map(([gov, data]) => `
            <span style="background:#ffffff;border:1px solid #ffcc80;border-radius:20px;padding:4px 12px;font-size:12px;color:#e65100;font-weight:600;">
              ${gov}: ${data.display}
            </span>
          `).join('')}
        </div>
      </div>
    `;
  }

  return html;
}

// =====================
// 3. EFFICIENCY METRICS
// =====================
function renderEfficiencyMetrics(arr){
  let html = '<h3 style="font-family:Tajawal;font-size:18px;color:var(--ink);margin:28px 0 16px;display:flex;align-items:center;gap:10px;">⚡ كفاءة الموارد الحكومية</h3>';
  
  // Calculate per-center yields
  const centers = [
    {name:'دور المسنين', benef:'elderly_benef', centers:'elderly_homes', icon:'👵'},
    {name:'معاهد الإعاقة', benef:'disability_benef', centers:'disability_centers', icon:'🦽'},
    {name:'مراكز التنمية الريفية', benef:'rural_dev_benef', centers:'rural_dev_active', icon:'🌾'},
    {name:'وحدات الصناعات الريفية', benef:'rural_ind_benef', centers:'rural_ind_active', icon:'🏭'},
    {name:'معاهد الأحداث', benef:'juvenile_inmates', centers:'juvenile_inst_active', icon:'⚖️'}
  ];

  html += '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:18px;">';
  
  centers.forEach(c => {
    const totalBenef = sum(c.benef, arr);
    const totalCenters = sum(c.centers, arr);
    const yieldPerCenter = totalCenters > 0 ? Math.round(totalBenef / totalCenters) : 0;
    const efficiency = yieldPerCenter > 100 ? 'high' : yieldPerCenter > 30 ? 'medium' : 'low';
    const effColor = efficiency === 'high' ? '#4F7A63' : efficiency === 'medium' ? '#B08D57' : '#B5533C';
    const effText = efficiency === 'high' ? 'كفاءة ممتازة' : efficiency === 'medium' ? 'كفاءة متوسطة' : 'كفاءة منخفضة';
    
    html += `
      <div style="background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:14px;text-align:center;position:relative;">
        <div style="font-size:24px;margin-bottom:6px;">${c.icon}</div>
        <div style="font-family:IBM Plex Mono;font-size:22px;font-weight:700;color:var(--ink);">${fmt(yieldPerCenter)}</div>
        <div style="font-size:11.5px;color:var(--ink-soft);margin-top:2px;">مستفيد/مركز</div>
        <div style="font-family:Tajawal;font-weight:700;font-size:12px;color:var(--ink);margin-top:6px;">${c.name}</div>
        <div style="display:inline-block;margin-top:6px;background:${effColor}20;color:${effColor};padding:3px 10px;border-radius:100px;font-size:11px;font-weight:600;">${effText}</div>
      </div>
    `;
  });
  
  html += '</div>';

  // Inspection efficiency
  const totalInspInd = sum('insp_industrial', arr, 'insp_total');
  const totalInspAgri = sum('insp_agricultural', arr);
  const totalInsp = totalInspInd + totalInspAgri;
  const totalViol = sum('violations', arr);
  const violRate = totalInsp > 0 ? ((totalViol/totalInsp)*100).toFixed(1) : 0;
  const inspEff = 100 - parseFloat(violRate);
  
  html += `
    <div style="background:linear-gradient(90deg,#E0F5F5,#ffffff);border:1px solid #0D8BA8;border-radius:12px;padding:16px;margin-bottom:18px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
      <div style="font-size:40px;flex-shrink:0;">🏗️</div>
      <div style="flex:1;min-width:200px;">
        <div style="font-family:Tajawal;font-weight:700;font-size:15px;color:var(--ink);margin-bottom:6px;">فعالية التفتيش العمالي</div>
        <div style="font-size:12.5px;color:var(--ink-soft);line-height:1.7;">
          من أصل <strong>${fmt(totalInsp)}</strong> زيارة تفتيشية، سُجّلت <strong>${fmt(totalViol)}</strong> مخالفة.
          نسبة الالتزام: <span style="font-family:IBM Plex Mono;font-weight:700;color:#0B5A7A;font-size:16px;">${inspEff}%</span>
        </div>
        <div style="margin-top:8px;height:8px;background:#eee;border-radius:4px;overflow:hidden;">
          <div style="width:${inspEff}%;height:100%;background:linear-gradient(90deg,#0B5A7A,#0D8BA8);transition:width 1s ease;"></div>
        </div>
      </div>
      <div style="text-align:center;flex-shrink:0;min-width:80px;">
        <div style="font-family:IBM Plex Mono;font-size:28px;font-weight:700;color:${inspEff > 80 ? '#4F7A63' : inspEff > 50 ? '#B08D57' : '#B5533C'};">${inspEff}%</div>
        <div style="font-size:11px;color:var(--ink-soft);">معدل الالتزام</div>
      </div>
    </div>
  `;

  return html;
}

// =====================
// 4. EARLY WARNING SYSTEM
// =====================
function renderEarlyWarningSystem(arr){
  let warnings = [];
  
  ALL_GOVS.forEach(gov => {
    const g = arr.filter(d => d.gov === gov);
    if(g.length === 0) return;
    const pop = sum('population', g);
    const unemp = parseFloat(avg('unemployment_rate', g)) || 0;
    const disabled = sum('disabled_cards', g);
    const juvInst = sum('juvenile_inst_active', g);
    const juvInmates = sum('juvenile_inmates', g);
    const camps = sum('camps_count', g);
    const campFam = sum('camp_families', g);
    const foodInsecure = avg('food_insecure_pct', g) || 0;
    
    if(unemp > 30) warnings.push({gov, type:'unemployment', val:unemp, text:`معدل بطالة مرتفع جداً (${unemp}%)`, severity:'high'});
    if(pop > 5000 && disabled === 0) warnings.push({gov, type:'disability', val:0, text:`لا توجد بطاقات إعاقة مسجّلة رغم وجود ${fmt(pop)} نسمة`, severity:'high'});
    if(juvInst > 0 && juvInmates === 0) warnings.push({gov, type:'juvenile', val:0, text:`معاهد أحداث نشطة (${juvInst}) لكنها خالية من النزلاء`, severity:'medium'});
    if(camps > 0 && campFam === 0) warnings.push({gov, type:'camps', val:0, text:`مخيمات موجودة (${camps}) لكنها خالية من الأسر`, severity:'medium'});
    if(parseFloat(foodInsecure) > 40) warnings.push({gov, type:'food', val:foodInsecure, text:`نسبة الأسر المعدومة غذائياً مرتفعة (${foodInsecure}%)`, severity:'high'});
  });

  if(warnings.length === 0){
    return `
      <div style="background:#e8f5e9;border:2px solid #4F7A63;border-radius:14px;padding:18px;margin-bottom:20px;text-align:center;">
        <div style="font-size:40px;margin-bottom:8px;">✅</div>
        <div style="font-family:Tajawal;font-weight:700;font-size:16px;color:#2e7d32;">لا توجد تنبيهات حرجة</div>
        <div style="font-size:13px;color:#4a7c59;margin-top:6px;">البيانات تبدو متسقة والمؤشرات ضمن المدى المقبول لمعظم المحافظات</div>
      </div>
    `;
  }

  let html = '<h3 style="font-family:Tajawal;font-size:18px;color:var(--ink);margin:28px 0 16px;display:flex;align-items:center;gap:10px;">🚨 نظام الإنذار المبكر</h3>';
  html += `<div style="font-size:12.5px;color:var(--ink-soft);margin-bottom:14px;">تم رصد <strong style="color:#B5533C;">${warnings.length}</strong> حالة تستدعي مراجعة فورية أو تدخلاً استباقياً:</div>`;
  
  html += '<div style="display:flex;flex-direction:column;gap:10px;">';
  
  // Sort by severity
  warnings.sort((a,b) => (a.severity==='high'?2:1) - (b.severity==='high'?2:1)).reverse();
  
  warnings.forEach(w => {
    const color = w.severity === 'high' ? '#B5533C' : '#B08D57';
    const bg = w.severity === 'high' ? '#ffebee' : '#fff3e0';
    const icon = w.severity === 'high' ? '🔴' : '🟠';
    
    html += `
      <div style="background:${bg};border-inline-start:4px solid ${color};border-radius:10px;padding:14px 16px;display:flex;align-items:center;gap:12px;transition:.15s;">
        <div style="font-size:28px;flex-shrink:0;">${icon}</div>
        <div style="flex:1;min-width:0;">
          <div style="font-family:Tajawal;font-weight:700;font-size:14px;color:var(--ink);margin-bottom:3px;">${w.gov}</div>
          <div style="font-size:12.5px;color:var(--ink-soft);line-height:1.6;">${w.text}</div>
        </div>
        <div style="flex-shrink:0;background:${color};color:white;padding:4px 12px;border-radius:100px;font-size:11px;font-weight:600;font-family:IBM Plex Mono;">
          ${w.severity === 'high' ? 'حرج' : 'متوسط'}
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  return html;
}

// =====================
// 5. SECTORAL HEATMAP
// =====================
function renderSectorHeatmap(arr){
  const sectors = [
    {key:'disabled_cards', name:'بطاقات الإعاقة', icon:'🦽'},
    {key:'elderly_benef', name:'رعاية المسنين', icon:'👵'},
    {key:'insurance_total', name:'التأمينات', icon:'🏥'},
    {key:'employed', name:'التوظيف', icon:'💼'},
    {key:'insp_industrial', name:'زيارات تفتيشية على المنشآت (صناعي)', icon:'🏭', fallback:'insp_total'},
    {key:'insp_agricultural', name:'زيارات تفتيشية على المنشآت (زراعي)', icon:'🌾'},
    {key:'insp_total', name:'إجمالي الزيارات التفتيشية', icon:'🏗️'},
    {key:'food_baskets', name:'المساعدات الغذائية', icon:'🍞'},
    {key:'platform_registered', name:'المنصة الرقمية', icon:'💻'},
    {key:'ngo_active', name:'المنظمات المسحوب ترخيصها', icon:'🤝'},
    {key:'rural_dev_benef', name:'التنمية الريفية', icon:'🌾'}
  ];

  let html = '<h3 style="font-family:Tajawal;font-size:18px;color:var(--ink);margin:28px 0 16px;display:flex;align-items:center;gap:10px;">🔥 خريطة الأداء القطاعي</h3>';
  html += '<div style="background:var(--paper);border:1px solid var(--line);border-radius:14px;overflow:hidden;">';
  
  // Header
  html += `
    <div style="display:grid;grid-template-columns:minmax(140px,1fr) 1fr 1fr 1fr;background:var(--sand);padding:12px 16px;font-weight:700;font-size:12px;color:var(--ink);border-bottom:1px solid var(--line);">
      <div>القطاع</div>
      <div style="text-align:center;">🥇 الأفضل</div>
      <div style="text-align:center;">🥈 الثاني</div>
      <div style="text-align:center;">📉 يحتاج دعماً</div>
    </div>
  `;

  sectors.forEach((sector, idx) => {
    // Get all governorate values for this sector
    const govValues = [];
    ALL_GOVS.forEach(gov => {
      const val = sum(sector.key, arr.filter(d => d.gov === gov), sector.fallback);
      if(val > 0) govValues.push({gov, val});
    });
    
    if(govValues.length === 0) return;
    
    govValues.sort((a,b) => b.val - a.val);
    const best = govValues[0];
    const second = govValues[1] || {gov:'—', val:0};
    const worst = govValues[govValues.length-1];
    
    const rowBg = idx % 2 === 0 ? '#ffffff' : '#f8f9fa';
    
    html += `
      <div style="display:grid;grid-template-columns:minmax(140px,1fr) 1fr 1fr 1fr;padding:12px 16px;background:${rowBg};border-bottom:1px solid #f0f0f0;align-items:center;">
        <div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:12.5px;">
          <span style="font-size:18px;">${sector.icon}</span>
          <span>${sector.name}</span>
        </div>
        <div style="text-align:center;">
          <div style="font-family:Tajawal;font-weight:700;color:#0B5A7A;font-size:12px;">${best.gov}</div>
          <div style="font-family:IBM Plex Mono;font-size:11px;color:var(--syria-red);">${fmt(best.val)}</div>
        </div>
        <div style="text-align:center;">
          <div style="font-family:Tajawal;font-weight:700;color:#0D8BA8;font-size:12px;">${second.gov}</div>
          <div style="font-family:IBM Plex Mono;font-size:11px;color:var(--ink-soft);">${fmt(second.val)}</div>
        </div>
        <div style="text-align:center;">
          <div style="font-family:Tajawal;font-weight:700;color:#B5533C;font-size:12px;">${worst.gov}</div>
          <div style="font-family:IBM Plex Mono;font-size:11px;color:var(--ink-soft);">${fmt(worst.val)}</div>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  return html;
}

// =====================
// 6. AID & VULNERABILITY
// =====================
function renderAidAnalysis(arr){
  const totalPop = sum('population', arr) || 1;
  const foodBaskets = sum('food_baskets', arr);
  const cashAid = sum('cash_assistance', arr);
  const inKind = sum('in_kind_aid', arr);
  const totalAid = foodBaskets + cashAid + inKind;
  
  const foodSecure = avg('food_secure_pct', arr) || 0;
  const foodVulnerable = avg('food_vulnerable_pct', arr) || 0;
  const foodInsecure = avg('food_insecure_pct', arr) || 0;
  
  // Find most vulnerable governorate
  let mostVulnerable = {gov:'', pct:0};
  ALL_GOVS.forEach(gov => {
    const g = arr.filter(d => d.gov === gov);
    const insecure = parseFloat(avg('food_insecure_pct', g)) || 0;
    if(insecure > mostVulnerable.pct) mostVulnerable = {gov, pct: insecure};
  });

  let html = '<h3 style="font-family:Tajawal;font-size:18px;color:var(--ink);margin:28px 0 16px;display:flex;align-items:center;gap:10px;">🍞 تحليل الأمن الغذائي والمساعدات</h3>';
  
  html += `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin-bottom:18px;">
      <div style="background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:18px;">
        <div style="font-family:Tajawal;font-weight:700;font-size:14px;color:var(--ink);margin-bottom:12px;">📊 توزيع الأسر حسب الأمن الغذائي</div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="width:12px;height:12px;border-radius:50%;background:#4F7A63;flex-shrink:0;"></div>
            <div style="flex:1;font-size:12px;">آمنة غذائياً</div>
            <div style="font-family:IBM Plex Mono;font-weight:700;color:#4F7A63;">${foodSecure}%</div>
          </div>
          <div style="height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden;">
            <div style="width:${foodSecure}%;height:100%;background:#4F7A63;"></div>
          </div>
          
          <div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
            <div style="width:12px;height:12px;border-radius:50%;background:#B08D57;flex-shrink:0;"></div>
            <div style="flex:1;font-size:12px;">ذات هشاشة غذائية</div>
            <div style="font-family:IBM Plex Mono;font-weight:700;color:#B08D57;">${foodVulnerable}%</div>
          </div>
          <div style="height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden;">
            <div style="width:${foodVulnerable}%;height:100%;background:#B08D57;"></div>
          </div>
          
          <div style="display:flex;align-items:center;gap:8px;margin-top:4px;">
            <div style="width:12px;height:12px;border-radius:50%;background:#B5533C;flex-shrink:0;"></div>
            <div style="flex:1;font-size:12px;">معدومة غذائياً</div>
            <div style="font-family:IBM Plex Mono;font-weight:700;color:#B5533C;">${foodInsecure}%</div>
          </div>
          <div style="height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden;">
            <div style="width:${foodInsecure}%;height:100%;background:#B5533C;"></div>
          </div>
        </div>
      </div>
      
      <div style="background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:18px;">
        <div style="font-family:Tajawal;font-weight:700;font-size:14px;color:var(--ink);margin-bottom:12px;">📦 حجم المساعدات المُقدّمة</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <div style="background:#e8f5e9;border-radius:8px;padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:12px;">🍞 سلل غذائية</span>
            <span style="font-family:IBM Plex Mono;font-weight:700;color:#2e7d32;">${fmt(foodBaskets)}</span>
          </div>
          <div style="background:#e3f2fd;border-radius:8px;padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:12px;">💵 إعانات مالية</span>
            <span style="font-family:IBM Plex Mono;font-weight:700;color:#1565c0;">${fmt(cashAid)}</span>
          </div>
          <div style="background:#fff3e0;border-radius:8px;padding:10px 12px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-size:12px;">💊 مساعدات عينية</span>
            <span style="font-family:IBM Plex Mono;font-weight:700;color:#e65100;">${fmt(inKind)}</span>
          </div>
          <div style="border-top:1px dashed var(--line);margin-top:4px;padding-top:8px;display:flex;justify-content:space-between;align-items:center;">
            <span style="font-weight:700;font-size:12px;">الإجمالي</span>
            <span style="font-family:IBM Plex Mono;font-weight:700;color:var(--ink);font-size:14px;">${fmt(totalAid)}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  if(mostVulnerable.gov && mostVulnerable.pct > 0){
    html += `
      <div style="background:#ffebee;border:1px solid #ef9a9a;border-radius:12px;padding:14px 16px;margin-bottom:18px;display:flex;align-items:center;gap:12px;">
        <div style="font-size:28px;flex-shrink:0;">⚠️</div>
        <div>
          <div style="font-family:Tajawal;font-weight:700;font-size:14px;color:#c62828;">محافظة ${mostVulnerable.gov} تسجّل أعلى نسبة انعدام أمن غذائي</div>
          <div style="font-size:12.5px;color:#b71c1c;margin-top:4px;">نسبة الأسر المعدومة غذائياً تصل إلى <strong>${mostVulnerable.pct}%</strong> — يستدعي تكثيف المساعدات الطارئة ودراسة أسباب الهشاشة الغذائية.</div>
        </div>
      </div>
    `;
  }

  return html;
}

// =====================
// 7. DIGITAL & LABOR INSIGHTS
// =====================
function renderDigitalAndLaborInsights(arr){
  const totalPop = sum('population', arr) || 1;
  const platformReg = sum('platform_registered', arr);
  const digitalPenetration = ((platformReg / totalPop) * 100).toFixed(2);
  
  const employed = sum('employed', arr);
  const unemployed = sum('unemployed', arr);
  const laborForce = employed + unemployed;
  const unempRate = laborForce > 0 ? ((unemployed / laborForce) * 100).toFixed(1) : 0;
  
  const femalePart = avg('female_participation', arr) || 0;
  const malePart = avg('male_participation', arr) || 0;
  const genderGap = (parseFloat(malePart) - parseFloat(femalePart)).toFixed(1);

  let html = '<h3 style="font-family:Tajawal;font-size:18px;color:var(--ink);margin:28px 0 16px;display:flex;align-items:center;gap:10px;">💻 رؤى سوق العمل والتحوّل الرقمي</h3>';
  
  html += `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin-bottom:18px;">
      <div style="background:linear-gradient(135deg,#e3f2fd,#ffffff);border:1px solid #1565c0;border-radius:14px;padding:18px;text-align:center;">
        <div style="font-size:32px;margin-bottom:8px;">📱</div>
        <div style="font-family:IBM Plex Mono;font-size:28px;font-weight:700;color:#1565c0;">${digitalPenetration}%</div>
        <div style="font-family:Tajawal;font-weight:700;font-size:13px;color:var(--ink);margin-top:4px;">مؤشر الشمول الرقمي</div>
        <div style="font-size:11px;color:var(--ink-soft);margin-top:6px;">نسبة المسجّلين على منصة سوق العمل من إجمالي السكان</div>
        <div style="margin-top:10px;height:5px;background:#e0e0e0;border-radius:3px;overflow:hidden;">
          <div style="width:${Math.min(parseFloat(digitalPenetration)*5,100)}%;height:100%;background:#1565c0;"></div>
        </div>
      </div>
      
      <div style="background:linear-gradient(135deg,#fff3e0,#ffffff);border:1px solid #e65100;border-radius:14px;padding:18px;text-align:center;">
        <div style="font-size:32px;margin-bottom:8px;">📉</div>
        <div style="font-family:IBM Plex Mono;font-size:28px;font-weight:700;color:#e65100;">${unempRate}%</div>
        <div style="font-family:Tajawal;font-weight:700;font-size:13px;color:var(--ink);margin-top:4px;">معدل البطالة المحسوب</div>
        <div style="font-size:11px;color:var(--ink-soft);margin-top:6px;">من إجمالي القوى العاملة (${fmt(laborForce)} مشتغل+متعطل)</div>
        <div style="margin-top:10px;height:5px;background:#e0e0e0;border-radius:3px;overflow:hidden;">
          <div style="width:${Math.min(parseFloat(unempRate)*3,100)}%;height:100%;background:#e65100;"></div>
        </div>
      </div>
      
      <div style="background:linear-gradient(135deg,#f3e5f5,#ffffff);border:1px solid #7b1fa2;border-radius:14px;padding:18px;text-align:center;">
        <div style="font-size:32px;margin-bottom:8px;">⚖️</div>
        <div style="font-family:IBM Plex Mono;font-size:28px;font-weight:700;color:#7b1fa2;">${genderGap}</div>
        <div style="font-family:Tajawal;font-weight:700;font-size:13px;color:var(--ink);margin-top:4px;">فجوة المشاركة الاقتصادية</div>
        <div style="font-size:11px;color:var(--ink-soft);margin-top:6px;">الفارق بين مشاركة الذكور (${malePart}%) والإناث (${femalePart}%)</div>
        <div style="margin-top:10px;height:5px;background:#e0e0e0;border-radius:3px;overflow:hidden;">
          <div style="width:${Math.min(parseFloat(genderGap)*4,100)}%;height:100%;background:#7b1fa2;"></div>
        </div>
      </div>
    </div>
  `;

  // Platform vs Reality gap
  const platformJobs = sum('platform_jobs', arr);
  const platformTrain = sum('platform_training', arr);
  
  html += `
    <div style="background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:16px;margin-bottom:18px;">
      <div style="font-family:Tajawal;font-weight:700;font-size:14px;color:var(--ink);margin-bottom:12px;">💼 توازن العرض والطلب على المنصة الرقمية</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;">
        <div style="text-align:center;padding:12px;background:#f8f9fa;border-radius:10px;">
          <div style="font-family:IBM Plex Mono;font-size:22px;font-weight:700;color:#0B5A7A;">${fmt(platformReg)}</div>
          <div style="font-size:11px;color:var(--ink-soft);margin-top:4px;">باحثون عن عمل</div>
        </div>
        <div style="text-align:center;padding:12px;background:#f8f9fa;border-radius:10px;">
          <div style="font-family:IBM Plex Mono;font-size:22px;font-weight:700;color:#0D8BA8;">${fmt(platformJobs)}</div>
          <div style="font-size:11px;color:var(--ink-soft);margin-top:4px;">فرص عمل متاحة</div>
        </div>
        <div style="text-align:center;padding:12px;background:#f8f9fa;border-radius:10px;">
          <div style="font-family:IBM Plex Mono;font-size:22px;font-weight:700;color:#B08D57;">${fmt(platformTrain)}</div>
          <div style="font-size:11px;color:var(--ink-soft);margin-top:4px;">فرص تدريب</div>
        </div>
        <div style="text-align:center;padding:12px;background:${platformJobs >= platformReg ? '#e8f5e9' : '#ffebee'};border-radius:10px;">
          <div style="font-family:IBM Plex Mono;font-size:22px;font-weight:700;color:${platformJobs >= platformReg ? '#2e7d32' : '#c62828'};">
            ${platformReg > 0 ? ((platformJobs / platformReg) * 100).toFixed(1) : 0}%
          </div>
          <div style="font-size:11px;color:var(--ink-soft);margin-top:4px;">نسبة التغطية</div>
        </div>
      </div>
      ${platformJobs < platformReg ? `
        <div style="margin-top:12px;background:#ffebee;border:1px solid #ef9a9a;border-radius:8px;padding:10px 12px;font-size:12px;color:#c62828;">
          ⚠️ عدد فرص العمل المتاحة (${fmt(platformJobs)}) لا يغطي سوى ${((platformJobs/platformReg)*100).toFixed(1)}% من الباحثين عن عمل (${fmt(platformReg)}) — فجوة تستدعي تكثيف جذب المنشآت.
        </div>
      ` : ''}
    </div>
  `;

  return html;
}

// =====================
// 8. GENDER INSIGHTS (Enhanced)
// =====================
function renderGenderInsights(arr){
  const totalMales = sum('males', arr);
  const totalFemales = sum('females', arr);
  const totalPop = sum('population', arr);
  
  if(totalPop === 0) return '';

  const malePct = Math.round((totalMales / totalPop) * 100);
  const femalePct = Math.round((totalFemales / totalPop) * 100);
  const genderRatio = totalFemales > 0 ? (totalMales / totalFemales).toFixed(2) : 0;
  
  // Female breadwinners analysis
  const femBread = avg('female_breadwinners', arr) || 0;

  let html = '<h3 style="font-family:Tajawal;font-size:18px;color:var(--ink);margin:28px 0 16px;display:flex;align-items:center;gap:10px;">⚖️ التوازن الجنساني والتمكين</h3>';
  
  html += `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;margin-bottom:18px;">
      <div style="background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:18px;">
        <div style="font-family:Tajawal;font-weight:700;font-size:14px;color:var(--ink);margin-bottom:14px;">التوزيع الجنساني العام</div>
        <div style="display:flex;height:32px;border-radius:16px;overflow:hidden;margin-bottom:10px;background:#f0f0f0;">
          <div style="background:#0B5A7A;display:flex;align-items:center;justify-content:center;color:white;font-size:12px;font-family:IBM Plex Mono;font-weight:600;width:${malePct}%;transition:width 0.8s ease;">${malePct}% ♂️</div>
          <div style="background:#0D8BA8;display:flex;align-items:center;justify-content:center;color:white;font-size:12px;font-family:IBM Plex Mono;font-weight:600;width:${femalePct}%;transition:width 0.8s ease;">${femalePct}% ♀️</div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--ink-soft);">
          <span>نسبة الذكور/الإناث: <strong style="color:var(--ink);">${genderRatio}</strong></span>
          <span>إجمالي السكان: <strong style="color:var(--ink);">${fmt(totalPop)}</strong></span>
        </div>
      </div>
      
      <div style="background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:18px;">
        <div style="font-family:Tajawal;font-weight:700;font-size:14px;color:var(--ink);margin-bottom:14px;">👩‍👧 تمكين المرأة المعيلة</div>
        <div style="text-align:center;margin-bottom:10px;">
          <div style="font-family:IBM Plex Mono;font-size:32px;font-weight:700;color:#7b1fa2;">${femBread}%</div>
          <div style="font-size:12px;color:var(--ink-soft);margin-top:4px;">من الأسر لديها معيلة أنثى</div>
        </div>
        <div style="height:6px;background:#f0f0f0;border-radius:3px;overflow:hidden;">
          <div style="width:${femBread}%;height:100%;background:linear-gradient(90deg,#7b1fa2,#ba68c8);transition:width 0.8s ease;"></div>
        </div>
        <div style="font-size:11px;color:var(--ink-soft);margin-top:8px;line-height:1.6;">
          ${parseFloat(femBread) > 25 ? '⚠️ نسبة مرتفعة — تدل على ضغط اجتماعي يستدعي برامج دعم خاصة للأسر التي ترأسها نساء.' : '✅ النسبة ضمن المدى المقبول.'}
        </div>
      </div>
    </div>
  `;

  // Find governorate with highest female economic participation
  let bestFemalePart = {gov:'', val:0};
  let worstFemalePart = {gov:'', val:999};
  ALL_GOVS.forEach(gov => {
    const g = arr.filter(d => d.gov === gov);
    const fp = parseFloat(avg('female_participation', g)) || 0;
    if(fp > bestFemalePart.val) bestFemalePart = {gov, val: fp};
    if(fp < worstFemalePart.val && fp > 0) worstFemalePart = {gov, val: fp};
  });

  if(bestFemalePart.gov){
    html += `
      <div style="background:#f3e5f5;border:1px solid #ce93d8;border-radius:12px;padding:14px 16px;margin-bottom:18px;display:flex;align-items:center;gap:12px;">
        <div style="font-size:28px;flex-shrink:0;">💜</div>
        <div>
          <div style="font-family:Tajawal;font-weight:700;font-size:14px;color:#4a148c;">التمكين الاقتصادي للمرأة</div>
          <div style="font-size:12.5px;color:#6a1b9a;margin-top:4px;line-height:1.6;">
            🥇 <strong>${bestFemalePart.gov}</strong> تتصدر بأعلى مشاركة اقتصادية للإناث (${bestFemalePart.val}%).
            ${worstFemalePart.gov ? `📉 <strong>${worstFemalePart.gov}</strong> تسجّل أقل مشاركة (${worstFemalePart.val}%) — فرصة لبرامج التدريب والتمكين.` : ''}
          </div>
        </div>
      </div>
    `;
  }

  return html;
}

// =====================
// 9. CROSS-SECTORAL PATTERNS
// =====================
function renderPatterns(arr){
  let html = '<h3 style="font-family:Tajawal;font-size:18px;color:var(--ink);margin:28px 0 16px;display:flex;align-items:center;gap:10px;">🔍 أنماط متقاطعة ومقارنات استراتيجية</h3>';

  // NGO density vs Aid dependency correlation
  const ngoDensity = [];
  const aidPerCapita = [];
  ALL_GOVS.forEach(gov => {
    const g = arr.filter(d => d.gov === gov);
    const pop = sum('population', g) || 1;
    const ngos = sum('ngo_active', g);
    const aid = sum('food_baskets', g) + sum('cash_assistance', g);
    if(pop > 0 && (ngos > 0 || aid > 0)){
      ngoDensity.push({gov, density: (ngos/pop)*100000, aid: (aid/pop)*1000});
    }
  });

  if(ngoDensity.length > 0){
    const highNgoLowAid = ngoDensity.filter(d => d.density > 2 && d.aid < 5);
    const lowNgoHighAid = ngoDensity.filter(d => d.density < 1 && d.aid > 10);
    
    html += `
      <div style="background:#e3f2fd;border:1px solid #1565c0;border-radius:12px;padding:14px 16px;margin-bottom:14px;">
        <div style="font-family:Tajawal;font-weight:700;font-size:14px;color:#0d47a1;margin-bottom:8px;">🤝 العلاقة بين المنظمات والمساعدات</div>
        <div style="font-size:12.5px;color:#1565c0;line-height:1.8;">
          ${highNgoLowAid.length > 0 
            ? `✅ محافظات <strong>${highNgoLowAid.map(d=>d.gov).join('، ')}</strong> تتمتع بكثافة منظمات جيدة مع اعتماد منخفض على المساعدات — نموذج للاستدامة.` 
            : ''}
          ${lowNgoHighAid.length > 0 
            ? `<br>⚠️ محافظات <strong>${lowNgoHighAid.map(d=>d.gov).join('، ')}</strong> تعتمد بكثافة على المساعدات رغم قلة المنظمات — حاجة ماسة لتمكين المجتمع المدني المحلي.` 
            : ''}
        </div>
      </div>
    `;
  }

  // Insurance coverage gap
  const totalPop = sum('population', arr) || 1;
  const insured = sum('insurance_total', arr);
  const coverage = ((insured / totalPop) * 100).toFixed(1);
  
  html += `
    <div style="background:${parseFloat(coverage) < 20 ? '#ffebee' : '#e8f5e9'};border:1px solid ${parseFloat(coverage) < 20 ? '#ef9a9a' : '#a5d6a7'};border-radius:12px;padding:14px 16px;margin-bottom:14px;">
      <div style="font-family:Tajawal;font-weight:700;font-size:14px;color:${parseFloat(coverage) < 20 ? '#c62828' : '#2e7d32'};margin-bottom:8px;">🏥 تغطية التأمينات الاجتماعية</div>
      <div style="font-size:12.5px;color:${parseFloat(coverage) < 20 ? '#b71c1c' : '#1b5e20'};line-height:1.8;">
        نسبة المشمولين بالتأمينات من السكان: <strong style="font-family:IBM Plex Mono;font-size:16px;">${coverage}%</strong>
        ${parseFloat(coverage) < 20 
          ? ' — ⚠️ تغطية منخفضة جداً. غالبية القوى العاملة خارج النظام التأميني (قطاع غير منظم/اقتصاد غير رسمي).' 
          : ' — ✅ تغطية مقبولة نسبياً.'}
      </div>
    </div>
  `;

  // Seasonal insight
  const months = [...new Set(arr.map(d => d.month))];
  if(months.length > 1){
    html += `
      <div style="background:var(--sand);border:1px solid var(--line);border-radius:12px;padding:14px 16px;margin-bottom:14px;">
        <div style="font-family:Tajawal;font-weight:700;font-size:14px;color:var(--ink);margin-bottom:8px;">📅 إمكانية التحليل الموسمي</div>
        <div style="font-size:12.5px;color:var(--ink-soft);line-height:1.8;">
          البيانات تمتد عبر <strong>${months.length}</strong> أشهر (${months.join('، ')}). 
          يمكن استخدام فلتر الأشهر لمقارنة الأداء بين الفصول وتحديد فترات الذروة والانحدار في النشاط التشغيلي.
        </div>
      </div>
    `;
  }

  return html;
}

// Keep existing helper functions (getRankingModeLabel, etc.)
function getRankingModeLabel(mode){
  const labels = {
    absolute: 'النشاط الإجمالي (مجموع المؤشرات)',
    perCapita: 'النشاط لكل 1000 نسمة (تصحيح سكاني)',
    coverage: 'نسبة تغطية ذوي الإعاقة من السكان',
    activityCount: 'عدد المؤشرات النشطة (وليس حجمها)'
  };
  return labels[mode] || labels.absolute;
}

function getRankingModeDescription(mode){
  const desc = {
    absolute: 'يجمع جميع المؤشرات الرقمية دون تصحيح سكاني. المحافظات الكبيرة تتصدر تلقائياً.',
    perCapita: 'يقسم مجموع النشاط على عدد السكان ويضرب بـ 1000. يعطي صورة عادلة عن "كفاءة" المحافظة الصغيرة مقابل الكبيرة.',
    coverage: 'يركز على مؤشر واحد محدد: نسبة حاملي بطاقات الإعاقة من إجمالي السكان. يكشف جودة التغطية الاجتماعية.',
    activityCount: 'يحسب كم مؤشر لدى المحافظة بقيمة أكبر من صفر. يكافئ المحافظات المتنوعة النشاط.'
  };
  return desc[mode] || desc.absolute;
}

function setRankingMode(mode){
  currentRankingMode = mode;
  renderInsights();
}

// =====================
// FILE HANDLING
// =====================
function handleCSVUpload(input){
  const file = input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e){ 
    processCSVData(e.target.result); 
    closeUploadModal(); 
  };
  reader.readAsText(file);
}

function handleCSVPaste(){
  const csvText = document.getElementById('csvPasteArea').value;
  if(!csvText.trim()){ alert('الرجاء لصق البيانات أولاُ'); return; }
  processCSVData(csvText);
  closeUploadModal();
}

// Google Sheets helpers
function normalizeGoogleSheetUrl(rawUrl){
  const value = String(rawUrl || '').trim();
  if(!value) return '';

  // Keep already-published CSV URLs intact, while removing stale query params.
  if(/docs\.google\.com\/spreadsheets\/d\/e\//i.test(value)){
    const publishedId = value.match(/\/spreadsheets\/d\/e\/([^/]+)/i);
    if(publishedId){
      const gid = new URL(value, window.location.href).searchParams.get('gid');
      return `https://docs.google.com/spreadsheets/d/e/${publishedId[1]}/pub?output=csv${gid ? `&gid=${encodeURIComponent(gid)}` : ''}`;
    }
  }

  // Accept the normal /edit or /view link and convert it to the CSV endpoint.
  const idMatch = value.match(/docs\.google\.com\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/i);
  if(idMatch){
    const parsed = new URL(value, window.location.href);
    const gid = parsed.searchParams.get('gid');
    return `https://docs.google.com/spreadsheets/d/${idMatch[1]}/export?format=csv${gid ? `&gid=${encodeURIComponent(gid)}` : ''}`;
  }

  return value;
}

async function fetchWithTimeout(url, options = {}, timeout = 10000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, {...options, signal: controller.signal, cache: 'no-store'});
  } finally {
    clearTimeout(timer);
  }
}

function looksLikeCsv(text){
  if(typeof text !== 'string') return false;
  const sample = text.replace(/^\uFEFF/, '').trim();
  if(sample.length < 20) return false;
  if(/<html[\s>]/i.test(sample) || /<!doctype/i.test(sample)) return false;
  return sample.includes(',') || sample.includes(';') || sample.includes('\n');
}

async function loadFromSheet(){
  const statusEl = document.getElementById('dataStatus');
  const refreshBtn = document.getElementById('refreshBtn');

  statusEl.textContent = '⏳ جاري الاتصال بـ Google Sheets...';
  statusEl.className = 'status-badge status-loading';
  if(refreshBtn) refreshBtn.disabled = true;

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_CONFIG.spreadsheetId}/values/${encodeURIComponent(SHEETS_CONFIG.range)}?key=${SHEETS_CONFIG.apiKey}&valueRenderOption=UNFORMATTED_VALUE`;

    const response = await fetch(url, { cache: 'no-store' });

    if(!response.ok){
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error?.message || `خطأ HTTP: ${response.status}`);
    }

    const json = await response.json();

    if(!json.values || json.values.length < 2){
      throw new Error('الورقة فارغة أو لا تحتوي على بيانات كافية');
    }

    // Convert Google Sheets array to CSV text
    const csvText = json.values.map(row => 
      row.map(cell => {
        if(cell === null || cell === undefined) return '';
        const str = String(cell).replace(/\r?\n/g, ' ');
        if(str.includes(',') || str.includes('"')){
          return `"${str.replace(/"/g, '""')}"`;
        }
        return str;
      }).join(',')
    ).join('\n');

    if(processCSVData(csvText)){
      statusEl.textContent = '✅ تم التحديث من Google Sheets — ' + new Date().toLocaleTimeString('ar-SY');
      statusEl.className = 'status-badge status-ok';

      const urlInput = document.getElementById('gsheetUrl');
      if(urlInput){
        urlInput.value = `متصل بـ Google Sheets: ${SHEETS_CONFIG.spreadsheetId}`;
        urlInput.style.background = '#e8f5e9';
        urlInput.style.color = '#0B5A7A';
      }
    }

  } catch(err){
    console.error('Google Sheets Error:', err);

    let msg = '❌ فشل الاتصال: ';
    if(err.message.includes('API key not valid')) msg += 'مفتاح API غير صالح';
    else if(err.message.includes('not found')) msg += 'لم يتم العثور على الورقة';
    else if(err.message.includes('Permission')) msg += 'الورقة غير عامة (تحقق من إعدادات المشاركة)';
    else msg += err.message;

    statusEl.textContent = msg;
    statusEl.className = 'status-badge status-error';

    // fallback to inline data immediately
    if(typeof INLINE_CSV_DATA !== 'undefined' && INLINE_CSV_DATA){
      console.log('استخدام البيانات المحلية كاحتياط...');
      processCSVData(INLINE_CSV_DATA);
      statusEl.textContent = '⚠️ تم التحميل من البيانات المحلية (لا يوجد إنترنت)';
      statusEl.className = 'status-badge status-loading';
    }
  } finally {
    if(refreshBtn) refreshBtn.disabled = false;
  }
}

// =====================
// MODALS
// =====================
function showUploadModal(){ 
  document.getElementById('uploadModal').classList.add('open'); 
}
function closeUploadModal(){ 
  document.getElementById('uploadModal').classList.remove('open'); 
}

window.onclick = function(event){ 
  if(event.target.classList.contains('modal-overlay')) 
    event.target.classList.remove('open'); 
}

// Drag and drop
const dropZone = document.getElementById('fileDropZone');
if(dropZone){
  dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('dragover'); });
  dropZone.addEventListener('dragleave', () => { dropZone.classList.remove('dragover'); });
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault(); 
    dropZone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    if(files.length > 0){ 
      const reader = new FileReader(); 
      reader.onload = function(ev){ 
        processCSVData(ev.target.result); 
        closeUploadModal(); 
      }; 
      reader.readAsText(files[0]); 
    }
  });
}


// =====================
// MAP - Leaflet OpenStreetMap
// =====================
let map = null;
let mapMarkers = {};

const GOV_COORDS = {
  "دمشق": [33.5138, 36.2765],
  "ريف دمشق": [33.5833, 36.4000],
  "حلب": [36.2021, 37.1343],
  "حمص": [34.7308, 36.7094],
  "حماه": [35.1333, 36.7500],
  "اللاذقية": [35.5196, 35.7914],
  "طرطوس": [34.8890, 35.8866],
  "السويداء": [32.7089, 36.5695],
  "درعا": [32.6258, 36.1054],
  "القنيطرة": [33.1258, 35.8245],
  "ادلب": [35.9306, 36.6339],
  "الرقة": [35.9500, 39.0167],
  "دير الزور": [35.3356, 40.1406],
  "الحسكة": [36.5024, 40.7477]
};

function getGovIntensity(gov, arr){
  const govData = arr.filter(d => d.gov === gov);
  if(govData.length === 0) return 0;
  let total = 0;
  govData.forEach(d => {
    // Demographic base (population, gender, age groups) — weighted to reflect scale
    total += (d.population||0) * 0.5 + (d.males||0) * 0.1 + (d.females||0) * 0.1 +
             (d.pop_under15||0) * 0.05 + (d.pop_15_60||0) * 0.05 + (d.pop_over60||0) * 0.05 +
             // Social & operational indicators
             (d.disabled_cards||0) + (d.elderly_benef||0) + (d.ngo_active||0) + 
             (d.juvenile_inmates||0) + (d.rural_dev_benef||0) + ((d.insp_industrial !== undefined ? d.insp_industrial : d.insp_total)||0) + (d.insp_agricultural||0) +
             (d.new_workers_insp||0) + (d.employed||0) + (d.platform_registered||0) +
             (d.vocational_benef||0) +
             (d.food_baskets||0) + (d.insurance_total||0) + (d.camp_families||0) +
             (d.disability_benef||0) + (d.cash_assistance||0);
  });
  return total;
}

function getIntensityColor(intensity){
  if(intensity === 0) return '#cccccc';
  if(intensity > 5000) return '#B5533C'; // Very high - red
  if(intensity > 2000) return '#B08D57'; // High - brass
  if(intensity > 500) return '#4F7A63';  // Medium - green
  return '#6E8FA3'; // Low - blue
}

function initMap(){
  if(map !== null) return;
  if(typeof L === 'undefined'){
    const mapEl = document.getElementById('govMap');
    if(mapEl) mapEl.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#666;font-family:Cairo;font-size:14px;flex-direction:column;gap:10px;"><div style="font-size:36px;">🗺️</div><div>تعذّر تحميل الخريطة — تأكد من الاتصال بالإنترنت لتحميل مكتبة Leaflet</div></div>';
    return;
  }

  // نطاق سوريا التقريبي: يركّز العرض على الأراضي السورية ويمنع سحب الخريطة بعيداً عنها.
  const syriaBounds = L.latLngBounds(
    [32.25, 35.55], // الجنوب الغربي
    [37.40, 42.45]  // الشمال الشرقي
  );

  map = L.map('govMap', {
    minZoom: 6,
    maxZoom: 13,
    maxBounds: syriaBounds,
    maxBoundsViscosity: 1.0,
    zoomControl: true,
    worldCopyJump: false
  });

  map.fitBounds(syriaBounds, {padding: [18, 18]});

  // طبقات الخريطة: أساسية + تضاريس بخطوط الارتفاع
  const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19,
    noWrap: true
  });
  const terrainLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenTopoMap contributors, © OpenStreetMap contributors',
    maxZoom: 17,
    noWrap: true
  });
  streetLayer.addTo(map);
  L.control.layers({
    'خريطة الشوارع': streetLayer,
    'التضاريس والارتفاعات': terrainLayer
  }, null, {collapsed: false, position: 'topright'}).addTo(map);

  updateMapMarkers();
}

function updateMapMarkers(){
  if(!map || typeof L === 'undefined') return;
  if(typeof L === 'undefined') return;

  // Clear existing markers
  Object.values(mapMarkers).forEach(m => map.removeLayer(m));
  mapMarkers = {};

  const arr = filtered();

  ALL_GOVS.forEach(gov => {
    const coords = GOV_COORDS[gov];
    if(!coords) return;

    const intensity = getGovIntensity(gov, arr);
    const color = getIntensityColor(intensity);
    const govData = arr.filter(d => d.gov === gov);

    // Create custom icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        width:28px;height:28px;
        background:${color};
        border:3px solid white;
        border-radius:50%;
        box-shadow:0 2px 8px rgba(0,0,0,0.3);
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
        font-weight:700;
        font-size:11px;
        font-family:'IBM Plex Mono',monospace;
      ">${gov[0]}</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    const marker = L.marker(coords, { icon: customIcon }).addTo(map);
    marker.on('click', function(){ openGovProfile(gov); });

    // Build popup content
    let popupContent = `<div class="map-info-window">
      <h4>📍 ${gov}</h4>`;

    if(govData.length === 0){
      popupContent += `<div class="info-row"><span class="info-label">الحالة</span><span class="info-val" style="color:#999;">لا توجد بيانات</span></div>`;
    } else {
      // Aggregate all numeric fields across all records for this governorate
      const agg = {};
      const textFields = {};
      govData.forEach(d => {
        Object.keys(d).forEach(key => {
          if (key === 'gov' || key === 'month') return;
          const val = d[key];
          if (typeof val === 'number') {
            agg[key] = (agg[key] || 0) + val;
          } else if (typeof val === 'string' && val.trim()) {
            if (!textFields[key]) textFields[key] = [];
            if (!textFields[key].includes(val)) textFields[key].push(val);
          }
        });
      });

      const d = agg; // Use aggregated data
      const monthsList = govData.map(d => d.month).filter((v, i, a) => a.indexOf(v) === i).join('، ');

      popupContent += `
        <div class="info-row" style="background:#f5f5f5;border-radius:6px;padding:6px 8px;margin-bottom:8px;">
          <span class="info-label" style="font-weight:700;">📅 الأشهر</span>
          <span class="info-val" style="font-size:11px;">${monthsList || 'غير محدد'}</span>
        </div>

        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">🦽 رعاية ذوي الإعاقة</span>
        </div>
        <div class="info-row"><span class="info-label">بطاقات إعاقة</span><span class="info-val">${fmt(d.disabled_cards||0)}</span></div>
        <div class="info-row"><span class="info-label">عدد الطلاب المسجلين في المعاهد الخاصة بذوي الاعاقة</span><span class="info-val">${fmt(d.disability_benef||0)}</span></div>
        <div class="info-row"><span class="info-label">معينات حركية</span><span class="info-val">${fmt(d.mobility_aids||0)}</span></div>
        <div class="info-row"><span class="info-label">معونة نقدية لأسر الإعاقة</span><span class="info-val">${fmt(d.disability_cash||0)}</span></div>

        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">👵 الرعاية الاجتماعية</span>
        </div>
        <div class="info-row"><span class="info-label">دور رعاية المسنين</span><span class="info-val">${fmt(d.elderly_homes||0)}</span></div>
        <div class="info-row"><span class="info-label">عدد المستفيدين من خدمات دور رعاية المسنين</span><span class="info-val">${fmt(d.elderly_benef||0)}</span></div>
        <div class="info-row"><span class="info-label">عدد مراكز رعاية المتسولين</span><span class="info-val">${fmt(d.beggar_centers_total||0)}</span></div>
        <div class="info-row"><span class="info-label">مراكز رعاية المتسولين (النشطة)</span><span class="info-val">${fmt(d.beggar_centers_active||0)}</span></div>
        <div class="info-row"><span class="info-label">عدد النزلاء في مراكز التسول</span><span class="info-val">${fmt(d.beggar_inmates||0)}</span></div>
        <div class="info-row"><span class="info-label">دور رعاية الأيتام</span><span class="info-val">${fmt(d.orphan_homes||0)}</span></div>
        <div class="info-row"><span class="info-label">كفالة داخلية</span><span class="info-val">${fmt(d.sponsor_internal||0)}</span></div>
        <div class="info-row"><span class="info-label">كفالة خارجية</span><span class="info-val">${fmt(d.sponsor_external||0)}</span></div>

        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">🤝 المنظمات غير الحكومية</span>
        </div>
        <div class="info-row"><span class="info-label">المنظمات المسحوب ترخيصها</span><span class="info-val">${fmt(d.ngo_active||0)}</span></div>
        <div class="info-row"><span class="info-label">المنظمات المشهرة (عام)</span><span class="info-val">${fmt(d.ngo_new_pct||0)}</span></div>
        <div class="info-row"><span class="info-label">المنظمات المشهرة 2025</span><span class="info-val">${fmt(d.ngo_new_pct_2025||0)}</span></div>

        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">⚖️ معاهد الأحداث</span>
        </div>
        <div class="info-row"><span class="info-label">معاهد الأحداث</span><span class="info-val">${fmt(d.juvenile_inst||0)}</span></div>
        <div class="info-row"><span class="info-label">معاهد بالخدمة</span><span class="info-val">${fmt(d.juvenile_inst_active||0)}</span></div>
        <div class="info-row"><span class="info-label">نزلاء الأحداث</span><span class="info-val">${fmt(d.juvenile_inmates||0)}</span></div>

        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">🌾 التنمية الريفية</span>
        </div>
        <div class="info-row"><span class="info-label">مراكز التنمية في الخدمة</span><span class="info-val">${fmt(d.rural_dev_active||0)}</span></div>
        <div class="info-row"><span class="info-label">مراكز تنمية ريفية (خارج الخدمة)</span><span class="info-val">${fmt(d.rural_dev_inactive||0)}</span></div>
        <div class="info-row"><span class="info-label">عدد وحدات الصناعة في الخدمة</span><span class="info-val">${fmt(d.rural_ind_active||0)}</span></div>
        <div class="info-row"><span class="info-label">وحدات صناعات ريفية (خارج الخدمة)</span><span class="info-val">${fmt(d.rural_ind_inactive||0)}</span></div>
        <div class="info-row"><span class="info-label">مستفيدو التنمية الريفية</span><span class="info-val">${fmt(d.rural_dev_benef||0)}</span></div>
        <div class="info-row"><span class="info-label">مستفيدو الصناعات الريفية</span><span class="info-val">${fmt(d.rural_ind_benef||0)}</span></div>
        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">🏗️ التفتيش والعمالة</span>
        </div>
        <div class="info-row"><span class="info-label">عمال مسجّلون جدد</span><span class="info-val">${fmt(d.new_workers_insp||0)}</span></div>
        <div class="info-row"><span class="info-label">زيارات تفتيشية على المنشآت (صناعي)</span><span class="info-val">${fmt(d.insp_industrial !== undefined ? d.insp_industrial : (d.insp_total||0))}</span></div>
        <div class="info-row"><span class="info-label">زيارات تفتيشية على المنشآت (زراعي)</span><span class="info-val">${fmt(d.insp_agricultural||0)}</span></div>
        <div class="info-row"><span class="info-label">إجمالي الزيارات</span><span class="info-val">${fmt((d.insp_industrial !== undefined ? d.insp_industrial : (d.insp_total||0))+(d.insp_agricultural||0))}</span></div>
        <div class="info-row"><span class="info-label">مخالفات مسجّلة</span><span class="info-val">${fmt(d.violations||0)}</span></div>
        <div class="info-row"><span class="info-label">تراخيص عمل جديدة (غير سوريين)</span><span class="info-val">${fmt(d.work_permits_new||0)}</span></div>
        <div class="info-row"><span class="info-label">تجديد تراخيص العمل</span><span class="info-val">${fmt(d.work_permits_renew||0)}</span></div>
        <div class="info-row"><span class="info-label">مكاتب استقدام عاملات</span><span class="info-val">${fmt(d.recruitment_offices||0)}</span></div>
        <div class="info-row"><span class="info-label">عاملات منزليات (تراخيص جديدة)</span><span class="info-val">${fmt(d.domestic_permits_new||0)}</span></div>
        <div class="info-row"><span class="info-label">مكاتب تشغيل سوريين</span><span class="info-val">${fmt(d.domestic_offices_syrian||0)}</span></div>
        <div class="info-row"><span class="info-label">مكاتب خاصة سوريين</span><span class="info-val">${fmt(d.private_offices_syrian||0)}</span></div>

        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">📊 الديموغرافيا والسكان</span>
        </div>
        <div class="info-row"><span class="info-label">👥 عدد السكان</span><span class="info-val">${fmt(d.population||0)}</span></div>
        <div class="info-row"><span class="info-label">♂️ الذكور</span><span class="info-val">${fmt(d.males||0)}</span></div>
        <div class="info-row"><span class="info-label">♀️ الإناث</span><span class="info-val">${fmt(d.females||0)}</span></div>
        <div class="info-row"><span class="info-label">👶 دون 15 سنة</span><span class="info-val">${fmt(d.pop_under15||0)}</span></div>
        <div class="info-row"><span class="info-label">🧑 15-60 سنة</span><span class="info-val">${fmt(d.pop_15_60||0)}</span></div>
        <div class="info-row"><span class="info-label">👴 60+ سنة</span><span class="info-val">${fmt(d.pop_over60||0)}</span></div>

        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">💼 سوق العمل</span>
        </div>
        <div class="info-row"><span class="info-label">💪 قوة العمل</span><span class="info-val">${fmt(d.labor_force||0)}</span></div>
        <div class="info-row"><span class="info-label">💼 المشتغلون</span><span class="info-val">${fmt(d.employed||0)}</span></div>
        <div class="info-row"><span class="info-label">🚫 المتعطلون</span><span class="info-val">${fmt(d.unemployed||0)}</span></div>
        <div class="info-row"><span class="info-label">📉 معدل البطالة</span><span class="info-val">${fmt(d.unemployment_rate||0)}%</span></div>
        <div class="info-row"><span class="info-label">🧑‍🎓 بطالة الشباب</span><span class="info-val">${fmt(d.youth_unemployment||0)}%</span></div>
        <div class="info-row"><span class="info-label">♂️ مشاركة الذكور</span><span class="info-val">${fmt(d.male_participation||0)}%</span></div>
        <div class="info-row"><span class="info-label">♀️ مشاركة الإناث</span><span class="info-val">${fmt(d.female_participation||0)}%</span></div>
        <div class="info-row"><span class="info-label">🏭 قطاع غير منظم</span><span class="info-val">${fmt(d.unorganized_workers||0)}%</span></div>
        <div style="border-top:1px dashed #ccc;margin:8px 0;padding-top:6px;">
          <span style="font-weight:600;color:#0B5A7A;font-size:11px;">🎓 التأهيل والإرشاد (قدرات)</span>
        </div>
        <div class="info-row"><span class="info-label">🎓 مراكز التأهيل والإرشاد</span><span class="info-val">${fmt(d.vocational_centers||0)}</span></div>
        <div class="info-row"><span class="info-label">👨‍🔧 مستفيدو التأهيل</span><span class="info-val">${fmt(d.vocational_benef||0)}</span></div>

        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">🏥 التأمينات</span>
        </div>
        <div class="info-row"><span class="info-label">🏛️ قطاع عام</span><span class="info-val">${fmt(d.insurance_public||0)}</span></div>
        <div class="info-row"><span class="info-label">🏭 قطاع خاص</span><span class="info-val">${fmt(d.insurance_private||0)}</span></div>
        <div class="info-row"><span class="info-label">📊 اجمالي المستفيدين القائمين على راس عملهم</span><span class="info-val">${fmt(d.insurance_total||0)}</span></div>
        <div class="info-row"><span class="info-label">👴 المتقاعدون</span><span class="info-val">${fmt(d.pensioners||0)}</span></div>

        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">🍞 المساعدات</span>
        </div>
        <div class="info-row"><span class="info-label">🍞 سلل غذائية</span><span class="info-val">${fmt(d.food_baskets||0)}</span></div>
        <div class="info-row"><span class="info-label">💊 مساعدات عينية</span><span class="info-val">${fmt(d.in_kind_aid||0)}</span></div>
        <div class="info-row"><span class="info-label">💵 إعانات مالية</span><span class="info-val">${fmt(d.cash_assistance||0)}</span></div>

        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">🏕️ المخيمات</span>
        </div>
        <div class="info-row"><span class="info-label">🏕️ عدد المخيمات</span><span class="info-val">${fmt(d.camps_count||0)}</span></div>
        <div class="info-row"><span class="info-label">👨‍👩‍👧‍👦 أسر مقيمة</span><span class="info-val">${fmt(d.camp_families||0)}</span></div>

        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">💻 منصة العمل</span>
        </div>
        <div class="info-row"><span class="info-label">👤 مسجّلون</span><span class="info-val">${fmt(d.platform_registered||0)}</span></div>
        <div class="info-row"><span class="info-label">🏢 منشآت</span><span class="info-val">${fmt(d.platform_establishments||0)}</span></div>
        <div class="info-row"><span class="info-label">💼 فرص عمل</span><span class="info-val">${fmt(d.platform_jobs||0)}</span></div>
        <div class="info-row"><span class="info-label">🎓 فرص تدريب</span><span class="info-val">${fmt(d.platform_training||0)}</span></div>
        <div class="info-row"><span class="info-label">🏫 مراكز التأهيل والإرشاد</span><span class="info-val">${fmt(d.vocational_centers||0)}</span></div>
        <div class="info-row"><span class="info-label">👨‍🔧 مستفيدو التأهيل</span><span class="info-val">${fmt(d.vocational_benef||0)}</span></div>

        <div style="border-top:2px solid #0B5A7A;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-green);font-size:12px;">📊 مؤشرات اجتماعية</span>
        </div>
        <div class="info-row"><span class="info-label">💍 زواج القاصرات</span><span class="info-val">${fmt(d.child_marriage_rate||0)}%</span></div>
        <div class="info-row"><span class="info-label">👷 عمل الأطفال</span><span class="info-val">${fmt(d.child_labor_rate||0)}%</span></div>
        <div class="info-row"><span class="info-label">📚 إكمال التعليم الأساسي</span><span class="info-val">${fmt(d.basic_edu_completion||0)}%</span></div>
        <div class="info-row"><span class="info-label">👩‍👧 نساء معيلات</span><span class="info-val">${fmt(d.female_breadwinners||0)}%</span></div>
        <div style="border-top:1px dashed #ccc;margin:8px 0;padding-top:6px;">
          <span style="font-weight:600;color:#0B5A7A;font-size:11px;">🍞 الأمن الغذائي (تقديرات الفقر)</span>
        </div>
        <div class="info-row"><span class="info-label">✅ أسر آمنة غذائياً</span><span class="info-val" style="color:#4F7A63;font-weight:700;">${fmt(d.food_secure_pct||0)}%</span></div>
        <div class="info-row"><span class="info-label">⚠️ أسر ذات هشاشة غذائية</span><span class="info-val" style="color:#B08D57;font-weight:700;">${fmt(d.food_vulnerable_pct||0)}%</span></div>
        <div class="info-row"><span class="info-label">🔴 أسر معدومة غذائياً</span><span class="info-val" style="color:#B5533C;font-weight:700;">${fmt(d.food_insecure_pct||0)}%</span></div>

        ${textFields.achievements && textFields.achievements.length ? `
        <div style="border-top:2px solid #0D8BA8;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-red);font-size:12px;">🏆 أهم الإنجازات</span>
        </div>
        <div style="font-size:11px;color:var(--ink-soft);line-height:1.8;padding:4px 0;">${textFields.achievements.join('<br>• ')}</div>
        ` : ''}

        ${textFields.recommendations && textFields.recommendations.length ? `
        <div style="border-top:2px solid #0D8BA8;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-red);font-size:12px;">📌 أهم التوصيات</span>
        </div>
        <div style="font-size:11px;color:var(--ink-soft);line-height:1.8;padding:4px 0;">${textFields.recommendations.join('<br>• ')}</div>
        ` : ''}

        ${textFields.needs && textFields.needs.length ? `
        <div style="border-top:2px solid #0D8BA8;margin:10px 0;padding-top:8px;">
          <span style="font-weight:700;color:var(--syria-red);font-size:12px;">🧰 الاحتياجات الرئيسية</span>
        </div>
        <div style="font-size:11px;color:var(--ink-soft);line-height:1.8;padding:4px 0;">${textFields.needs.join('<br>• ')}</div>
        ` : ''}
      `;
    }
    popupContent += `</div>`;

    marker.bindPopup(popupContent, { 
      maxWidth: 340,
      minWidth: 280,
      className: 'gov-popup',
      autoPan: true,
      autoPanPadding: [50, 50]
    });

    mapMarkers[gov] = marker;
  });
}

// Initialize map when the map section is opened
function initMapOnDemand(){
  if(typeof L === 'undefined'){
    const mapEl = document.getElementById('govMap');
    if(mapEl && !mapEl.querySelector('.map-unavailable')) {
      mapEl.innerHTML = '<div class="map-unavailable" style="display:flex;align-items:center;justify-content:center;height:100%;color:#666;font-family:Cairo;font-size:14px;flex-direction:column;gap:10px;background:#f9f9f9;border-radius:0 0 18px 18px;"><div style="font-size:36px;">🗺️</div><div>تعذّر تحميل الخريطة — تأكد من الاتصال بالإنترنت</div></div>';
    }
    return;
  }
  if(!map){
    setTimeout(() => {
      initMap();
      updateMapMarkers();
    }, 300);
  } else {
    updateMapMarkers();
  }
}


// =====================
// LOCAL USERS / ROLES / GOOGLE AUTH
// =====================
const AUTH_DB_NAME = 'syriaDashboardAuthDB';
const AUTH_DB_VERSION = 1;
const USERS_STORE = 'users';
const LOGS_STORE = 'auditLogs';
const GOOGLE_CLIENT_ID_KEY = 'govDashboard_googleClientId';
const DEFAULT_LOCAL_USERS = [
  { id:'u-admin', name:'المدير الرئيسي', email:'admin@local', role:'admin', password:'246269', provider:'local', active:true },
  { id:'u-editor', name:'المحرر الافتراضي', email:'editor@local', role:'editor', password:'editor123', provider:'local', active:true },
  { id:'u-viewer', name:'المطلع الافتراضي', email:'viewer@local', role:'viewer', password:'123456', provider:'local', active:true }
];
let currentUser = null;
let authDbPromise = null;
const AUDIT_RETENTION_MS = 7 * 24 * 60 * 60 * 1000;
const AUDIT_CLEANUP_KEY = 'govDashboard_auditCleanupAt';
const AUDIT_REVISION_KEY = 'govDashboard_auditRevision';
const SESSION_REVISION_KEY = 'govDashboard_sessionRevision';
let sessionGuardTimer = null;

function notifyAuditLogChanged(){
  window.dispatchEvent(new CustomEvent('audit-log-changed'));
  try{ localStorage.setItem(AUDIT_REVISION_KEY, String(Date.now())); }catch(e){}
  updateAuditStorageMeter();
}

window.addEventListener('audit-log-changed', () => {
  if(currentUser?.role === 'admin') renderAuditLogs();
});

window.addEventListener('storage', e => {
  if(e.key === AUDIT_REVISION_KEY && currentUser?.role === 'admin') renderAuditLogs();
  if(e.key === SESSION_REVISION_KEY && currentUser) checkCurrentSession();
});

function startSessionGuard(){
  if(sessionGuardTimer) return;
  sessionGuardTimer=setInterval(checkCurrentSession,10000);
  checkCurrentSession();
}

function stopSessionGuard(){
  if(sessionGuardTimer){ clearInterval(sessionGuardTimer); sessionGuardTimer=null; }
}

async function getUserById(id){
  try{
    const db=await openAuthDB();
    return await new Promise((resolve,reject)=>{
      const req=db.transaction(USERS_STORE,'readonly').objectStore(USERS_STORE).get(id);
      req.onsuccess=()=>resolve(req.result||null);
      req.onerror=()=>reject(req.error);
    });
  }catch(error){
    const users=await ensureFallbackUsers();
    return users.find(u=>u.id===id)||null;
  }
  const users=await ensureFallbackUsers();
  return users.find(u=>u.id===id)||null;
}

async function checkCurrentSession(){
  if(!currentUser) return true;
  try{
    const fresh=await getUserById(currentUser.id);
    if(!fresh || fresh.active===false){
      stopSessionGuard();
      alert('تم إخراج هذا المستخدم وتعطيل حسابه من قبل المدير.');
      localStorage.removeItem(SESSION_KEY);
      currentUser=null;
      location.reload();
      return false;
    }
    currentUser=fresh;
    return true;
  }catch(error){
    console.warn('Session status check failed:',error);
    return true;
  }
}

function openAuthDB(){
  if(authDbPromise) return authDbPromise;
  authDbPromise = new Promise((resolve,reject)=>{
    const req = indexedDB.open(AUTH_DB_NAME, AUTH_DB_VERSION);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if(!db.objectStoreNames.contains(USERS_STORE)){
        const s = db.createObjectStore(USERS_STORE,{keyPath:'id'});
        s.createIndex('email','email',{unique:true});
      }
      if(!db.objectStoreNames.contains(LOGS_STORE)){
        const s = db.createObjectStore(LOGS_STORE,{keyPath:'id'});
        s.createIndex('createdAt','createdAt',{unique:false});
      }
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = () => reject(req.error);
  });
  return authDbPromise;
}

async function sha256(text){
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest('SHA-256',data);
  return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('');
}
const FALLBACK_USERS_KEY='govDashboard_localUsers';

function readFallbackUsers(){
  try{return JSON.parse(localStorage.getItem(FALLBACK_USERS_KEY)||'[]');}
  catch(e){return [];}
}
function writeFallbackUsers(users){
  localStorage.setItem(FALLBACK_USERS_KEY,JSON.stringify(users));
}
async function ensureFallbackUsers(){
  let users=readFallbackUsers();
  if(users.length) return users;
  users=await Promise.all(DEFAULT_LOCAL_USERS.map(async item=>({
    id:item.id,name:item.name,email:item.email.toLowerCase(),role:item.role,
    passwordHash:await sha256(item.password),provider:'local',active:true,
    createdAt:new Date().toISOString(),lastLogin:null
  })));
  writeFallbackUsers(users);
  return users;
}
function mergeUsers(primary,secondary){
  const result=[];
  const seen=new Set();
  [...(primary||[]),...(secondary||[])].forEach(user=>{
    const key=String(user.email||user.id||'').toLowerCase();
    if(!key || seen.has(key)) return;
    seen.add(key); result.push(user);
  });
  return result;
}

async function getAllUsers(){
  const fallback=await ensureFallbackUsers();
  try{
    const db = await openAuthDB();
    const indexed=await new Promise((resolve,reject)=>{
      const req=db.transaction(USERS_STORE,'readonly').objectStore(USERS_STORE).getAll();
      req.onsuccess=()=>resolve(req.result||[]);
      req.onerror=()=>reject(req.error);
    });
    return mergeUsers(indexed,fallback);
  }catch(error){
    console.warn('Using LocalStorage users fallback:',error);
    return fallback;
  }
}
async function getUserByEmail(email){
  const normalized=String(email||'').trim().toLowerCase();
  let indexedUser=null;
  try{
    const db=await openAuthDB();
    indexedUser=await new Promise((resolve,reject)=>{
      const idx=db.transaction(USERS_STORE,'readonly').objectStore(USERS_STORE).index('email');
      const req=idx.get(normalized);
      req.onsuccess=()=>resolve(req.result||null);
      req.onerror=()=>reject(req.error);
    });
  }catch(error){
    console.warn('IndexedDB email lookup unavailable:',error);
  }
  if(indexedUser) return indexedUser;
  const users=await ensureFallbackUsers();
  return users.find(u=>String(u.email||'').toLowerCase()===normalized)||null;
}
async function putUser(user){
  let savedInIndexedDB=false;
  try{
    const db=await openAuthDB();
    await new Promise((resolve,reject)=>{
      const req=db.transaction(USERS_STORE,'readwrite').objectStore(USERS_STORE).put(user);
      req.onsuccess=resolve;
      req.onerror=()=>reject(req.error);
    });
    savedInIndexedDB=true;
  }catch(error){
    console.warn('IndexedDB user save unavailable:',error);
  }
  // حفظ نسخة متزامنة حتى يعمل الحساب إذا تغير سياق فتح الملف أو تعذر IndexedDB.
  const users=await ensureFallbackUsers();
  const index=users.findIndex(u=>u.id===user.id || String(u.email).toLowerCase()===String(user.email).toLowerCase());
  if(index>=0) users[index]=user; else users.push(user);
  writeFallbackUsers(users);
  return savedInIndexedDB ? user : user;
}
async function deleteUserDb(id){
  try{
    const db=await openAuthDB();
    await new Promise((resolve,reject)=>{
      const req=db.transaction(USERS_STORE,'readwrite').objectStore(USERS_STORE).delete(id);
      req.onsuccess=resolve;
      req.onerror=()=>reject(req.error);
    });
  }catch(error){
    console.warn('IndexedDB user delete unavailable:',error);
  }
  writeFallbackUsers(readFallbackUsers().filter(u=>u.id!==id));
}
async function seedUsers(){
  try{
    const users=await getAllUsers();
    if(users.length) return;
    for(const item of DEFAULT_LOCAL_USERS){
      await putUser({
        id:item.id,name:item.name,email:item.email.toLowerCase(),role:item.role,
        passwordHash:await sha256(item.password),provider:'local',active:true,
        createdAt:new Date().toISOString(),lastLogin:null
      });
    }
  }catch(error){
    await ensureFallbackUsers();
  }
}
function deviceInfo(){
  const ua=navigator.userAgent||'';
  let browser='متصفح غير معروف';
  if(/Edg\//.test(ua)) browser='Microsoft Edge';
  else if(/Chrome\//.test(ua)) browser='Google Chrome';
  else if(/Firefox\//.test(ua)) browser='Mozilla Firefox';
  else if(/Safari\//.test(ua) && !/Chrome\//.test(ua)) browser='Safari';
  let os='نظام غير معروف';
  if(/Windows NT/.test(ua)) os='Windows';
  else if(/Android/.test(ua)) os='Android';
  else if(/iPhone|iPad|iPod/.test(ua)) os='iOS';
  else if(/Mac OS X/.test(ua)) os='macOS';
  else if(/Linux/.test(ua)) os='Linux';
  return { browser, os, platform:navigator.platform||'', ua };
}
async function addAudit(action,user,details=''){
  try{
    const db=await openAuthDB();
    const d=deviceInfo();
    const item={
      id:crypto.randomUUID ? crypto.randomUUID() : ('log-'+Date.now()+'-'+Math.random()),
      createdAt:new Date().toISOString(),
      action,
      userId:user?.id||null,
      userName:user?.name||'غير معروف',
      email:user?.email||'',
      role:user?.role||'',
      details,
      browser:d.browser, os:d.os, platform:d.platform
    };
    await new Promise((resolve,reject)=>{
      const tx=db.transaction(LOGS_STORE,'readwrite');
      tx.objectStore(LOGS_STORE).put(item);
      tx.oncomplete=resolve;
      tx.onerror=()=>reject(tx.error);
      tx.onabort=()=>reject(tx.error||new Error('Audit transaction aborted'));
    });
    // تحديث فوري في نفس التبويب وجميع التبويبات المفتوحة للصفحة.
    notifyAuditLogChanged();
  }catch(e){ console.warn('Audit log failed',e); }
}

async function cleanupAuditLogsWeekly(){
  try{
    const now=Date.now();
    const last=Number(localStorage.getItem(AUDIT_CLEANUP_KEY)||0);
    if(last && now-last < AUDIT_RETENTION_MS) return 0;

    const db=await openAuthDB();
    const cutoff=now-AUDIT_RETENTION_MS;
    const logs=await getAllLogs();
    const expired=logs.filter(l => new Date(l.createdAt).getTime() < cutoff);

    if(expired.length){
      await new Promise((resolve,reject)=>{
        const tx=db.transaction(LOGS_STORE,'readwrite');
        const store=tx.objectStore(LOGS_STORE);
        expired.forEach(l=>store.delete(l.id));
        tx.oncomplete=resolve;
        tx.onerror=()=>reject(tx.error);
        tx.onabort=()=>reject(tx.error||new Error('Audit cleanup aborted'));
      });
      notifyAuditLogChanged();
    }

    localStorage.setItem(AUDIT_CLEANUP_KEY,String(now));
    const status=document.getElementById('auditRetentionStatus');
    if(status) status.textContent=`التحديث فوري — تُحذف السجلات الأقدم من 7 أيام تلقائيًا. تم تنظيف ${expired.length} سجل.`;
    return expired.length;
  }catch(e){
    console.warn('Audit cleanup failed',e);
    return 0;
  }
}
async function getAllLogs(){
  const db=await openAuthDB();
  return new Promise((resolve,reject)=>{
    const req=db.transaction(LOGS_STORE,'readonly').objectStore(LOGS_STORE).getAll();
    req.onsuccess=()=>resolve((req.result||[]).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)));
    req.onerror=()=>reject(req.error);
  });
}

function formatBytes(bytes){
  if(!bytes) return '0 بايت';
  const units=['بايت','KB','MB','GB'];
  const index=Math.min(Math.floor(Math.log(bytes)/Math.log(1024)),units.length-1);
  const value=bytes/Math.pow(1024,index);
  return `${value.toFixed(index===0?0:2)} ${units[index]}`;
}

async function updateAuditStorageMeter(){
  try{
    const logs=await getAllLogs();
    const usedBytes=new Blob([JSON.stringify(logs)]).size;
    const label=document.getElementById('auditStorageLabel');
    const fill=document.getElementById('auditStorageFill');
    const note=document.getElementById('auditStorageNote');
    if(!label || !fill || !note) return;

    // حد بصري للتنبيه فقط، بينما الحجم المعروض هو الحجم المحسوب فعلياً.
    const visualLimit=5*1024*1024;
    const percentage=Math.min((usedBytes/visualLimit)*100,100);
    label.textContent=formatBytes(usedBytes);
    fill.style.width=`${Math.max(percentage,usedBytes?1:0)}%`;
    fill.classList.toggle('warning',percentage>=60 && percentage<85);
    fill.classList.toggle('danger',percentage>=85);
    note.textContent=`${logs.length} سجل محفوظ محلياً — الحجم التقريبي: ${formatBytes(usedBytes)}`;

    if(navigator.storage?.estimate){
      const estimate=await navigator.storage.estimate();
      if(estimate.quota){
        const totalPercent=((estimate.usage||0)/estimate.quota*100).toFixed(1);
        note.textContent+=` — إجمالي استخدام الموقع: ${totalPercent}% من الحصة المتاحة`;
      }
    }
  }catch(error){
    console.warn('تعذر حساب حجم التخزين المحلي:',error);
    const label=document.getElementById('auditStorageLabel');
    if(label) label.textContent='غير متاح';
  }
}
function roleLabel(role){
  return role==='admin'?'مدير':role==='editor'?'محرر':'مطلع';
}
function roleClass(role){ return role==='admin'?'role-admin':role==='editor'?'role-editor':'role-viewer'; }

async function showLoginError(msg){
  const el=document.getElementById('passwordError');
  el.textContent=msg; el.classList.add('show');
}

async function loginWithPassword(){
  const email=(document.getElementById('loginEmail').value||'').trim().toLowerCase();
  const password=document.getElementById('passwordInput').value||'';
  try{
    await openAuthDB(); await seedUsers();
    if(!email || !password){ return showLoginError('❌ أدخل البريد الإلكتروني وكلمة المرور'); }
    const user=await getUserByEmail(email);
    const valid=user && user.active && user.passwordHash===await sha256(password);
    if(!valid){
      await addAudit('failed_login',{name:email,email,role:''},'بيانات دخول غير صحيحة');
      document.getElementById('passwordInput').value='';
      return showLoginError('❌ البريد أو كلمة المرور غير صحيحة');
    }
    user.lastLogin=new Date().toISOString();
    await putUser(user);
    currentUser=user;
    await addAudit('login',user,'تسجيل دخول بكلمة مرور');
    saveSession(user);
    if(user.role==='admin') showAdminPanel();
    else enterDashboard();
  }catch(err){
    // Some browsers block IndexedDB for file:// pages. Allow the bundled
    // default accounts to authenticate instead of blocking the dashboard.
    console.error('Auth DB unavailable; using local fallback:',err);
    try{
      const fallbackUsers=await getAllUsers();
      const fallback=fallbackUsers.find(u=>u.email===email);
      const valid=fallback && fallback.active && fallback.passwordHash===await sha256(password);
      if(!valid){
        document.getElementById('passwordInput').value='';
        return showLoginError('❌ البريد أو كلمة المرور غير صحيحة');
      }
      currentUser={
        ...fallback,lastLogin:new Date().toISOString()
      };
      await putUser(currentUser);
      saveSession(currentUser);
      if(currentUser.role==='admin') showAdminPanel();
      else enterDashboard();
    }catch(fallbackErr){
      console.error('Local fallback login failed:',fallbackErr);
      showLoginError('❌ تعذر تشغيل تسجيل الدخول المحلي. افتح الملف عبر خادم محلي أو اسمح بالتخزين المحلي.');
    }
  }
}

function saveSession(user){
  localStorage.setItem(SESSION_KEY,JSON.stringify({
    userId:user.id, role:user.role, email:user.email, loginTime:new Date().toISOString()
  }));
}
function applyRoleUI(){
  document.body.classList.remove('readonly');
  const banner=document.getElementById('readOnlyBanner');
  const source=document.querySelector('.data-source-bar');
  const viewerMsg=document.getElementById('viewerMessage');
  if(currentUser?.role==='viewer'){
    document.body.classList.add('readonly');
    banner?.classList.add('show');
    if(source) source.style.display='none';
    if(viewerMsg) viewerMsg.style.display='block';
  } else {
    banner?.classList.remove('show');
    if(source) source.style.display='';
    if(viewerMsg) viewerMsg.style.display='none';
  }
  // Editors can edit data, but only admins can open account administration.
  document.body.dataset.role=currentUser?.role||'';

  // Show the annual-target editor only for authenticated administrators.
  const stratAdminTools=document.getElementById('stratAdminTools');
  if(stratAdminTools){
    stratAdminTools.style.display=currentUser?.role==='admin'?'flex':'none';
  }
  if(currentUser?.role!=='admin'){
    document.getElementById('stratSettingsPanel')?.classList.remove('open');
  }
}
function showAdminPanel(){
  document.body.classList.add('locked');
  document.getElementById('loginBox').style.display='none';
  document.getElementById('adminPanel').style.display='block';
  document.getElementById('adminCurrentUser').textContent=`👤 ${currentUser?.name||'المدير'} — ${roleLabel(currentUser?.role)}`;
  loadGoogleClientIdIntoForm();
  startSessionGuard();
  renderUsers();
  cleanupAuditLogsWeekly().then(()=>renderAuditLogs());
}
function enterIndicatorsFromAdmin(){
  // Keep the administrator authenticated and open the main indicators dashboard.
  document.getElementById('passwordOverlay').style.display='none';
  document.getElementById('adminPanel').style.display='none';
  document.body.classList.remove('locked');
  applyRoleUI();
  startSessionGuard();
  updateLastUpdatedDisplay();
  setTimeout(()=>autoLoadOnStartup(),200);
  setTimeout(()=>initMapOnDemand(),700);
  setTimeout(()=>updateConnectionStatus(),100);
}
function openAdminTab(tab){
  document.querySelectorAll('.admin-tab').forEach(x=>x.classList.toggle('active',x.dataset.tab===tab));
  document.querySelectorAll('.admin-section').forEach(x=>x.classList.toggle('active',x.id==='adminTab-'+tab));
  if(tab==='users') renderUsers();
  if(tab==='logs') renderAuditLogs();
}
function enterDashboard(){
  document.body.classList.remove('locked');
  document.getElementById('passwordOverlay').style.display='none';
  applyRoleUI();
  startSessionGuard();
  try{
    localStorage.setItem(SESSION_KEY,JSON.stringify({
      userId:currentUser?.id, role:currentUser?.role, email:currentUser?.email, loginTime:new Date().toISOString()
    }));
  }catch(e){}
  updateLastUpdatedDisplay();
  setTimeout(()=>autoLoadOnStartup(),500);
  setTimeout(()=>initMapOnDemand(),1200);
  setTimeout(()=>updateConnectionStatus(),100);
}
async function restoreSession(){
  try{
    await openAuthDB(); await seedUsers();
    await cleanupAuditLogsWeekly();
    const saved=localStorage.getItem(SESSION_KEY);
    if(!saved) return false;
    const session=JSON.parse(saved);
    if(!session?.userId) return false;
    const ageDays=(Date.now()-new Date(session.loginTime).getTime())/(1000*60*60*24);
    if(ageDays>1){ localStorage.removeItem(SESSION_KEY); return false; }
    const users=await getAllUsers();
    const user=users.find(u=>u.id===session.userId && u.active);
    if(!user){ localStorage.removeItem(SESSION_KEY); return false; }
    currentUser=user;
    document.body.classList.remove('locked');
    document.getElementById('passwordOverlay').style.display='none';
    applyRoleUI();
    startSessionGuard();
    return true;
  }catch(e){ console.warn('Session restore failed',e); return false; }
}
async function logout(){
  if(currentUser) await addAudit('logout',currentUser,'تسجيل خروج');
  localStorage.removeItem(SESSION_KEY);
  currentUser=null;
  location.reload();
}

// ----- user administration -----
async function renderUsers(){
  if(!currentUser || currentUser.role!=='admin') return;
  const tbody=document.getElementById('usersTableBody');
  if(!tbody) return;
  const users=await getAllUsers();
  tbody.innerHTML=users.map(u=>{
    const canDelete=u.id!==currentUser.id;
    return `<tr>
      <td><b>${escapeHtml(u.name)}</b></td>
      <td>${escapeHtml(u.email)}</td>
      <td><span class="role-badge ${roleClass(u.role)}">${roleLabel(u.role)}</span></td>
      <td>${u.provider==='google'?'Google':'محلي'}</td>
      <td>${u.lastLogin?formatDate(u.lastLogin):'—'}</td>
      <td>
        <button class="btn btn-sm btn-primary" onclick="editUser('${u.id}')">تعديل</button>
        ${u.active===false
          ? `<button class="btn btn-sm btn-primary" onclick="reactivateUser('${u.id}')">تفعيل</button>`
          : `<button class="btn btn-sm btn-warning" onclick="forceLogoutUser('${u.id}')">إخراج المستخدم</button>`}
        ${canDelete?`<button class="btn btn-sm btn-danger" onclick="removeUser('${u.id}')">حذف</button>`:''}
      </td>
    </tr>`;
  }).join('');
}
function escapeHtml(v){
  return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function formatDate(iso){
  try{return new Date(iso).toLocaleString('ar-SY',{dateStyle:'short',timeStyle:'short'});}catch{return iso;}
}
async function editUser(id){
  const users=await getAllUsers(); const u=users.find(x=>x.id===id); if(!u) return;
  document.getElementById('userIdInput').value=u.id;
  document.getElementById('userNameInput').value=u.name;
  document.getElementById('userEmailInput').value=u.email;
  document.getElementById('userRoleInput').value=u.role;
  document.getElementById('userPasswordInput').value='';
  showUserMsg('يمكن تعديل الاسم والدور أو تعيين كلمة مرور جديدة.','success');
}
function resetUserForm(){
  ['userIdInput','userNameInput','userEmailInput','userPasswordInput'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('userRoleInput').value='editor';
  document.getElementById('userFormMsg').className='admin-message';
}
function showUserMsg(msg,type){
  const el=document.getElementById('userFormMsg'); el.textContent=msg; el.className='admin-message show '+type;
}

async function syncUsersStorage(){
  if(!currentUser || currentUser.role!=='admin') return;
  const button=document.querySelector('.btn-sync-users');
  if(button){button.disabled=true;button.textContent='⏳ جارٍ المزامنة...';}
  try{
    const fallbackUsers=readFallbackUsers();
    let indexedUsers=[];
    try{
      const db=await openAuthDB();
      indexedUsers=await new Promise((resolve,reject)=>{
        const req=db.transaction(USERS_STORE,'readonly').objectStore(USERS_STORE).getAll();
        req.onsuccess=()=>resolve(req.result||[]);
        req.onerror=()=>reject(req.error);
      });
    }catch(error){
      console.warn('IndexedDB unavailable during sync:',error);
    }

    const merged=mergeUsers(indexedUsers,fallbackUsers);
    if(!merged.length) await ensureFallbackUsers();
    const finalUsers=merged.length?merged:readFallbackUsers();
    writeFallbackUsers(finalUsers);

    for(const user of finalUsers){
      try{ await putUser(user); }catch(error){ console.warn('Could not sync user:',user.email,error); }
    }

    await renderUsers();
    showUserMsg(`✅ تمت المزامنة بنجاح: ${finalUsers.length} حساب. تم تحديث IndexedDB وLocalStorage.`,`success`);
  }catch(error){
    console.error('Users sync failed:',error);
    showUserMsg('❌ تعذرت مزامنة الحسابات. جرّب إعادة فتح الصفحة أو تشغيلها عبر خادم محلي.','error');
  }finally{
    if(button){button.disabled=false;button.textContent='🔄 تحديث ومزامنة الحسابات';}
  }
}
async function saveUserFromForm(e){
  e.preventDefault();
  try{
    const id=document.getElementById('userIdInput').value.trim();
    const name=document.getElementById('userNameInput').value.trim();
    const email=document.getElementById('userEmailInput').value.trim().toLowerCase();
    const password=document.getElementById('userPasswordInput').value;
    const role=document.getElementById('userRoleInput').value;
    if(!name||!email) return false;
    const existing=await getUserByEmail(email);
    if(existing && existing.id!==id) return showUserMsg('❌ البريد مستخدم من قبل.','error');
    let user;
    if(id){
      const users=await getAllUsers(); user=users.find(x=>x.id===id);
      if(!user) return false;
      user.name=name; user.email=email; user.role=role;
      if(password) user.passwordHash=await sha256(password);
      await putUser(user); await addAudit('user_update',currentUser,`تعديل المستخدم ${email}`);
      if(currentUser.id===id){currentUser=user; applyRoleUI();}
      showUserMsg('✅ تم تعديل المستخدم.','success');
    }else{
      if(!password || password.length<6) return showUserMsg('❌ كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل.','error');
      user={id:crypto.randomUUID?crypto.randomUUID():'u-'+Date.now(),name,email,role,
        passwordHash:await sha256(password),provider:'local',active:true,createdAt:new Date().toISOString(),lastLogin:null};
      await putUser(user); await addAudit('user_create',currentUser,`إضافة المستخدم ${email} بدور ${roleLabel(role)}`);
      showUserMsg('✅ تم إنشاء المستخدم.','success');
    }
    resetUserForm(); await renderUsers();
  }catch(err){ console.error(err); showUserMsg('❌ تعذر حفظ المستخدم.','error'); }
  return false;
}
async function forceLogoutUser(id){
  if(!currentUser || currentUser.role!=='admin') return;
  if(id===currentUser.id) return showUserMsg('لا يمكن للمدير إخراج نفسه من الجلسة الحالية.','error');
  const user=await getUserById(id);
  if(!user) return;
  if(!confirm(`هل تريد إخراج المستخدم ${user.name} وتعطيل حسابه؟`)) return;
  user.active=false;
  user.disabledAt=new Date().toISOString();
  user.disabledBy=currentUser.id;
  await putUser(user);
  await addAudit('force_logout',currentUser,`إخراج وتعطيل المستخدم ${user.email}`);
  try{ localStorage.setItem(SESSION_REVISION_KEY,String(Date.now())); }catch(e){}
  await renderUsers();
  showUserMsg(`✅ تم إخراج المستخدم ${user.name} وتعطيل حسابه. سيُغلق عند التحقق الدوري التالي.`,`success`);
}

async function reactivateUser(id){
  if(!currentUser || currentUser.role!=='admin') return;
  const user=await getUserById(id);
  if(!user) return;
  user.active=true;
  delete user.disabledAt;
  delete user.disabledBy;
  await putUser(user);
  await addAudit('user_reactivate',currentUser,`إعادة تفعيل المستخدم ${user.email}`);
  await renderUsers();
  showUserMsg(`✅ تم تفعيل المستخدم ${user.name}.`,`success`);
}

async function removeUser(id){
  if(!confirm('هل تريد حذف هذا المستخدم؟')) return;
  const users=await getAllUsers(); const u=users.find(x=>x.id===id); if(!u) return;
  await deleteUserDb(id); await addAudit('user_delete',currentUser,`حذف المستخدم ${u.email}`); await renderUsers();
}

// ----- audit log viewer -----
async function renderAuditLogs(){
  const body=document.getElementById('logsTableBody'); if(!body || !currentUser) return;
  const search=(document.getElementById('logSearch')?.value||'').toLowerCase();
  const action=document.getElementById('logAction')?.value||'';
  const logs=(await getAllLogs()).filter(l=>{
    const hay=(l.userName+' '+l.email).toLowerCase();
    return (!search||hay.includes(search)) && (!action||l.action===action);
  }).slice(0,500);
  body.innerHTML=logs.map(l=>`<tr>
    <td>${formatDate(l.createdAt)}</td>
    <td><b>${escapeHtml(l.userName)}</b><br><span class="device-cell">${escapeHtml(l.email)}</span></td>
    <td>${escapeHtml(l.action)}${l.details?`<br><span class="device-cell">${escapeHtml(l.details)}</span>`:''}</td>
    <td><div class="device-cell">🖥️ ${escapeHtml(l.os)}<br>🌐 ${escapeHtml(l.browser)}<br>⌨️ ${escapeHtml(l.platform)}</div></td>
  </tr>`).join('') || `<tr><td colspan="4" style="text-align:center;color:var(--ink-soft)">لا توجد سجلات</td></tr>`;
  await updateAuditStorageMeter();
}
async function exportAuditLogs(){
  const logs=await getAllLogs();
  const rows=[['التاريخ والوقت','المستخدم','البريد','الدور','العملية','التفاصيل','نظام التشغيل','المتصفح','المنصة'],
    ...logs.map(l=>[l.createdAt,l.userName,l.email,l.role,l.action,l.details,l.os,l.browser,l.platform])];
  const csv='\uFEFF'+rows.map(r=>r.map(v=>`"${String(v??'').replace(/"/g,'""')}"`).join(',')).join('\n');
  const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'})); a.download='سجل_دخول_لوحة_المؤشرات.csv'; a.click();
}

// ----- Google Identity Services -----
function getGoogleClientId(){ return localStorage.getItem(GOOGLE_CLIENT_ID_KEY)||''; }
function loadGoogleClientIdIntoForm(){
  const el=document.getElementById('googleClientIdInput'); if(el) el.value=getGoogleClientId();
}
function saveGoogleClientId(){
  const id=(document.getElementById('googleClientIdInput').value||'').trim();
  const msg=document.getElementById('googleConfigMsg');
  if(!/\.apps\.googleusercontent\.com$/.test(id)){msg.textContent='❌ أدخل Google OAuth Client ID صحيحاً.';msg.className='admin-message show error';return;}
  localStorage.setItem(GOOGLE_CLIENT_ID_KEY,id);
  msg.textContent='✅ تم الحفظ. سيظهر زر Google في شاشة الدخول عند إعادة فتح الصفحة.';
  msg.className='admin-message show success';
}
function decodeJwtPayload(token){
  const part=token.split('.')[1]; if(!part) throw new Error('Bad JWT');
  const b64=part.replace(/-/g,'+').replace(/_/g,'/');
  return JSON.parse(decodeURIComponent(atob(b64).split('').map(c=>'%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)).join('')));
}
async function handleGoogleCredential(response){
  try{
    const p=decodeJwtPayload(response.credential);
    const clientId=getGoogleClientId();
    if(clientId && p.aud!==clientId) throw new Error('Invalid audience');
    if(p.iss!=='https://accounts.google.com' && p.iss!=='accounts.google.com') throw new Error('Invalid issuer');
    await openAuthDB(); await seedUsers();
    const googleEmail=p.email.toLowerCase();
    let user=await getUserByEmail(googleEmail);
    if(!user){
      user={id:'g-'+p.sub,name:p.name||p.email.split('@')[0],email:googleEmail,
        role:'viewer',passwordHash:null,provider:'google',googleSub:p.sub,active:true,
        createdAt:new Date().toISOString(),lastLogin:null};
      await putUser(user);
      await addAudit('user_create',user,'إنشاء مستخدم Google تلقائياً بدور مطلع');
    }else if(!user.active){
      await addAudit('failed_login',user,'حساب Google معطل');
      return showLoginError('❌ هذا الحساب معطل من المدير');
    }else if(user.provider!=='google'){
      // لا نسمح لحساب Google بانتحال حساب محلي أو وراثة صلاحياته.
      await addAudit('failed_login',{...user,provider:'google'},'محاولة دخول Google لبريد مرتبط بحساب محلي');
      return showLoginError('❌ هذا البريد مرتبط بحساب محلي. استخدم كلمة المرور الخاصة به.');
    }else{
      // حسابات Google تبقى دائماً في وضع القراءة فقط.
      user.role='viewer';
      user.googleSub=p.sub;
      user.name=p.name||user.name;
    }
    user.lastLogin=new Date().toISOString(); await putUser(user);
    currentUser=user; saveSession(user);
    await addAudit('google_login',user,'تسجيل دخول بواسطة Google');
    if(user.role==='admin') showAdminPanel(); else enterDashboard();
  }catch(e){
    console.error('Google sign-in error',e);
    showLoginError('❌ تعذر التحقق من حساب Google');
  }
}
function initGoogleSignIn(){
  const holder=document.getElementById('googleSignIn');
  const hint=document.getElementById('googleHint');
  if(!holder) return;
  const clientId=getGoogleClientId();
  if(!clientId){
    holder.innerHTML='';
    if(hint) hint.style.display='block';
    return;
  }
  if(!window.google || !google.accounts || !google.accounts.id){
    setTimeout(initGoogleSignIn,500); return;
  }
  if(hint) hint.style.display='none';
  holder.innerHTML='';
  google.accounts.id.initialize({client_id:clientId,callback:handleGoogleCredential});
  google.accounts.id.renderButton(holder,{theme:'outline',size:'large',shape:'rectangular',width:300,text:'signin_with',locale:'ar'});
}

// Helpers for old code compatibility
function selectUserType(type) {}
function showChangePw() {}
function hideChangePw() {}
function changePassword() {}

// Keep Enter key support
document.addEventListener('keydown',e=>{
  if(e.key==='Enter' && document.body.classList.contains('locked') &&
     document.getElementById('loginBox').style.display!=='none') loginWithPassword();
});
// =====================
// DIAGNOSTICS & COMPATIBILITY
// =====================
function isFileProtocol(){
  return window.location.protocol === 'file:';
}

function showDiagnostic(message, actionsHtml){
  const panel = document.getElementById('diagnosticPanel');
  const msg = document.getElementById('diagMessage');
  const acts = document.getElementById('diagActions');
  if(!panel || !msg) return;
  msg.innerHTML = message;
  if(acts && actionsHtml) acts.innerHTML = actionsHtml;
  panel.style.display = 'block';
}

function hideDiagnostic(){
  const panel = document.getElementById('diagnosticPanel');
  if(panel) panel.style.display = 'none';
}

function checkFileProtocol(){
  if(isFileProtocol()){
    const warn = document.getElementById('fileProtocolWarning');
    if(warn) warn.style.display = 'block';
    return true;
  }
  return false;
}

function generateSampleData(){
  // Generate minimal sample data so the dashboard shows something
  const sample = [];
  const months = ["كانون الثاني","شباط","آذار"];
  ALL_GOVS.forEach((gov, i) => {
    months.forEach(m => {
      sample.push({
        gov: gov,
        month: m,
        year: 2025,
        population: 500000 + i * 50000,
        males: 250000 + i * 25000,
        females: 250000 + i * 25000,
        disabled_cards: Math.floor(Math.random() * 500),
        elderly_homes: Math.floor(Math.random() * 10),
        elderly_benef: Math.floor(Math.random() * 200),
        orphan_homes: Math.floor(Math.random() * 5),
        sponsor_internal: Math.floor(Math.random() * 100),
        sponsor_external: Math.floor(Math.random() * 50),
        ngo_active: Math.floor(Math.random() * 20),
        ngo_total: Math.floor(Math.random() * 50),
        juvenile_inst: Math.floor(Math.random() * 3),
        juvenile_inst_active: Math.floor(Math.random() * 2),
        juvenile_inmates: Math.floor(Math.random() * 30),
        rural_dev_active: Math.floor(Math.random() * 10),
        rural_dev_benef: Math.floor(Math.random() * 500),
        rural_ind_active: Math.floor(Math.random() * 8),
        rural_ind_benef: Math.floor(Math.random() * 300),
        insp_total: Math.floor(Math.random() * 100),
        violations: Math.floor(Math.random() * 20),
        work_permits_new: Math.floor(Math.random() * 50),
        work_permits_renew: Math.floor(Math.random() * 80),
        employed: Math.floor(Math.random() * 200000),
        unemployed: Math.floor(Math.random() * 50000),
        unemployment_rate: (5 + Math.random() * 20).toFixed(1),
        insurance_public: Math.floor(Math.random() * 50000),
        insurance_private: Math.floor(Math.random() * 30000),
        insurance_total: Math.floor(Math.random() * 80000),
        food_baskets: Math.floor(Math.random() * 1000),
        cash_assistance: Math.floor(Math.random() * 500),
        in_kind_aid: Math.floor(Math.random() * 300),
        camps_count: Math.floor(Math.random() * 5),
        camp_families: Math.floor(Math.random() * 200),
        platform_registered: Math.floor(Math.random() * 1000),
        platform_establishments: Math.floor(Math.random() * 100),
        platform_jobs: Math.floor(Math.random() * 200),
        platform_training: Math.floor(Math.random() * 150),
        vocational_centers: Math.floor(Math.random() * 5),
        vocational_benef: Math.floor(Math.random() * 200),
        pop_under15: Math.floor(Math.random() * 200000),
        pop_15_60: Math.floor(Math.random() * 250000),
        pop_over60: Math.floor(Math.random() * 50000),
        labor_force: (0.5 + Math.random() * 0.5).toFixed(2),
        male_unemployment: (3 + Math.random() * 15).toFixed(1),
        female_unemployment: (8 + Math.random() * 25).toFixed(1),
        youth_unemployment: (10 + Math.random() * 30).toFixed(1),
        male_participation: (40 + Math.random() * 30).toFixed(1),
        female_participation: (10 + Math.random() * 20).toFixed(1),
        unorganized_workers: (30 + Math.random() * 40).toFixed(1),
        child_marriage_rate: (5 + Math.random() * 15).toFixed(1),
        child_labor_rate: (2 + Math.random() * 10).toFixed(1),
        basic_edu_completion: (60 + Math.random() * 30).toFixed(1),
        female_breadwinners: (10 + Math.random() * 20).toFixed(1),
        food_secure_pct: (30 + Math.random() * 40).toFixed(1),
        food_vulnerable_pct: (20 + Math.random() * 30).toFixed(1),
        food_insecure_pct: (5 + Math.random() * 25).toFixed(1),
        achievements: "إنجاز تجريبي",
        recommendations: "توصية تجريبية",
        needs: "احتياج تجريبي",
        monthly_report: "تقرير تجريبي"
      });
    });
  });
  return sample;
}

function loadSampleData(){
  const sample = generateSampleData();
  ALL_DATA = sample;
  selectedMonths = new Set([...new Set(ALL_DATA.map(d => d.month))]);
  selectedMonthChips.clear();

  const statusEl = document.getElementById('dataStatus');
  if(statusEl){
    statusEl.textContent = `بيانات تجريبية: ${sample.length} سجل`;
    statusEl.className = 'status-badge status-ok';
  }

  syncMonthChipsWithData();
  renderAll();
  updateLastUpdatedDisplay();

  showDiagnostic(
    '✅ تم تحميل <strong>بيانات تجريبية</strong> لأغراض العرض. هذه البيانات وهمية — ارفع ملف CSV حقيقي للحصول على نتائج دقيقة.',
    '<button class="btn-fallback" onclick="showUploadModal()">📁 رفع ملف CSV حقيقي</button>'
  );
}

// =====================
// OFFLINE SUPPORT & LAST UPDATED
// =====================
const STORAGE_KEY = 'govDashboard_data';
const STORAGE_TIMESTAMP_KEY = 'govDashboard_timestamp';
const STORAGE_VERSION_KEY = 'govDashboard_version';
const SESSION_KEY = 'govDashboard_session';
const DATA_VERSION = '1.0'; // bump when schema changes

function updateConnectionStatus(){
  const offlineBar = document.getElementById('offlineBar');
  const onlineBar = document.getElementById('onlineBar');
  const refreshBtn = document.getElementById('refreshBtn');
  const lastBadge = document.getElementById('lastUpdatedBadge');

  if(navigator.onLine){
    if(offlineBar) offlineBar.classList.remove('show');
    // Only flash online bar briefly if we were offline
    if(onlineBar){
      onlineBar.classList.add('show');
      setTimeout(() => { onlineBar.classList.remove('show'); }, 5000);
    }
    if(refreshBtn) refreshBtn.disabled = false;
  } else {
    if(offlineBar) offlineBar.classList.add('show');
    if(onlineBar) onlineBar.classList.remove('show');
    if(refreshBtn) refreshBtn.disabled = true;
  }
  // Always show last updated badge if we have data
  if(ALL_DATA && ALL_DATA.length > 0 && lastBadge){
    lastBadge.style.display = 'inline-flex';
  }
}

function saveDataToLocalStorage(){
  if(!ALL_DATA || ALL_DATA.length === 0) return;
  try {
    const payload = {
      version: DATA_VERSION,
      data: ALL_DATA,
      timestamp: new Date().toISOString(),
      recordCount: ALL_DATA.length
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    updateLastUpdatedDisplay();
    console.log('✅ Data saved to localStorage:', ALL_DATA.length, 'records');
  } catch(e) {
    console.warn('Failed to save to localStorage:', e);
  }
}

function loadDataFromLocalStorage(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return false;
    const payload = JSON.parse(raw);
    if(!payload || !payload.data || payload.version !== DATA_VERSION){
      console.log('localStorage data version mismatch or empty');
      return false;
    }
    ALL_DATA = payload.data;
    selectedMonths = new Set([...new Set(ALL_DATA.map(d => d.month))]);
    selectedMonthChips.clear();

    const statusEl = document.getElementById('dataStatus');
    if(statusEl){
      const ts = payload.timestamp ? new Date(payload.timestamp).toLocaleString('ar-SY') : 'غير معروف';
      statusEl.textContent = `تم التحميل من الذاكرة المحلية: ${ALL_DATA.length} سجل`;
      statusEl.className = 'status-badge status-ok';
    }

    syncMonthChipsWithData();
    renderAll();
    updateLastUpdatedDisplay(payload.timestamp);
    updateConnectionStatus();
    console.log('✅ Data loaded from localStorage:', ALL_DATA.length, 'records');
    return true;
  } catch(e) {
    console.warn('Failed to load from localStorage:', e);
    return false;
  }
}

function updateLastUpdatedDisplay(isoTimestamp){
  const badge = document.getElementById('lastUpdatedBadge');
  const text = document.getElementById('lastUpdatedText');
  const panel = document.getElementById('lastUpdatedPanel');
  const display = document.getElementById('lastUpdatedDisplay');
  const dot = document.getElementById('lastUpdatedDot');
  const label = document.getElementById('lastUpdatedLabel');

  let ts = isoTimestamp;
  if(!ts){
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if(raw) ts = JSON.parse(raw).timestamp;
    } catch(e){}
  }

  if(ts){
    const date = new Date(ts);
    const formatted = date.toLocaleString('ar-SY', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });

    // Update old badge (inside data-source-bar, for admin)
    if(badge && text){
      text.textContent = formatted;
      badge.style.display = 'inline-flex';
    }

    // Update new visible panel (for ALL users including viewer)
    if(panel && display){
      display.textContent = formatted;
      panel.style.display = 'block';
    }

    // If data is older than 7 days, show warning
    const daysOld = (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24);
    if(daysOld > 7){
      if(badge) badge.classList.add('offline-badge');
      if(text) text.innerHTML = formatted + ' <span style="font-size:10px;margin-inline-start:4px;">(قديم)</span>';
      if(dot) dot.style.background = '#B5533C';
      if(label){
        label.textContent = 'بيانات قديمة';
        label.style.color = '#B5533C';
      }
      if(panel) panel.querySelector('div').style.borderColor = '#B5533C';
    } else {
      if(badge) badge.classList.remove('offline-badge');
      if(dot) dot.style.background = '#4F7A63';
      if(label){
        label.textContent = navigator.onLine ? 'بيانات محدّثة' : 'بيانات محلية';
        label.style.color = 'var(--ink-soft)';
      }
      if(panel) panel.querySelector('div').style.borderColor = '#0D8BA8';
    }
  } else {
    if(badge) badge.style.display = 'none';
    if(panel) panel.style.display = 'none';
  }
}

function clearSavedData(){
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(STORAGE_TIMESTAMP_KEY);
  ALL_DATA = [];
  const badge = document.getElementById('lastUpdatedBadge');
  if(badge) badge.style.display = 'none';
  const statusEl = document.getElementById('dataStatus');
  if(statusEl){
    statusEl.textContent = 'تم مسح البيانات المحفوظة';
    statusEl.className = 'status-badge status-loading';
  }
  renderAll();
}

// Override processCSVData to auto-save
const originalProcessCSVData = processCSVData;
processCSVData = function(csvText){
  const result = originalProcessCSVData(csvText);
  if(result){
    saveDataToLocalStorage();
  }
  return result;
};

// Override loadFromSheet to handle offline
const originalLoadFromSheet = loadFromSheet;
loadFromSheet = async function(){
  const statusEl = document.getElementById('dataStatus');

  // file:// does not necessarily block a published Google Sheet CSV request.
  // Use local data only as a fallback; still allow the user to refresh from the sheet.
  if(!navigator.onLine){
    if(statusEl){
      statusEl.textContent = '⚠️ لا يوجد إنترنت — جاري تحميل البيانات المحفوظة...';
      statusEl.className = 'status-badge status-loading';
    }
    const loaded = loadDataFromLocalStorage();
    if(!loaded){
      if(statusEl){
        statusEl.textContent = '❌ لا توجد بيانات محفوظة — يرجى الاتصال بالإنترنت';
        statusEl.className = 'status-badge status-error';
      }
      showDiagnostic(
        '❌ لا يوجد إنترنت ولا توجد بيانات محفوظة محلياً.<br>يرجى الاتصال بالإنترنت أو رفع ملف CSV يدوياً.',
        '<button class="btn-fallback" onclick="showUploadModal()">📁 رفع ملف CSV</button>'
      );
    }
    return;
  }

  // Online: this is a user-initiated refresh, so always request the latest sheet data.
  hideDiagnostic();
  await originalLoadFromSheet();
  // Original function calls processCSVData which now auto-saves
};

// Auto-load on startup (after login)
function autoLoadOnStartup(){
  const statusEl = document.getElementById('dataStatus');

  // 1. Always try localStorage first — fastest and most reliable
  const loaded = loadDataFromLocalStorage();
  if(loaded){
    if(statusEl){
      statusEl.textContent = '✅ تم التحميل من الذاكرة المحلية';
      statusEl.className = 'status-badge status-ok';
    }
    return;
  }

  // 2. Fall back to inline CSV data built into the file
  if(statusEl){
    statusEl.textContent = '⏳ جاري تحميل البيانات المضمنة...';
    statusEl.className = 'status-badge status-loading';
  }
  const success = processCSVData(INLINE_CSV_DATA);
  if(success){
    saveDataToLocalStorage();
    if(statusEl){
      statusEl.textContent = '✅ تم تحميل البيانات المضمنة';
      statusEl.className = 'status-badge status-ok';
    }
    return;
  }

  // 3. Nothing worked — prompt user to upload
  if(statusEl){
    statusEl.textContent = '⚠️ لا توجد بيانات — ارفع ملف CSV';
    statusEl.className = 'status-badge status-error';
  }
  showDiagnostic(
    'ℹ️ لم يتم العثور على بيانات. ارفع ملف CSV أو اضغط زر التحديث لجلب البيانات من الرابط.',
    '<button class="btn-fallback" onclick="showUploadModal()">📁 رفع ملف CSV</button> <button class="btn-fallback" onclick="loadSampleData()" style="background:linear-gradient(135deg,#1565c0,#0d47a1);margin-inline-start:8px;">🔬 بيانات تجريبية</button>'
  );
}

// ═══════════════════════════════════════════════════════════════
// STRATEGIC PLAN ENGINE — محرك الخطة الاستراتيجية
// ═══════════════════════════════════════════════════════════════

const STRAT_STORAGE_KEY = 'syria_strategic_targets_v1';

// Default annual targets — editable by admin
const DEFAULT_STRATEGIC_TARGETS = {
  disability: {
    label: 'رعاية ذوي الإعاقة',
    icon: '🦽',
    axis: 'المحور الاجتماعي',
    field: 'disabled_cards',
    target: 15000,
    unit: 'بطاقة',
    note: 'عدد بطاقات الإعاقة الجديدة المستهدفة سنوياً'
  },
  disability_benef: {
    label: 'مستفيدو معاهد الإعاقة',
    icon: '🏫',
    axis: 'المحور الاجتماعي',
    field: 'disability_benef',
    target: 5000,
    unit: 'طالب',
    note: 'عدد الطلاب المسجلين في معاهد ذوي الإعاقة'
  },
  vocational: {
    label: 'التأهيل المهني',
    icon: '🔧',
    axis: 'محور التشغيل',
    field: 'vocational_benef',
    target: 8000,
    unit: 'مستفيد',
    note: 'مستفيدو مراكز التأهيل المهني'
  },
  elderly: {
    label: 'رعاية كبار السن',
    icon: '👴',
    axis: 'المحور الاجتماعي',
    field: 'elderly_benef',
    target: 3000,
    unit: 'مستفيد',
    note: 'المستفيدون من دور رعاية المسنين'
  },
  orphans: {
    label: 'كفالة الأيتام',
    icon: '🏠',
    axis: 'المحور الاجتماعي',
    field: 'sponsor_external',
    target: 5000,
    unit: 'طفل',
    note: 'عدد الأيتام المستفيدين من الكفالة الخارجية'
  },
  food_aid: {
    label: 'السلال الغذائية',
    icon: '🍞',
    axis: 'محور الإغاثة',
    field: 'food_baskets',
    target: 50000,
    unit: 'سلة',
    note: 'عدد السلل الغذائية الموزعة سنوياً'
  },
  cash_aid: {
    label: 'الإعانات المالية',
    icon: '💰',
    axis: 'محور الإغاثة',
    field: 'cash_assistance',
    target: 20000,
    unit: 'مستفيد',
    note: 'عدد المستفيدين من الإعانات المالية'
  },
  rural_dev: {
    label: 'التنمية الريفية',
    icon: '🌾',
    axis: 'محور التنمية',
    field: 'rural_dev_benef',
    target: 10000,
    unit: 'مستفيد',
    note: 'مستفيدو مراكز التنمية الريفية'
  },
  rural_ind: {
    label: 'الصناعات الريفية',
    icon: '🏭',
    axis: 'محور التنمية',
    field: 'rural_ind_benef',
    target: 5000,
    unit: 'مستفيد',
    note: 'مستفيدو وحدات الصناعات الريفية'
  },
  insurance_new: {
    label: 'التسجيل بالتأمينات',
    icon: '🏥',
    axis: 'محور العمل',
    field: 'new_workers_insp',
    target: 10000,
    unit: 'عامل',
    note: 'عمال جدد تم تسجيلهم عبر الزيارات التفتيشية'
  },
  inspection: {
    label: 'الزيارات التفتيشية',
    icon: '🔍',
    axis: 'محور العمل',
    field: 'insp_total',
    target: 5000,
    unit: 'زيارة',
    note: 'إجمالي الزيارات التفتيشية على المنشآت'
  },
  platform: {
    label: 'منصة سوق العمل',
    icon: '💻',
    axis: 'محور التشغيل',
    field: 'platform_registered',
    target: 30000,
    unit: 'مسجّل',
    note: 'عدد المسجلين في منصة سوق العمل الرقمية'
  },
  platform_jobs: {
    label: 'فرص العمل المنشورة',
    icon: '📋',
    axis: 'محور التشغيل',
    field: 'platform_jobs',
    target: 5000,
    unit: 'فرصة',
    note: 'عدد فرص العمل المتاحة على المنصة'
  },
  ngo_licensed: {
    label: 'المنظمات المشهرة',
    icon: '🤝',
    axis: 'محور المجتمع المدني',
    field: 'ngo_new_pct',
    target: 200,
    unit: 'منظمة',
    note: 'عدد المنظمات غير الحكومية المشهرة'
  }
};

// Load saved targets or use defaults
function loadStrategicTargets(){
  try {
    const saved = localStorage.getItem(STRAT_STORAGE_KEY);
    if(saved){
      const parsed = JSON.parse(saved);
      // Merge with defaults (in case new targets were added)
      Object.keys(DEFAULT_STRATEGIC_TARGETS).forEach(k => {
        if(!parsed[k]) parsed[k] = {...DEFAULT_STRATEGIC_TARGETS[k]};
        else parsed[k] = {...DEFAULT_STRATEGIC_TARGETS[k], ...parsed[k]};
      });
      return parsed;
    }
  } catch(e){}
  return JSON.parse(JSON.stringify(DEFAULT_STRATEGIC_TARGETS));
}

function saveStrategicTargets(){
  const targets = loadStrategicTargets();
  // Read current values from inputs
  Object.keys(targets).forEach(k => {
    const inp = document.getElementById('strat-inp-' + k);
    if(inp){
      const val = parseInt(inp.value.replace(/,/g, ''));
      if(!isNaN(val) && val > 0) targets[k].target = val;
    }
  });
  localStorage.setItem(STRAT_STORAGE_KEY, JSON.stringify(targets));
  // Show save message
  const msg = document.getElementById('stratSaveMsg');
  if(msg){ msg.style.display='inline'; setTimeout(()=>{ msg.style.display='none'; }, 2500); }
  // Re-render
  renderStrategicCompass();
}

function toggleStrategicCompass(){
  const el = document.getElementById('strategicCompass');
  if(el) el.classList.toggle('open');
}

function toggleStratSettings(btn){
  const panel = document.getElementById('stratSettingsPanel');
  if(!panel) return;
  panel.classList.toggle('open');
  btn.classList.toggle('active');
}

// Calculate status from percentage
function getStratStatus(pct){
  if(pct === null) return 'no-data';
  if(pct >= 85) return 'on-track';
  if(pct >= 50) return 'warning';
  return 'off-track';
}

function getStratStatusLabel(status){
  const labels = {
    'on-track': '✅ على المسار',
    'warning': '⚠️ يحتاج متابعة',
    'off-track': '🔴 خارج الهدف',
    'no-data': '— لا بيانات'
  };
  return labels[status] || '—';
}

// Main render function for the strategic compass
function renderStrategicCompass(){
  const targets = loadStrategicTargets();
  const data = filtered();

  // Compute current actual values (sum across all filtered data)
  const actuals = {};
  Object.keys(targets).forEach(k => {
    const field = targets[k].field;
    const total = data.reduce((acc, row) => acc + (parseFloat(row[field]) || 0), 0);
    actuals[k] = total;
  });

  // Calculate statuses
  let onTrack = 0, warning = 0, offTrack = 0, noData = 0;
  const percentages = [];

  Object.keys(targets).forEach(k => {
    const actual = actuals[k];
    const target = targets[k].target;
    if(!actual || actual === 0){
      noData++;
      return;
    }
    const pct = Math.round((actual / target) * 100);
    percentages.push(Math.min(pct, 100));
    const status = getStratStatus(pct);
    if(status === 'on-track') onTrack++;
    else if(status === 'warning') warning++;
    else if(status === 'off-track') offTrack++;
  });

  const avgPct = percentages.length > 0
    ? Math.round(percentages.reduce((a,b) => a+b, 0) / percentages.length)
    : null;

  // Update summary cards
  const el = id => document.getElementById(id);
  if(el('stratOnTrackCount')) el('stratOnTrackCount').textContent = onTrack;
  if(el('stratWarningCount')) el('stratWarningCount').textContent = warning;
  if(el('stratOffTrackCount')) el('stratOffTrackCount').textContent = offTrack;
  if(el('stratAvgPct')) el('stratAvgPct').textContent = avgPct !== null ? avgPct + '%' : '—';

  // Quarterly progress — infer from month names in data
  const Q_MONTHS = {
    q1: ['كانون الثاني','شباط','آذار'],
    q2: ['نيسان','أيار','حزيران'],
    q3: ['تموز','آب','أيلول'],
    q4: ['تشرين الأول','تشرين الثاني','كانون الأول']
  };
  ['q1','q2','q3','q4'].forEach(q => {
    const qData = ALL_DATA.filter(r => Q_MONTHS[q].includes(r.month));
    const qActuals = {};
    let qPcts = [];
    Object.keys(targets).forEach(k => {
      const field = targets[k].field;
      const total = qData.reduce((acc, row) => acc + (parseFloat(row[field]) || 0), 0);
      if(total > 0){
        const pct = Math.round((total / targets[k].target) * 100);
        qPcts.push(Math.min(pct, 100));
      }
    });
    const qAvg = qPcts.length > 0 ? Math.round(qPcts.reduce((a,b)=>a+b,0)/qPcts.length) + '%' : '—';
    const pctEl = el(q + 'pct');
    if(pctEl) pctEl.textContent = qAvg;
  });

  // Render axis cards
  const grid = el('stratAxesGrid');
  if(grid){
    if(data.length === 0){
      grid.innerHTML = `<div style="text-align:center;padding:40px;color:var(--ink-soft);grid-column:1/-1;">
        <div style="font-size:36px;margin-bottom:10px;">📂</div>
        <div style="font-size:14px;">ارفع ملف CSV لعرض مؤشرات الخطة الاستراتيجية</div>
      </div>`;
    } else {
      grid.innerHTML = Object.keys(targets).map(k => {
        const t = targets[k];
        const actual = actuals[k] || 0;
        const hasData = actual > 0;
        const pct = hasData ? Math.min(Math.round((actual / t.target) * 100), 150) : null;
        const displayPct = pct !== null ? Math.min(pct, 100) : 0;
        const status = getStratStatus(pct);
        return `
        <div class="strat-axis-card ${status}">
          <div class="sac-header">
            <span class="sac-icon">${t.icon}</span>
            <div>
              <div class="sac-title">${t.label}</div>
              <div class="sac-axis">${t.axis}</div>
            </div>
            <span class="sac-status-badge ${status}">${getStratStatusLabel(status)}</span>
          </div>
          <div class="sac-values">
            <div>
              <div style="font-size:10px;color:var(--ink-soft);margin-bottom:2px;">الفعلي</div>
              <div class="sac-actual">${hasData ? actual.toLocaleString('en-US') : '—'}</div>
            </div>
            <div class="sac-target-info">
              <div style="font-size:10px;color:var(--ink-soft);margin-bottom:2px;">الهدف السنوي</div>
              <span>${t.target.toLocaleString('en-US')} ${t.unit}</span>
            </div>
          </div>
          <div class="sac-progress-bar">
            <div class="sac-progress-fill" style="width:${displayPct}%"></div>
          </div>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div class="sac-pct ${status}">${pct !== null ? pct + '%' : '—'} من الهدف</div>
            ${pct !== null && pct > 100 ? '<span style="font-size:10px;color:#0B5A7A;font-weight:700;">🏆 تجاوز الهدف</span>' : ''}
          </div>
          <div class="sac-note">${t.note}</div>
        </div>`;
      }).join('');
    }
  }

  // Build settings inputs
  const settingsGrid = el('stratSettingsGrid');
  if(settingsGrid){
    settingsGrid.innerHTML = Object.keys(targets).map(k => {
      const t = targets[k];
      return `<div class="strat-input-row">
        <label>${t.icon} ${t.label} (${t.unit})</label>
        <input type="number" id="strat-inp-${k}" value="${t.target}" min="0" step="100">
      </div>`;
    }).join('');
  }

  // Show admin tools only for authenticated administrators.
  const adminTools = el('stratAdminTools');
  if(adminTools) adminTools.style.display = (currentUser?.role === 'admin') ? 'flex' : 'none';

  // Update category strategic badges
  renderCategoryStrategicBadges(targets, actuals);
}

// Inject a small strategic badge into each category section
function renderCategoryStrategicBadges(targets, actuals){
  const CAT_MAP = {
    disability: ['disability', 'disability_benef'],
    social: ['elderly', 'orphans'],
    aid: ['food_aid', 'cash_aid'],
    rural: ['rural_dev', 'rural_ind'],
    labor: ['inspection'],
    insurance: ['insurance_new'],
    platform: ['platform', 'platform_jobs'],
    ngo: ['ngo_licensed'],
    juvenile: [],
    camps: [],
    labor_market: [],
    demographics: []
  };

  Object.keys(CAT_MAP).forEach(cat => {
    const keys = CAT_MAP[cat];
    if(keys.length === 0) return;

    const catEl = document.querySelector(`section.category[data-cat="${cat}"]`);
    if(!catEl) return;

    const catBody = catEl.querySelector('.cat-body');
    if(!catBody) return;

    // Remove existing badge if any
    const existing = catBody.querySelector('.cat-strat-badge');
    if(existing) existing.remove();

    // Calculate aggregate for this category
    let totalActual = 0, totalTarget = 0;
    keys.forEach(k => {
      if(targets[k]){
        totalActual += (actuals[k] || 0);
        totalTarget += targets[k].target;
      }
    });

    if(totalTarget === 0) return;

    const pct = Math.round((totalActual / totalTarget) * 100);
    const displayPct = Math.min(pct, 100);
    const status = totalActual === 0 ? 'no-data' : getStratStatus(pct);
    const statusLabel = getStratStatusLabel(status);

    const barColor = status === 'on-track' ? '#0B5A7A' : status === 'warning' ? '#f0a500' : status === 'no-data' ? '#ccc' : '#c62828';
    const actualStr = totalActual > 0 ? totalActual.toLocaleString('en-US') : '\u2014';
    const pctStr = totalActual > 0 ? (pct + '%') : '\u2014';

    const badge = document.createElement('div');
    badge.className = 'cat-strat-badge';
    badge.innerHTML = '<span class="csb-icon">🎯</span>'
      + '<span class="csb-label">الهدف الاستراتيجي:</span>'
      + '<span class="csb-actual">' + actualStr + '</span>'
      + '<span class="csb-sep">/</span>'
      + '<span class="csb-target">' + totalTarget.toLocaleString('en-US') + '</span>'
      + '<div class="csb-bar-wrap"><div class="csb-bar-fill" style="width:' + displayPct + '%;background:' + barColor + '"></div></div>'
      + '<span class="csb-pct-lbl ' + status + '">' + pctStr + '</span>'
      + '<span class="csb-status ' + status + '">' + statusLabel + '</span>';

    // Insert before first child of cat-body
    catBody.insertBefore(badge, catBody.firstChild);
  });
}

// Network event listeners
window.addEventListener('online', () => {
  console.log('🌐 Back online');
  updateConnectionStatus();
  // Show toast/notification
  const statusEl = document.getElementById('dataStatus');
  if(statusEl){
    statusEl.textContent = '🌐 تم استعادة الاتصال — يمكنك التحديث الآن';
    statusEl.className = 'status-badge status-ok';
  }
});

window.addEventListener('offline', () => {
  console.log('📵 Gone offline');
  updateConnectionStatus();
  const statusEl = document.getElementById('dataStatus');
  if(statusEl){
    statusEl.textContent = '📵 لا يوجد إنترنت — تعمل بالبيانات المحفوظة';
    statusEl.className = 'status-badge status-loading';
  }
});



// Session management is implemented in LOCAL USERS / ROLES / GOOGLE AUTH above.

// =====================
// INIT
// =====================
window.addEventListener('DOMContentLoaded', async () => {
  setupGovFilter();
  setupMonthFilter();
  try { await openAuthDB(); await seedUsers(); } catch(e) { console.error('Auth DB init failed',e); }
  initGoogleSignIn();

  setTimeout(() => {
    if(SHEETS_CONFIG.apiKey && !SHEETS_CONFIG.apiKey.includes('ضع_')){
      loadFromSheet();
    }
  }, 1200);

  const restored = await restoreSession();
  if(restored){
    console.log('✅ Session restored for user:', currentUser?.email);
    setTimeout(() => { autoLoadOnStartup(); }, 300);
    setTimeout(() => { initMapOnDemand(); }, 1000);
    setTimeout(() => { updateConnectionStatus(); }, 100);
  }
});

// ========== SEPARATOR ==========

// =====================
// GOVERNORATE EXECUTIVE PROFILE
// =====================
let currentProfileGov = null;
let radarChartInstance = null;
let gaugeChartInstance = null;

// Axis definitions with calculation logic
const RADAR_AXES = [
  { key: 'social', label: 'الرعاية الاجتماعية', icon: '👵', 
    fields: ['elderly_benef','disability_benef','orphan_homes','sponsor_internal','sponsor_external','beggar_inmates','dar_lahn_benef'] },
  { key: 'economic', label: 'النشاط الاقتصادي', icon: '💼', 
    fields: ['employed','platform_registered','vocational_benef','platform_jobs','platform_establishments'] },
  { key: 'insurance', label: 'التأمينات والحماية', icon: '🏥', 
    fields: ['insurance_total','insurance_public','insurance_private','pensioners','work_injury_comp','new_workers_insp'] },
  { key: 'rural', label: 'التنمية الريفية', icon: '🌾', 
    fields: ['rural_dev_benef','rural_ind_benef','rural_dev_active','rural_ind_active'] },
  { key: 'digital', label: 'التحول الرقمي', icon: '💻', 
    fields: ['platform_registered','platform_establishments','platform_jobs','platform_training'] },
  { key: 'humanitarian', label: 'الإغاثة والإنسانية', icon: '🍞', 
    fields: ['food_baskets','cash_assistance','in_kind_aid','camp_families','camps_count','unhcr_centers'] }
];

function getGovData(gov){
  return ALL_DATA.filter(d => d.gov === gov);
}

function aggregateGov(gov){
  const rows = getGovData(gov);
  if(rows.length === 0) return null;
  const agg = { gov: gov };
  rows.forEach(row => {
    Object.keys(row).forEach(k => {
      if(k === 'gov' || k === 'month') return;
      const v = row[k];
      if(typeof v === 'number'){
        agg[k] = (agg[k] || 0) + v;
      } else if(typeof v === 'string' && v.trim() && !agg[k]){
        agg[k] = v;
      }
    });
  });
  return agg;
}

function calcAxisScore(agg, axis){
  const pop = agg.population || 1;
  let raw = 0;
  axis.fields.forEach(f => {
    raw += (agg[f] || 0);
  });
  // Normalize: score per 100k population, capped at 100
  const per100k = (raw / pop) * 100000;
  // Use logarithmic-ish scale for better distribution
  const score = Math.min(100, Math.sqrt(per100k) * 8);
  return Math.round(score * 10) / 10;
}

function getAllAxisScores(gov){
  const agg = aggregateGov(gov);
  if(!agg) return null;
  const scores = {};
  let total = 0;
  RADAR_AXES.forEach(axis => {
    const s = calcAxisScore(agg, axis);
    scores[axis.key] = s;
    total += s;
  });
  scores.overall = Math.round((total / RADAR_AXES.length) * 10) / 10;
  scores.agg = agg;
  return scores;
}

function getGovAvatar(gov){
  const avatars = {
    'دمشق':'🏛️','ريف دمشق':'🌳','حلب':'🏺','حمص':'⚙️','حماه':'🌾',
    'اللاذقية':'🌊','طرطوس':'⚓','السويداء':'⛰️','درعا':'🌵',
    'القنيطرة':'🛡️','ادلب':'🕊️','الرقة':'🌅','دير الزور':'🛢️','الحسكة':'🌾'
  };
  return avatars[gov] || '🏛️';
}

function openGovProfile(gov){
  currentProfileGov = gov;
  const overlay = document.getElementById('govProfileOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('govProfileName').textContent = gov;
  document.getElementById('govProfileAvatar').textContent = getGovAvatar(gov);
  document.getElementById('govProfileSubtitle').textContent = 'الملف التنفيذي — تحليل المؤشرات التشغيلية';

  const scores = getAllAxisScores(gov);
  if(!scores){
    document.getElementById('gaugeValue').textContent = '—';
    return;
  }

  renderRadarChart(gov, scores);
  renderGaugeChart(scores.overall);
  generateGovInsights(gov, scores);
  renderMiniKpis(gov);
}

function closeGovProfile(){
  document.getElementById('govProfileOverlay').classList.remove('open');
  document.body.style.overflow = '';
  currentProfileGov = null;
  if(radarChartInstance){ radarChartInstance.destroy(); radarChartInstance = null; }
  if(gaugeChartInstance){ gaugeChartInstance.destroy(); gaugeChartInstance = null; }
}

function renderRadarChart(gov, scores){
  const ctx = document.getElementById('radarChart').getContext('2d');
  if(radarChartInstance){ radarChartInstance.destroy(); }

  const data = RADAR_AXES.map(a => scores[a.key]);
  const labels = RADAR_AXES.map(a => a.label);

  radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: gov,
        data: data,
        backgroundColor: 'rgba(37, 99, 235, 0.18)',
        borderColor: '#2563EB',
        pointBackgroundColor:'#06B6D4',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#2563EB',
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: { stepSize: 20, font: { family: 'IBM Plex Mono', size: 10 }, color: '#888' },
          pointLabels: { font: { family: 'Cairo', size: 12, weight: '600' }, color: '#0B5A7A' },
          grid: { color: 'rgba(11,90,122,0.1)' },
          angleLines: { color: 'rgba(11,90,122,0.15)' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          rtl: true,
          titleFont: { family: 'Tajawal', size: 13 },
          bodyFont: { family: 'Cairo', size: 12 },
          callbacks: {
            label: function(ctx) {
              return ctx.dataset.label + ': ' + ctx.raw + '/100';
            }
          }
        }
      }
    }
  });
}

function renderGaugeChart(value){
  const canvas = document.getElementById('gaugeChart');
  const ctx = canvas.getContext('2d');
  if(gaugeChartInstance){ gaugeChartInstance.destroy(); }

  // Custom gauge using doughnut with cutout
  gaugeChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['الأداء', 'المتبقي'],
      datasets: [{
        data: [value, 100 - value],
        backgroundColor: [getScoreColor(value), '#e8e8e8'],
        borderWidth: 0,
        cutout: '75%',
        circumference: 180,
        rotation: 270
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      }
    }
  });

  document.getElementById('gaugeValue').textContent = value;
  document.getElementById('gaugeValue').style.color = getScoreColor(value);
}

function getScoreColor(score){
  if(score >= 70) return '#4F7A63';
  if(score >= 40) return '#B08D57';
  return '#B5533C';
}

function generateGovInsights(gov, scores){
  const strengths = [];
  const weaknesses = [];

  RADAR_AXES.forEach(axis => {
    const s = scores[axis.key];
    const item = { label: axis.label, score: s, icon: axis.icon };
    if(s >= 60) strengths.push(item);
    else if(s <= 30) weaknesses.push(item);
  });

  // Sort and limit
  strengths.sort((a,b) => b.score - a.score);
  weaknesses.sort((a,b) => a.score - b.score);

  const topStrengths = strengths.slice(0, 3);
  const topWeaknesses = weaknesses.slice(0, 3);

  // If not enough, fill from extremes
  if(topStrengths.length < 3){
    const remaining = RADAR_AXES.filter(a => !topStrengths.find(s => s.label === a.label))
      .map(a => ({ label: a.label, score: scores[a.key], icon: a.icon }))
      .sort((a,b) => b.score - a.score);
    while(topStrengths.length < 3 && remaining.length) topStrengths.push(remaining.shift());
  }
  if(topWeaknesses.length < 3){
    const remaining = RADAR_AXES.filter(a => !topWeaknesses.find(w => w.label === a.label))
      .map(a => ({ label: a.label, score: scores[a.key], icon: a.icon }))
      .sort((a,b) => a.score - b.score);
    while(topWeaknesses.length < 3 && remaining.length) topWeaknesses.push(remaining.shift());
  }

  document.getElementById('strengthsList').innerHTML = topStrengths.map(s => 
    `<div class="insight-item strength"><span class="insight-icon">${s.icon}</span><div><strong>${s.label}</strong> — ${s.score}/100</div></div>`
  ).join('') || '<div class="insight-item strength"><span class="insight-icon">✅</span><div>لا توجد بيانات كافية</div></div>';

  document.getElementById('weaknessesList').innerHTML = topWeaknesses.map(w => 
    `<div class="insight-item weakness"><span class="insight-icon">${w.icon}</span><div><strong>${w.label}</strong> — ${w.score}/100</div></div>`
  ).join('') || '<div class="insight-item weakness"><span class="insight-icon">⚠️</span><div>لا توجد بيانات كافية</div></div>';
}

function renderMiniKpis(gov){
  const rows = getGovData(gov);
  // Sum absolute values across all months
  const pop = rows.reduce((a,d) => a + (parseFloat(d.population) || 0), 0);
  const employed = rows.reduce((a,d) => a + (parseFloat(d.employed) || 0), 0);
  // Average percentage values (don't sum rates!)
  const unempRates = rows.map(d => parseFloat(d.unemployment_rate)).filter(v => !isNaN(v));
  const avgUnemp = unempRates.length ? (unempRates.reduce((a,b) => a+b, 0) / unempRates.length).toFixed(1) : 0;
  const insurance = rows.reduce((a,d) => a + (parseFloat(d.insurance_total) || 0), 0);
  const aid = rows.reduce((a,d) => a + (parseFloat(d.food_baskets) || 0) + (parseFloat(d.cash_assistance) || 0) + (parseFloat(d.in_kind_aid) || 0), 0);
  const digital = rows.reduce((a,d) => a + (parseFloat(d.platform_registered) || 0), 0);

  document.getElementById('miniPop').textContent = fmt(pop);
  document.getElementById('miniEmployed').textContent = fmt(employed);
  document.getElementById('miniUnemp').textContent = avgUnemp + '%';
  document.getElementById('miniInsurance').textContent = fmt(insurance);
  document.getElementById('miniAid').textContent = fmt(aid);
  document.getElementById('miniDigital').textContent = fmt(digital);
}

// =====================
// COMPARE MODE
// =====================
let compareGovA = null;
let compareGovB = null;

function openCompareMode(){
  if(!currentProfileGov) return;
  compareGovA = currentProfileGov;
  closeGovProfile();

  const overlay = document.getElementById('compareOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Build selector
  const selector = document.getElementById('compareGovSelector');
  selector.innerHTML = ALL_GOVS.map(g => 
    `<button class="gov-selector-chip ${g === compareGovA ? 'active' : ''}" onclick="selectCompareGov('${g}')">${getGovAvatar(g)} ${g}</button>`
  ).join('');

  // Default compare with highest overall score
  const allScores = ALL_GOVS.map(g => ({ gov: g, score: getAllAxisScores(g)?.overall || 0 }))
    .filter(s => s.gov !== compareGovA)
    .sort((a,b) => b.score - a.score);
  compareGovB = allScores[0]?.gov || ALL_GOVS.find(g => g !== compareGovA);

  renderComparison();
}

function selectCompareGov(gov){
  if(gov === compareGovA) return;
  compareGovB = gov;
  document.querySelectorAll('#compareGovSelector .gov-selector-chip').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.trim().includes(gov));
  });
  renderComparison();
}

function renderComparison(){
  const scoresA = getAllAxisScores(compareGovA);
  const scoresB = getAllAxisScores(compareGovB);
  const grid = document.getElementById('compareGrid');

  if(!scoresA || !scoresB){
    grid.innerHTML = '<div style="text-align:center;padding:40px;color:#999;">لا توجد بيانات كافية للمقارنة</div>';
    return;
  }

  // Determine winner per axis
  const axisRows = RADAR_AXES.map(axis => {
    const a = scoresA[axis.key];
    const b = scoresB[axis.key];
    const winner = a > b ? 'A' : b > a ? 'B' : 'tie';
    return { axis, a, b, winner };
  });

  const overallWinner = scoresA.overall > scoresB.overall ? 'A' : scoresB.overall > scoresA.overall ? 'B' : 'tie';

  grid.innerHTML = `
    <div class="compare-col ${overallWinner === 'A' ? 'compare-winner' : overallWinner === 'B' ? 'compare-loser' : ''}">
      <h4>${getGovAvatar(compareGovA)} ${compareGovA}</h4>
      <div style="text-align:center;margin-bottom:14px;">
        <div style="font-family:IBM Plex Mono;font-size:32px;font-weight:700;color:${getScoreColor(scoresA.overall)};">${scoresA.overall}</div>
        <div style="font-size:11px;color:var(--ink-soft);">مؤشر الأداء العام</div>
      </div>
      ${axisRows.map(r => `
        <div class="compare-metric">
          <span class="compare-metric-label">${r.axis.icon} ${r.axis.label}</span>
          <span class="compare-metric-val" style="color:${r.winner === 'A' ? '#4F7A63' : r.winner === 'B' ? '#B5533C' : 'var(--ink)'};">${r.a}</span>
        </div>
      `).join('')}
    </div>

    <div class="compare-col ${overallWinner === 'B' ? 'compare-winner' : overallWinner === 'A' ? 'compare-loser' : ''}">
      <h4>${getGovAvatar(compareGovB)} ${compareGovB}</h4>
      <div style="text-align:center;margin-bottom:14px;">
        <div style="font-family:IBM Plex Mono;font-size:32px;font-weight:700;color:${getScoreColor(scoresB.overall)};">${scoresB.overall}</div>
        <div style="font-size:11px;color:var(--ink-soft);">مؤشر الأداء العام</div>
      </div>
      ${axisRows.map(r => `
        <div class="compare-metric">
          <span class="compare-metric-label">${r.axis.icon} ${r.axis.label}</span>
          <span class="compare-metric-val" style="color:${r.winner === 'B' ? '#4F7A63' : r.winner === 'A' ? '#B5533C' : 'var(--ink)'};">${r.b}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function closeCompareMode(){
  document.getElementById('compareOverlay').classList.remove('open');
  document.body.style.overflow = '';
  compareGovA = null;
  compareGovB = null;
}

// Close on backdrop click
document.getElementById('govProfileOverlay').addEventListener('click', function(e){
  if(e.target === this) closeGovProfile();
});
document.getElementById('compareOverlay').addEventListener('click', function(e){
  if(e.target === this) closeCompareMode();
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    if(document.getElementById('compareOverlay').classList.contains('open')) closeCompareMode();
    else if(document.getElementById('govProfileOverlay').classList.contains('open')) closeGovProfile();
  }
});

// ========== SEPARATOR ==========

(function(){
  const root=document.documentElement;
  const button=document.getElementById('themeToggle');
  const saved=localStorage.getItem('mosal-theme');
  const prefersDark=window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const setTheme=(theme,save=true)=>{
    root.dataset.theme=theme;
    if(button){const dark=theme==='dark';button.textContent=dark?'☀':'☾';button.title=dark?'تفعيل الوضع النهاري':'تفعيل الوضع الليلي';button.setAttribute('aria-label',button.title);}
    if(save)localStorage.setItem('mosal-theme',theme);
  };
  setTheme(saved || (prefersDark?'dark':'light'),false);
  if(button)button.addEventListener('click',()=>setTheme(root.dataset.theme==='dark'?'light':'dark'));
})();

// ========== SEPARATOR ==========

/* Global Chart.js polish: typography, animation, RTL-friendly interaction */
if (typeof Chart !== 'undefined') {
  Chart.defaults.font.family = 'Cairo, sans-serif';
  Chart.defaults.color = '#64748b';
  Chart.defaults.animation.duration = 850;
  Chart.defaults.animation.easing = 'easeOutQuart';
  Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(15,23,42,.94)';
  Chart.defaults.plugins.tooltip.titleColor = '#fff';
  Chart.defaults.plugins.tooltip.bodyColor = '#e2e8f0';
  Chart.defaults.plugins.tooltip.borderColor = 'rgba(255,255,255,.14)';
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.padding = 12;
  Chart.defaults.plugins.tooltip.cornerRadius = 12;
  Chart.defaults.plugins.tooltip.displayColors = false;
}