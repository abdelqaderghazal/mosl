:root{--ink:#0B5A7A;--ink-2:#084a66;--sand:#F0F7FA;--sand-2:#E0F0F5;--paper:#ffffff;--brass:#0D8BA8;--brass-light:#5BA3C0;--alert:#e74c3c;--good:#0B5A7A;--line:#c0d8e0;--ink-soft:#4a6a7a;--accent-blue:#0B5A7A;--accent-green:#0D8BA8;--syria-green:#0B5A7A;--syria-white:#ffffff;--syria-black:#052a3a;--syria-red:#0D8BA8;}
  *{box-sizing:border-box;}body{margin:0;background:var(--sand);color:var(--ink);font-family:'Cairo',sans-serif;}
  ::selection{background:#b8dce8;color:#052a3a;}
  .masthead{background:linear-gradient(135deg,#0B5A7A 0%,#084a66 50%,#052a3a 100%);color:var(--syria-white);padding:28px 28px 24px;position:relative;overflow:hidden;border-bottom:4px solid #0D8BA8;}
  .masthead::after{content:"";position:absolute;inset:0;background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.025) 0 2px,transparent 2px 26px);pointer-events:none;}
  .masthead-inner{max-width:1180px;margin:0 auto;position:relative;padding:0;border-radius:0;box-shadow:none;background:transparent;display:flex;align-items:center;gap:24px;}
  .masthead-emblem{flex-shrink:0;width:90px;height:90px;display:flex;align-items:center;justify-content:center;}
  .masthead-emblem svg{width:100%;height:100%;filter:drop-shadow(0 2px 6px rgba(0,0,0,0.4));}
  .masthead-content{flex:1;min-width:0;}
  .eyebrow{font-family:'IBM Plex Mono',monospace;letter-spacing:.12em;font-size:11px;color:var(--syria-white);display:flex;align-items:center;gap:10px;margin-bottom:6px;font-weight:600;opacity:0.9;}
  .eyebrow .dot{width:6px;height:6px;border-radius:50%;background:var(--brass-light);}
  h1{font-family:'Tajawal',sans-serif;font-weight:900;font-size:clamp(16px,2.6vw,26px);margin:0 0 6px;line-height:1.3;color:var(--syria-white);text-shadow:0 2px 4px rgba(0,0,0,0.3);}
  .sub{color:rgba(255,255,255,0.95);font-size:clamp(16px,2.4vw,22px);max-width:640px;line-height:1.6;margin:0 0 16px;font-weight:900;font-family:'Tajawal',sans-serif;}
  @media(max-width:640px){.masthead-inner{flex-direction:column;gap:14px;text-align:center;}.masthead-emblem{width:70px;height:70px;}}
  .month-badge{display:inline-flex;align-items:center;gap:8px;background:var(--syria-green);border:2px solid var(--syria-green);padding:7px 16px;border-radius:100px;font-family:'IBM Plex Mono',monospace;font-size:13px;color:var(--syria-white);font-weight:600;}
  .toolbar{position:sticky;top:0;z-index:30;background:var(--paper);border-bottom:1px solid var(--line);box-shadow:0 4px 14px rgba(18,60,68,0.06);}
  .toolbar-inner{max-width:1180px;margin:0 auto;padding:14px 28px;display:flex;flex-wrap:wrap;gap:10px;align-items:center;}
  .toolbar-label{font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--ink-soft);margin-inline-end:6px;white-space:nowrap;}
  .chip{border:1px solid var(--line);background:var(--sand);color:var(--ink);padding:7px 15px;border-radius:100px;font-size:13.5px;font-weight:600;cursor:pointer;transition:.15s ease;font-family:'Cairo',sans-serif;}
  .chip:hover{border-color:#0D8BA8;}
  .chip.active{background:#0B5A7A;color:#fff;border-color:#0B5A7A;}
  .chip:disabled{opacity:0.3;cursor:not-allowed;}
  .month-toolbar{background:var(--sand);border-bottom:1px solid var(--line);position:static;box-shadow:none;}
  .month-toolbar .chip{background:var(--paper);}
  .month-toolbar .chip.active{background:#0D8BA8;color:#fff;border-color:#0D8BA8;}
  .data-panel{max-width:1180px;margin:0 auto;padding:20px 28px 0;}
  .data-source-bar{display:flex;align-items:center;gap:12px;flex-wrap:wrap;background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:14px 18px;margin-bottom:20px;}
  .data-source-bar .label{font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--ink-soft);font-weight:600;white-space:nowrap;}
  .gsheet-input{flex:1;min-width:280px;border:1px solid var(--line);border-radius:8px;padding:8px 14px;font-family:'IBM Plex Mono',monospace;font-size:13px;color:var(--ink);background:var(--sand);direction:ltr;}
  .gsheet-input:focus{outline:none;border-color:#0D8BA8;background:var(--paper);}
  .btn{border:none;border-radius:8px;padding:8px 18px;font-family:'Cairo',sans-serif;font-size:13px;font-weight:600;cursor:pointer;transition:.15s ease;}
  .btn-primary{background:var(--syria-green);color:var(--syria-white);}
  .btn-primary:hover{background:#052a3a;}
  .btn-success{background:var(--syria-red);color:white;}
  .btn-success:hover{background:#0a6a7a;}
  .status-badge{font-family:'IBM Plex Mono',monospace;font-size:11px;padding:4px 10px;border-radius:100px;font-weight:600;}
  .status-ok{background:#E0F5F5;color:#0B5A7A;}
  .status-loading{background:#fff3e0;color:#ef6c00;}
  .status-error{background:#ffebee;color:#c62828;}
  .modal-overlay{position:fixed;inset:0;background:rgba(18,60,68,0.5);z-index:100;display:none;align-items:center;justify-content:center;padding:20px;}
  .modal-overlay.open{display:flex;}
  .modal-box{background:var(--paper);border-radius:18px;max-width:600px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:0 20px 60px rgba(18,60,68,0.3);}
  .modal-header{padding:20px 24px;border-bottom:1px solid var(--sand-2);display:flex;align-items:center;justify-content:space-between;}
  .modal-header h3{margin:0;font-family:'Tajawal',sans-serif;font-weight:700;font-size:18px;}
  .modal-close{background:none;border:none;font-size:24px;cursor:pointer;color:var(--ink-soft);line-height:1;}
  .modal-body{padding:20px 24px;}
  .modal-body p{font-size:13.5px;color:var(--ink-soft);line-height:1.8;margin:0 0 16px;}
  .help-box{background:var(--sand);border-inline-start:3px solid #0B5A7A;padding:12px 16px;border-radius:6px;font-size:12.5px;line-height:1.8;color:var(--ink-soft);margin-bottom:16px;}
  .help-box code{background:var(--paper);padding:2px 6px;border-radius:4px;font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--ink);direction:ltr;display:inline-block;}
  main{max-width:1180px;margin:0 auto;padding:30px 28px 70px;}
  .kpi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px;margin-bottom:38px;}
  .kpi{background:rgba(11,90,122,0.75);border:1px solid rgba(255,255,255,0.2);border-radius:14px;padding:16px 14px 14px;text-align:center;position:relative;color:#fff;}
  .kpi .seal{width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,0.15);border:2px solid rgba(255,255,255,0.35);display:flex;align-items:center;justify-content:center;font-size:22px;margin:0 auto 10px;color:#fff;}
  .kpi .val{font-family:'IBM Plex Mono',monospace;font-weight:600;font-size:21px;color:#ffffff;}
  .kpi .lbl{font-size:11.5px;color:rgba(255,255,255,0.85);margin-top:4px;line-height:1.4;min-height:30px;}
  section.category{background:var(--paper);border:1px solid var(--line);border-radius:18px;margin-bottom:24px;overflow:hidden;}
  .cat-head{display:flex;align-items:center;gap:14px;padding:20px 24px;border-bottom:1px solid var(--sand-2);cursor:pointer;background:linear-gradient(90deg,var(--sand) 0%,transparent 100%);}
  .cat-head .icon{width:44px;height:44px;border-radius:50%;background:var(--syria-green);color:var(--syria-white);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;border:2px solid #0D8BA8;}
  .cat-head h2{font-family:'Tajawal',sans-serif;font-weight:700;font-size:18px;margin:0;color:var(--ink);}
  .cat-head p{margin:3px 0 0;font-size:13px;color:var(--ink-soft);}
  .cat-head .chev{margin-inline-start:auto;font-size:18px;color:#0D8BA8;transition:transform .2s;}
  .cat-body{padding:22px 24px 26px;display:none;}
  section.category.open .cat-body{display:block;}
  section.category.open .chev{transform:rotate(180deg);}
  .cat-note{font-size:13.5px;color:var(--ink-soft);background:var(--sand);border-inline-start:3px solid #0D8BA8;padding:10px 14px;border-radius:6px;margin-bottom:18px;line-height:1.8;}
  .chart-wrap{background:var(--sand);border-radius:12px;padding:16px;margin-bottom:18px;min-height:220px;}
  .chart-wrap canvas{max-height:320px;}
  .ind-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:12px;}
  .ind-card{border:1px solid var(--line);border-radius:12px;padding:13px 14px;background:var(--paper);display:flex;gap:10px;align-items:flex-start;}
  .ind-card .em{font-size:19px;flex-shrink:0;}
  .ind-card .t{font-size:12.5px;color:var(--ink-soft);line-height:1.5;}
  .ind-card .n{font-family:'IBM Plex Mono',monospace;font-weight:600;font-size:16px;color:var(--ink);}
  .gov-list{display:flex;flex-direction:column;gap:10px;}
  .gov-item{border:1px solid var(--line);border-radius:12px;background:var(--paper);overflow:hidden;}
  .gov-item .gh{display:flex;align-items:center;gap:12px;padding:14px 18px;cursor:pointer;}
  .gov-item .gh .stamp{width:34px;height:34px;border-radius:50%;border:2px solid #0B5A7A;display:flex;align-items:center;justify-content:center;font-size:14px;color:#0B5A7A;font-weight:700;font-family:'IBM Plex Mono',monospace;flex-shrink:0;background:#fff;}
  .gov-item .gh strong{font-family:'Tajawal',sans-serif;font-size:15.5px;}
  .gov-item .gh .chev{margin-inline-start:auto;color:#0D8BA8;transition:transform .2s;}
  .gov-item.open .chev{transform:rotate(180deg);}
  .gov-item .gb{display:none;padding:0 18px 18px;font-size:13.5px;line-height:1.85;}
  .gov-item.open .gb{display:block;}
  .gov-item .gb .row{margin-bottom:10px;}
  .gov-item .gb .row b{color:var(--ink);font-family:'Tajawal',sans-serif;font-weight:700;font-size:12.5px;display:block;margin-bottom:3px;}
  .gov-item .gb .row span{color:var(--ink-soft);}
  .empty-note{color:#a08b6a;font-style:italic;}
  .file-drop-zone{border:2px dashed var(--line);border-radius:12px;padding:30px;text-align:center;background:var(--sand);cursor:pointer;transition:.2s;}
  .file-drop-zone:hover{border-color:#0B5A7A;background:#E0F5F5;}
  .file-drop-zone.dragover{border-color:var(--accent-blue);background:#e8f4f8;}
  footer{max-width:1180px;margin:0 auto;padding:0 28px 50px;color:var(--ink-soft);font-size:12.5px;line-height:1.9;}
  footer .line{border-top:1px dashed var(--line);margin:0 0 18px;padding-top:18px;}
  @media(max-width:640px){.cat-head{padding:16px;}.cat-body{padding:16px;}.data-source-bar{flex-direction:column;align-items:stretch;}.gsheet-input{min-width:unset;width:100%;}}

  .map-section{background:var(--paper);border:1px solid var(--line);border-radius:18px;margin-bottom:24px;overflow:hidden;}
  .map-head{display:flex;align-items:center;gap:14px;padding:20px 24px;border-bottom:1px solid var(--sand-2);background:linear-gradient(90deg,var(--sand) 0%,transparent 100%);}
  .map-head .icon{width:44px;height:44px;border-radius:50%;background:#0B5A7A;color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;border:2px solid #0D8BA8;}
  .map-head h2{font-family:'Tajawal',sans-serif;font-weight:700;font-size:18px;margin:0;color:var(--ink);}
  .map-head p{margin:3px 0 0;font-size:13px;color:var(--ink-soft);}
  #govMap{width:100%;height:500px;border-radius:0 0 18px 18px;}
  .map-legend{display:flex;flex-wrap:wrap;gap:12px;padding:14px 24px;background:var(--sand);border-bottom:1px solid var(--sand-2);}
  .legend-item{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--ink-soft);}
  .legend-dot{width:14px;height:14px;border-radius:50%;}
  .map-info-window{font-family:'Cairo',sans-serif;direction:rtl;text-align:right;min-width:280px;max-width:340px;max-height:450px;overflow-y:auto;}
  .map-info-window h4{margin:0 0 10px;font-family:'Tajawal';font-size:16px;color:var(--ink);border-bottom:2px solid #0D8BA8;padding-bottom:8px;}
  .map-info-window .info-row{display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #eee;font-size:11.5px;align-items:flex-start;gap:8px;}
  .map-info-window .info-row:last-child{border-bottom:none;}
  .map-info-window .info-label{color:#666;flex-shrink:0;max-width:70%;}
  .map-info-window .info-val{font-weight:700;color:var(--ink);text-align:left;flex-shrink:0;}
  .map-info-window::-webkit-scrollbar{width:6px;}
  .map-info-window::-webkit-scrollbar-track{background:#f1f1f1;border-radius:3px;}
  .map-info-window::-webkit-scrollbar-thumb{background:#0B5A7A;border-radius:3px;}
  .leaflet-popup-content-wrapper{border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,0.25);}
  .leaflet-popup-content{margin:12px 16px;}
  .leaflet-popup-tip{background:white;}


  /* ===== LOGIN OVERLAY ===== */
  .password-overlay{position:fixed;inset:0;background:linear-gradient(135deg,#0B5A7A 0%,#084a66 50%,#052a3a 100%);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px;}
  .password-box{background:var(--paper);border-radius:20px;padding:40px 36px;max-width:460px;width:100%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.4);border:2px solid #0D8BA8;}
  .password-box .lock-icon{font-size:56px;margin-bottom:16px;}
  .password-box h2{font-family:'Tajawal',sans-serif;font-weight:900;font-size:24px;margin:0 0 8px;color:#0B5A7A;}
  .password-box p{color:var(--ink-soft);font-size:14px;margin:0 0 24px;line-height:1.7;}
  .password-box input{width:100%;border:2px solid var(--line);border-radius:12px;padding:14px 18px;font-family:'IBM Plex Mono',monospace;font-size:16px;text-align:center;letter-spacing:4px;color:var(--ink);background:var(--sand);margin-bottom:16px;transition:.15s;}
  .password-box input:focus{outline:none;border-color:#0B5A7A;background:var(--paper);}
  .password-box .btn-login{width:100%;border:none;border-radius:12px;padding:14px;font-family:'Cairo',sans-serif;font-size:16px;font-weight:700;cursor:pointer;background:var(--syria-green);color:var(--syria-white);transition:.15s;}
  .password-box .btn-login:hover{background:var(--syria-black);}
  .password-box .error-msg{color:var(--syria-red);font-size:13px;margin-top:12px;display:none;font-weight:600;}
  .password-box .error-msg.show{display:block;}
  body.locked{overflow:hidden;}
  body.locked > *:not(.password-overlay):not(.connection-bar){display:none;}

  /* User type selector */
  .user-type-selector{display:flex;flex-direction:column;gap:10px;margin-bottom:20px;text-align:right;}
  .user-type-option{display:flex;align-items:center;gap:12px;padding:14px 16px;border:2px solid var(--line);border-radius:12px;cursor:pointer;transition:.15s;background:var(--sand);position:relative;}
  .user-type-option:hover{border-color:#0B5A7A;background:#E0F5F5;}
  .user-type-option.active{border-color:#0B5A7A;background:#E0F5F5;}
  .user-type-option input{position:absolute;opacity:0;width:0;height:0;}
  .user-icon{font-size:28px;flex-shrink:0;}
  .user-label{font-family:'Tajawal';font-weight:700;font-size:15px;color:var(--ink);display:block;}
  .user-desc{font-size:12px;color:var(--ink-soft);display:block;margin-top:2px;}

  /* User management in admin panel */
  .user-management{margin:20px 0;text-align:right;}
  .user-row{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border:1px solid var(--line);border-radius:10px;margin-bottom:10px;background:var(--sand);}
  .user-info{display:flex;align-items:center;gap:10px;}
  .user-role-badge{padding:4px 10px;border-radius:100px;font-size:11px;font-weight:600;font-family:'IBM Plex Mono';}
  .user-role-badge.admin{background:#e8f5e9;color:var(--syria-green);}
  .user-role-badge.viewer{background:#e3f2fd;color:#1565c0;}
  .user-name{font-size:13px;color:var(--ink-soft);}
  .btn-sm{padding:6px 14px;font-size:12px;border-radius:6px;}

  /* Change password form */
  .change-pw-form{background:var(--sand);border:1px solid var(--line);border-radius:12px;padding:16px;margin-top:16px;text-align:right;}
  .change-pw-form h4{margin:0 0 12px;font-family:'Tajawal';font-size:14px;color:var(--ink);}
  .change-pw-form input{width:100%;border:1px solid var(--line);border-radius:8px;padding:10px 12px;font-family:'IBM Plex Mono',monospace;font-size:14px;text-align:center;letter-spacing:2px;margin-bottom:8px;direction:ltr;}
  .change-pw-form input:focus{outline:none;border-color:var(--syria-green);}
  .change-pw-form .success-msg{color:var(--good);font-size:12px;margin-top:8px;display:none;}
  .change-pw-form .success-msg.show{display:block;}

  /* Read-only mode indicator */
  .read-only-banner{position:fixed;top:0;left:0;right:0;background:linear-gradient(90deg,#1565c0,#0d47a1);color:white;padding:8px 20px;text-align:center;font-size:13px;font-weight:600;z-index:999;font-family:'Cairo';display:none;box-shadow:0 2px 8px rgba(0,0,0,0.2);}
  .read-only-banner.show{display:block;}
  .read-only-banner .close-banner{position:absolute;left:16px;top:50%;transform:translateY(-50%);background:none;border:none;color:white;font-size:18px;cursor:pointer;}

  /* Disabled buttons in read-only mode */
  body.readonly .btn-success{opacity:0.4;pointer-events:none;}
  body.readonly .btn-primary[id="refreshBtn"]{opacity:0.4;pointer-events:none;}
  body.readonly #fileDropZone{opacity:0.4;pointer-events:none;}
  body.readonly .gsheet-input{opacity:0.6;pointer-events:none;}  .change-pw-section{background:var(--sand);border:1px solid var(--line);border-radius:12px;padding:16px;margin-top:20px;text-align:right;}
  .change-pw-section h4{margin:0 0 12px;font-family:'Tajawal';font-size:14px;color:var(--ink);}
  .change-pw-section input{width:100%;border:1px solid var(--line);border-radius:8px;padding:10px 12px;font-family:'IBM Plex Mono',monospace;font-size:14px;text-align:center;letter-spacing:2px;margin-bottom:8px;direction:ltr;}
  .change-pw-section input:focus{outline:none;border-color:#0B5A7A;}
  .change-pw-section .btn-sm{padding:8px 16px;font-size:12px;border-radius:6px;}
  .change-pw-section .success-msg{color:var(--good);font-size:12px;margin-top:8px;display:none;}
  .change-pw-section .success-msg.show{display:block;}

  /* ===== INSIGHTS & COMPARISONS SECTION ===== */
  .insights-section{background:var(--paper);border:1px solid var(--line);border-radius:18px;margin-bottom:24px;overflow:hidden;}
  .insights-head{display:flex;align-items:center;gap:14px;padding:20px 24px;border-bottom:1px solid var(--sand-2);background:linear-gradient(90deg,var(--sand) 0%,transparent 100%);cursor:pointer;}
  .insights-head .icon{width:44px;height:44px;border-radius:50%;background:#0D8BA8;color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;border:2px solid #0B5A7A;}
  .insights-head h2{font-family:'Tajawal',sans-serif;font-weight:700;font-size:18px;margin:0;color:var(--ink);}
  .insights-head p{margin:3px 0 0;font-size:13px;color:var(--ink-soft);}
  .insights-head .chev{margin-inline-start:auto;font-size:18px;color:#0D8BA8;transition:transform .2s;}
  .insights-body{padding:22px 24px 26px;display:none;}
  .insights-section.open .insights-body{display:block;}
  .insights-section.open .chev{transform:rotate(180deg);}

  .insight-card{background:var(--sand);border-radius:12px;padding:16px 18px;margin-bottom:14px;border-inline-start:4px solid #0B5A7A;transition:.15s;}
  .insight-card:hover{transform:translateX(-4px);}
  .insight-card.warning{border-inline-start-color:var(--syria-red);background:#fff3e0;}
  .insight-card.info{border-inline-start-color:#1565c0;background:#e3f2fd;}
  .insight-card.success{border-inline-start-color:var(--syria-green);background:#e8f5e9;}
  .insight-header{display:flex;align-items:center;gap:10px;margin-bottom:8px;}
  .insight-header .badge{font-family:'IBM Plex Mono',monospace;font-size:11px;padding:3px 10px;border-radius:100px;font-weight:600;color:white;background:#0B5A7A;}
  .insight-header .badge.warning{background:#e74c3c;}
  .insight-header .badge.info{background:#0D8BA8;}
  .insight-header h4{margin:0;font-family:'Tajawal';font-size:15px;color:var(--ink);}
  .insight-card p{margin:0;font-size:13px;color:var(--ink-soft);line-height:1.8;}
  .insight-card .metric{font-family:'IBM Plex Mono',monospace;font-weight:600;color:var(--syria-red);font-size:14px;}
  .insight-card .metric.good{color:var(--syria-green);}
  .comparison-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin-bottom:18px;}
  .comparison-card{background:var(--paper);border:1px solid var(--line);border-radius:12px;padding:16px;text-align:center;}
  .comparison-card .rank{font-family:'IBM Plex Mono',monospace;font-size:28px;font-weight:700;color:#0D8BA8;margin-bottom:4px;}
  .comparison-card .gov-name{font-family:'Tajawal';font-weight:700;font-size:15px;color:var(--ink);margin-bottom:4px;}
  .comparison-card .metric-val{font-family:'IBM Plex Mono';font-size:14px;color:var(--ink-soft);}
  .comparison-card .vs-bar{height:6px;background:var(--sand-2);border-radius:3px;margin-top:10px;overflow:hidden;}
  .comparison-card .vs-fill{height:100%;background:#0B5A7A;border-radius:3px;transition:width .5s ease;}
  .trend-indicator{display:inline-flex;align-items:center;gap:4px;font-family:'IBM Plex Mono';font-size:12px;font-weight:600;}
  .trend-up{color:#0B5A7A;}
  .trend-down{color:#e74c3c;}
  .insights-summary{background:linear-gradient(135deg,#0B5A7A,#084a66);color:white;border-radius:12px;padding:18px 20px;margin-bottom:18px;text-align:center;}
  .insights-summary h3{margin:0 0 8px;font-family:'Tajawal';font-size:16px;}
  .insights-summary p{margin:0;font-size:13px;opacity:0.9;line-height:1.7;}
  .gender-bar{display:flex;height:28px;border-radius:14px;overflow:hidden;margin-top:10px;background:var(--sand-2);}
  .gender-bar .male-part{background:#0B5A7A;display:flex;align-items:center;justify-content:center;color:white;font-size:11px;font-family:'IBM Plex Mono';font-weight:600;transition:width .5s ease;}
  .gender-bar .female-part{background:#0D8BA8;display:flex;align-items:center;justify-content:center;color:white;font-size:11px;font-family:'IBM Plex Mono';font-weight:600;transition:width .5s ease;}

  /* ===== RANKING MODE SELECTOR ===== */
  .ranking-mode-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:18px;padding:12px 16px;background:var(--sand);border-radius:10px;border:1px solid var(--line);}
  .ranking-mode-bar .mode-label{font-family:'Tajawal';font-weight:700;font-size:13px;color:var(--ink);margin-inline-end:8px;}
  .ranking-mode-btn{border:1px solid var(--line);background:var(--paper);color:var(--ink-soft);padding:6px 14px;border-radius:100px;font-size:12.5px;font-weight:600;cursor:pointer;transition:.15s ease;font-family:'Cairo',sans-serif;}
  .ranking-mode-btn:hover{border-color:var(--syria-green);color:var(--syria-green);}
  .ranking-mode-btn.active{background:#0B5A7A;color:#fff;border-color:#0B5A7A;}
  .ranking-desc{font-size:12px;color:var(--ink-soft);margin-top:8px;padding:8px 12px;background:var(--paper);border-radius:6px;border-inline-start:3px solid #0B5A7A;line-height:1.7;}


  .monthly-report-card{background:var(--sand);border-radius:12px;padding:16px 18px;margin-bottom:14px;border-inline-start:4px solid #0B5A7A;}
  .monthly-report-card h4{margin:0 0 10px;font-family:'Tajawal';font-size:15px;color:var(--ink);}
  .monthly-report-card .report-text{white-space:pre-wrap;line-height:2;color:var(--ink-soft);font-size:13.5px;}

  /* ===== OFFLINE & LAST UPDATED STYLES ===== */
  .connection-bar{position:fixed;top:0;left:0;right:0;z-index:998;padding:6px 20px;text-align:center;font-size:12.5px;font-weight:600;font-family:'Cairo';display:none;box-shadow:0 2px 8px rgba(0,0,0,0.15);transition:.3s ease;}
  .connection-bar.offline{background:linear-gradient(90deg,#c62828,#e53935);color:white;display:flex;align-items:center;justify-content:center;gap:8px;}
  .connection-bar.online{background:linear-gradient(90deg,#2e7d32,#43a047);color:white;display:none;}
  .connection-bar.show{display:flex !important;}  .connection-bar[data-manually-closed="true"]{display:none !important;}
  .last-updated-badge{display:inline-flex;align-items:center;gap:6px;background:var(--sand);border:1px solid var(--line);padding:5px 12px;border-radius:100px;font-family:'IBM Plex Mono';font-size:11.5px;color:var(--ink-soft);font-weight:600;white-space:nowrap;}
  .last-updated-badge .dot{width:6px;height:6px;border-radius:50%;background:#4F7A63;animation:pulse 2s infinite;}
  @keyframes pulse{0%{opacity:1;transform:scale(1);}50%{opacity:.5;transform:scale(.8);}100%{opacity:1;transform:scale(1);}}
  .offline-badge{background:#c62828 !important;color:white !important;border-color:#c62828 !important;}
  .offline-badge .dot{background:#ffcdd2 !important;}

  /* ===== DIAGNOSTIC & FALLBACK STYLES ===== */
  .diag-box{background:#fff3e0;border:1px solid #ff9800;border-radius:12px;padding:16px 18px;margin-bottom:16px;text-align:right;}
  .diag-box h4{margin:0 0 10px;font-family:Tajawal;font-size:15px;color:#e65100;}
  .diag-box p{margin:0 0 8px;font-size:12.5px;color:#bf360c;line-height:1.8;}
  .diag-box code{background:#fff8e1;padding:2px 8px;border-radius:4px;font-family:'IBM Plex Mono';font-size:11px;color:#e65100;direction:ltr;}
  .diag-box .btn-fallback{background:linear-gradient(135deg,#e65100,#f57c00);color:white;border:none;border-radius:8px;padding:10px 18px;font-family:Cairo;font-size:13px;font-weight:600;cursor:pointer;margin-top:8px;}
  .diag-box .btn-fallback:hover{background:#bf360c;}
  .file-protocol-warning{background:#ffebee;border:2px solid #c62828;border-radius:12px;padding:16px 18px;margin-bottom:16px;text-align:right;color:#b71c1c;}
  .file-protocol-warning h4{margin:0 0 8px;color:#c62828;font-family:Tajawal;font-size:15px;}
  .file-protocol-warning p{margin:0;font-size:12.5px;line-height:1.8;}
  .file-protocol-warning code{background:#ffcdd2;padding:3px 8px;border-radius:4px;font-family:'IBM Plex Mono';font-size:11px;}

  /* ═══════════════════════════════════════
     STRATEGIC PLAN LAYER — المحور الاستراتيجي
     ═══════════════════════════════════════ */

  /* --- Compass Section --- */
  .strategic-compass{background:var(--paper);border:2px solid #0B5A7A;border-radius:20px;margin-bottom:28px;overflow:hidden;box-shadow:0 4px 24px rgba(11,90,122,0.10);}
  .strategic-compass-head{display:flex;align-items:center;gap:16px;padding:22px 26px;background:linear-gradient(135deg,#0B5A7A 0%,#052a3a 100%);cursor:pointer;}
  .strategic-compass-head .icon{width:50px;height:50px;border-radius:50%;background:rgba(255,255,255,0.15);border:2px solid rgba(255,255,255,0.4);display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;}
  .strategic-compass-head h2{font-family:'Tajawal',sans-serif;font-weight:900;font-size:20px;margin:0;color:#fff;}
  .strategic-compass-head p{margin:4px 0 0;font-size:13px;color:rgba(255,255,255,0.8);}
  .strategic-compass-head .chev{margin-inline-start:auto;font-size:20px;color:rgba(255,255,255,0.8);transition:transform .2s;}
  .strategic-compass.open .chev{transform:rotate(180deg);}
  .strategic-compass-body{padding:24px 26px 28px;display:none;}
  .strategic-compass.open .strategic-compass-body{display:block;}

  /* --- Overall Progress Banner --- */
  .strat-overall{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin-bottom:24px;}
  .strat-overall-card{background:var(--sand);border-radius:14px;padding:16px 14px;text-align:center;border:1px solid var(--line);}
  .strat-overall-card.green{border-color:#0B5A7A;background:#e8f5f0;}
  .strat-overall-card.yellow{border-color:#f0a500;background:#fff8e1;}
  .strat-overall-card.red{border-color:#c62828;background:#ffebee;}
  .strat-overall-card .ov-val{font-family:'IBM Plex Mono',monospace;font-weight:700;font-size:26px;margin-bottom:4px;}
  .strat-overall-card.green .ov-val{color:#0B5A7A;}
  .strat-overall-card.yellow .ov-val{color:#f0a500;}
  .strat-overall-card.red .ov-val{color:#c62828;}
  .strat-overall-card .ov-lbl{font-size:11.5px;color:var(--ink-soft);line-height:1.4;}

  /* --- Axis Cards Grid --- */
  .strat-axes{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px;margin-bottom:22px;}
  .strat-axis-card{border:1px solid var(--line);border-radius:14px;background:var(--paper);padding:16px 18px;position:relative;overflow:hidden;transition:.15s;}
  .strat-axis-card:hover{box-shadow:0 4px 16px rgba(11,90,122,0.12);}
  .strat-axis-card::before{content:"";position:absolute;top:0;right:0;width:4px;height:100%;border-radius:0 14px 14px 0;}
  .strat-axis-card.on-track::before{background:#0B5A7A;}
  .strat-axis-card.warning::before{background:#f0a500;}
  .strat-axis-card.off-track::before{background:#c62828;}
  .strat-axis-card.no-data::before{background:#bbb;}
  .sac-header{display:flex;align-items:center;gap:10px;margin-bottom:12px;}
  .sac-icon{font-size:22px;flex-shrink:0;}
  .sac-title{font-family:'Tajawal',sans-serif;font-weight:700;font-size:14px;color:var(--ink);line-height:1.3;}
  .sac-axis{font-size:11px;color:var(--ink-soft);font-family:'IBM Plex Mono',monospace;}
  .sac-status-badge{margin-inline-start:auto;padding:4px 10px;border-radius:100px;font-size:11px;font-weight:700;font-family:'IBM Plex Mono',monospace;white-space:nowrap;}
  .sac-status-badge.on-track{background:#e8f5f0;color:#0B5A7A;}
  .sac-status-badge.warning{background:#fff3cd;color:#856404;}
  .sac-status-badge.off-track{background:#ffebee;color:#c62828;}
  .sac-status-badge.no-data{background:#f5f5f5;color:#999;}
  .sac-values{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:8px;}
  .sac-actual{font-family:'IBM Plex Mono',monospace;font-weight:700;font-size:18px;color:var(--ink);}
  .sac-target-info{text-align:left;font-size:11px;color:var(--ink-soft);}
  .sac-target-info span{display:block;font-family:'IBM Plex Mono',monospace;font-weight:600;color:var(--ink);font-size:12px;}
  .sac-progress-bar{height:8px;background:var(--sand-2);border-radius:4px;overflow:hidden;margin-bottom:6px;}
  .sac-progress-fill{height:100%;border-radius:4px;transition:width .6s ease;}
  .on-track .sac-progress-fill{background:linear-gradient(90deg,#0B5A7A,#0D8BA8);}
  .warning .sac-progress-fill{background:linear-gradient(90deg,#f0a500,#ffc107);}
  .off-track .sac-progress-fill{background:linear-gradient(90deg,#c62828,#ef5350);}
  .no-data .sac-progress-fill{background:#ddd;}
  .sac-pct{font-family:'IBM Plex Mono',monospace;font-size:11.5px;font-weight:700;text-align:left;}
  .on-track .sac-pct{color:#0B5A7A;}
  .warning .sac-pct{color:#856404;}
  .off-track .sac-pct{color:#c62828;}
  .sac-note{font-size:11px;color:var(--ink-soft);margin-top:6px;line-height:1.5;border-top:1px solid var(--sand-2);padding-top:6px;}

  /* --- Quarterly Timeline --- */
  .strat-timeline{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;border-radius:10px;overflow:hidden;margin-bottom:22px;border:1px solid var(--line);}
  .qtl-cell{padding:12px 10px;text-align:center;background:var(--sand);}
  .qtl-cell.current{background:linear-gradient(135deg,#0B5A7A,#084a66);color:#fff;}
  .qtl-cell.done{background:#e8f5f0;}
  .qtl-cell .ql{font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700;margin-bottom:4px;}
  .qtl-cell.current .ql{color:rgba(255,255,255,0.8);}
  .qtl-cell.done .ql{color:#0B5A7A;}
  .qtl-cell .qm{font-size:11.5px;color:var(--ink-soft);margin-bottom:4px;}
  .qtl-cell.current .qm{color:rgba(255,255,255,0.7);}
  .qtl-cell .qpct{font-family:'IBM Plex Mono',monospace;font-weight:700;font-size:15px;color:var(--ink);}
  .qtl-cell.current .qpct{color:#fff;}
  .qtl-cell.done .qpct{color:#0B5A7A;}

  /* --- Settings Panel --- */
  .strat-settings-toggle{display:flex;align-items:center;gap:8px;margin-bottom:16px;}
  .strat-settings-btn{border:1px solid var(--line);background:var(--sand);color:var(--ink-soft);padding:7px 16px;border-radius:100px;font-size:12.5px;font-weight:600;cursor:pointer;font-family:'Cairo';transition:.15s;}
  .strat-settings-btn:hover{border-color:#0B5A7A;color:#0B5A7A;}
  .strat-settings-btn.active{background:#0B5A7A;color:#fff;border-color:#0B5A7A;}
  .strat-settings-panel{display:none;background:var(--sand);border:1px solid var(--line);border-radius:14px;padding:20px 22px;margin-bottom:20px;}
  .strat-settings-panel.open{display:block;}
  .strat-settings-panel h4{margin:0 0 14px;font-family:'Tajawal';font-size:15px;color:var(--ink);font-weight:700;}
  .strat-settings-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px;}
  .strat-input-row{display:flex;flex-direction:column;gap:4px;}
  .strat-input-row label{font-size:11.5px;color:var(--ink-soft);font-weight:600;}
  .strat-input-row input{border:1px solid var(--line);border-radius:8px;padding:7px 10px;font-family:'IBM Plex Mono',monospace;font-size:13px;color:var(--ink);background:var(--paper);direction:ltr;width:100%;}
  .strat-input-row input:focus{outline:none;border-color:#0B5A7A;}
  .strat-save-btn{margin-top:14px;background:#0B5A7A;color:#fff;border:none;border-radius:8px;padding:9px 22px;font-family:'Cairo';font-size:13px;font-weight:600;cursor:pointer;}
  .strat-save-btn:hover{background:#052a3a;}

  /* --- Category Strategic Badge (inside each section) --- */
  .cat-strat-badge{display:flex;align-items:center;gap:10px;background:var(--sand);border:1px solid var(--line);border-radius:10px;padding:10px 14px;margin-bottom:14px;flex-wrap:wrap;}
  .csb-icon{font-size:16px;}
  .csb-label{font-size:12px;color:var(--ink-soft);font-weight:600;}
  .csb-actual{font-family:'IBM Plex Mono',monospace;font-weight:700;font-size:14px;color:var(--ink);}
  .csb-sep{color:var(--line);font-size:12px;}
  .csb-target{font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--ink-soft);}
  .csb-bar-wrap{flex:1;min-width:80px;height:6px;background:var(--sand-2);border-radius:3px;overflow:hidden;}
  .csb-bar-fill{height:100%;border-radius:3px;transition:width .5s;}
  .csb-pct-lbl{font-family:'IBM Plex Mono',monospace;font-size:11.5px;font-weight:700;white-space:nowrap;}
  .csb-pct-lbl.on-track{color:#0B5A7A;}
  .csb-pct-lbl.warning{color:#856404;}
  .csb-pct-lbl.off-track{color:#c62828;}
  .csb-status{padding:3px 10px;border-radius:100px;font-size:10.5px;font-weight:700;font-family:'IBM Plex Mono';white-space:nowrap;}
  .csb-status.on-track{background:#e8f5f0;color:#0B5A7A;}
  .csb-status.warning{background:#fff3cd;color:#856404;}
  .csb-status.off-track{background:#ffebee;color:#c62828;}
  .csb-status.no-data{background:#f5f5f5;color:#999;}
  .analytics-section{background:var(--paper);border:1px solid var(--line);border-radius:18px;margin-bottom:24px;overflow:hidden;}
  .analytics-head{display:flex;align-items:center;gap:14px;padding:20px 24px;border-bottom:1px solid var(--sand-2);cursor:pointer;background:linear-gradient(90deg,var(--sand) 0%,transparent 100%);}
  .analytics-head .icon{width:44px;height:44px;border-radius:50%;background:var(--syria-green);color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;border:2px solid #0D8BA8;}
  .analytics-head h2{font-family:'Tajawal',sans-serif;font-weight:700;font-size:18px;margin:0;color:var(--ink);}
  .analytics-head p{margin:3px 0 0;font-size:13px;color:var(--ink-soft);}
  .analytics-head .chev{margin-inline-start:auto;font-size:18px;color:#0D8BA8;transition:transform .2s;}
  .analytics-section.open .chev{transform:rotate(180deg);}
  .analytics-body{padding:22px 24px 26px;display:none;}
  .analytics-section.open .analytics-body{display:block;}
  .analytics-controls{display:flex;align-items:center;gap:12px;flex-wrap:wrap;background:var(--sand);border:1px solid var(--line);border-radius:10px;padding:12px 14px;margin-bottom:16px;}
  .analytics-controls label{font-family:'Tajawal',sans-serif;font-weight:700;color:var(--ink);font-size:13px;}
  .analytics-controls select{border:1px solid var(--line);border-radius:8px;background:#fff;color:var(--ink);padding:8px 12px;font-family:'Cairo',sans-serif;font-size:13px;min-width:230px;}
  .analytics-note{font-size:12px;color:var(--ink-soft);}
  .analytics-kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:16px;}
  .analytics-kpi{border:1px solid var(--line);border-radius:10px;background:#fff;padding:12px;text-align:center;}
  .analytics-kpi .ak-value{font-family:'IBM Plex Mono',monospace;font-size:19px;font-weight:700;color:var(--ink);}
  .analytics-kpi .ak-label{font-size:11.5px;color:var(--ink-soft);margin-top:4px;}
  .analytics-kpi .ak-change{font-size:11px;margin-top:6px;font-weight:700;}
  .analytics-kpi .positive{color:#2e7d32;}.analytics-kpi .negative{color:#c62828;}.analytics-kpi .neutral{color:#777;}
  .analytics-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-bottom:16px;}
  .analytics-card{border:1px solid var(--line);border-radius:12px;background:#fff;padding:14px;}
  .analytics-card h3{font-family:'Tajawal',sans-serif;font-size:15px;color:var(--ink);margin:0 0 8px;}
  .analytics-card .chart-wrap{margin:0;min-height:260px;background:var(--sand);}
  .analytics-narrative{font-size:13px;color:var(--ink-soft);line-height:1.9;background:var(--sand);border-inline-start:3px solid #0D8BA8;padding:12px 14px;border-radius:6px;}
  @media(max-width:760px){.analytics-grid{grid-template-columns:1fr;}.analytics-body{padding:16px;}.analytics-head{padding:16px;}.analytics-controls{align-items:stretch;flex-direction:column;}.analytics-controls select{width:100%;}}

/* ===== LOCAL USERS / ROLES / AUDIT LOGS ===== */
.auth-methods{margin-top:16px;padding-top:16px;border-top:1px dashed var(--line);}
.auth-divider{display:flex;align-items:center;gap:10px;color:var(--ink-soft);font-size:11px;margin:12px 0;}
.auth-divider::before,.auth-divider::after{content:"";height:1px;background:var(--line);flex:1;}
#googleSignIn{display:flex;justify-content:center;min-height:44px;}
.auth-hint{font-size:11px;color:var(--ink-soft);line-height:1.7;margin-top:8px;}
.login-fields{display:grid;gap:10px;margin-bottom:12px;text-align:right;}
.login-fields input,.admin-form input,.admin-form select{width:100%;border:1px solid var(--line);border-radius:9px;padding:10px 12px;font-family:'Cairo',sans-serif;font-size:13px;color:var(--ink);background:var(--sand);}
.login-fields input:focus,.admin-form input:focus,.admin-form select:focus{outline:none;border-color:#0B5A7A;background:#fff;}
.admin-dashboard{background:var(--paper);border-radius:20px;padding:24px;max-width:980px;width:100%;max-height:90vh;overflow:auto;text-align:right;box-shadow:0 20px 70px rgba(0,0,0,.35);}
.admin-dashboard-head{display:flex;align-items:center;justify-content:space-between;gap:12px;border-bottom:1px solid var(--line);padding-bottom:15px;margin-bottom:18px;}
.admin-dashboard-head h3{margin:0;font-family:'Tajawal';font-size:20px;color:var(--ink);}
.admin-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;}
.admin-tab{border:1px solid var(--line);background:var(--sand);color:var(--ink);padding:8px 14px;border-radius:100px;cursor:pointer;font-family:'Cairo';font-weight:600;font-size:12px;}
.admin-tab.active{background:#0B5A7A;color:#fff;border-color:#0B5A7A;}
.admin-section{display:none;}
.admin-section.active{display:block;}
.users-table,.logs-table{width:100%;border-collapse:collapse;font-size:12px;}
.users-table th,.users-table td,.logs-table th,.logs-table td{padding:9px 8px;border-bottom:1px solid var(--sand-2);vertical-align:top;}
.users-table th,.logs-table th{background:var(--sand);color:var(--ink);font-family:'Tajawal';font-weight:700;position:sticky;top:0;}
.users-table tr:hover,.logs-table tr:hover{background:#fbfdfe;}
.role-badge{display:inline-flex;padding:3px 8px;border-radius:100px;font-size:10.5px;font-weight:700;}
.role-admin{background:#e8f5e9;color:#2e7d32;}
.role-editor{background:#e3f2fd;color:#1565c0;}
.role-viewer{background:#f3e5f5;color:#7b1fa2;}
.form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;}
.form-grid .full{grid-column:1/-1;}
.admin-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;}
.admin-message{font-size:12px;padding:9px 12px;border-radius:8px;margin-top:10px;display:none;}
.admin-message.show{display:block;}
.admin-message.success{background:#e8f5e9;color:#2e7d32;}
.admin-message.error{background:#ffebee;color:#c62828;}
.log-filter{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px;}
.log-filter input,.log-filter select{border:1px solid var(--line);border-radius:8px;padding:8px 10px;font-family:'Cairo';font-size:12px;}
.small-note{font-size:11px;color:var(--ink-soft);line-height:1.7;background:var(--sand);padding:9px 12px;border-radius:8px;margin-bottom:12px;}
.device-cell{font-size:11px;line-height:1.6;color:var(--ink-soft);}
.current-user-pill{display:inline-flex;align-items:center;gap:7px;padding:6px 10px;background:var(--sand);border:1px solid var(--line);border-radius:100px;font-size:11px;color:var(--ink);}
.btn-danger{background:#c62828;color:#fff;}
.btn-danger:hover{background:#a61f1f;}
.btn-warning{background:#f0a500;color:#fff;}
@media(max-width:760px){.form-grid,.log-filter{grid-template-columns:1fr;}.admin-dashboard{padding:16px;}.users-table,.logs-table{font-size:10.5px;}}


  /* ===== UNIFIED DESIGN SYSTEM ===== */
  :root{
    --radius-sm:10px;
    --radius-md:14px;
    --radius-lg:18px;
    --shadow-card:0 6px 22px rgba(11,90,122,.07);
    --shadow-hover:0 10px 30px rgba(11,90,122,.13);
  }
  body{background:#f3f8fa;}
  .toolbar{position:static;background:transparent;border:0;box-shadow:none;}
  .toolbar-inner{max-width:1180px;margin:0 auto;padding:0;}
  .filter-panel{position:sticky;top:10px;z-index:40;max-width:1180px;margin:20px auto 0;padding:20px 24px;background:rgba(255,255,255,.97);border:1px solid var(--line);border-radius:var(--radius-lg);box-shadow:0 10px 28px rgba(11,90,122,.14);backdrop-filter:blur(8px);}
  .filter-panel::before{content:"";position:absolute;inset:0;z-index:-1;border-radius:inherit;background:var(--paper);}
  .filter-panel .filter-head,.filter-panel .filter-fields,.filter-panel .active-filters{position:relative;}
  /* Compact filter layout */
  .filter-panel{padding:11px 16px;margin-top:12px;border-radius:12px;}
  .filter-head{gap:10px;margin-bottom:9px;}
  .filter-kicker{font-size:9px;margin-bottom:1px;}
  .filter-head h3{font-size:15px;}
  .filter-head p{font-size:10px;margin-top:1px;}
  .filter-fields{gap:8px;}
  .filter-field{gap:3px;font-size:10px;}
  .filter-field select{min-height:34px;padding:5px 9px;border-radius:8px;font-size:11px;}
  .filter-reset{padding:5px 10px;border-radius:7px;font-size:10px;}
  .active-filters{gap:5px;margin-top:8px;padding-top:7px;}
  .active-filters-label{font-size:9px;}
  .filter-tag{padding:3px 7px;font-size:9px;}

  /* ===== COLLAPSIBLE FILTER PANEL ===== */
  .filter-panel.collapsed .filter-body {
    display: none;
  }
  .filter-panel.collapsed #filterToggleIcon {
    transform: rotate(-90deg);
  }
  .filter-panel.collapsed {
    padding-bottom: 12px;
  }
  .filter-head {
    cursor: pointer;
    user-select: none;
  }
  @media(max-width:640px){.filter-panel{top:5px;margin:8px 10px 0;padding:10px 12px;}.filter-head{flex-direction:row;align-items:center;}.filter-reset{width:auto;}.filter-head p{display:none;}}
  .filter-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:18px;}
  .filter-kicker{display:block;color:var(--brass);font-size:11px;font-weight:700;margin-bottom:3px;}
  .filter-head h3{margin:0;color:var(--ink);font-family:'Tajawal',sans-serif;font-size:20px;}
  .filter-head p{margin:4px 0 0;color:var(--ink-soft);font-size:12px;}
  .filter-fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;}
  .filter-field{display:grid;gap:7px;color:var(--ink);font-size:12px;font-weight:700;}
  .filter-field select{width:100%;min-height:44px;padding:9px 13px;border:1px solid var(--line);border-radius:var(--radius-sm);background:var(--sand);color:var(--ink);font-family:'Cairo',sans-serif;font-size:13px;cursor:pointer;}
  .filter-field select:focus{outline:none;border-color:var(--brass);background:#fff;box-shadow:0 0 0 3px rgba(13,139,168,.12);}
  .filter-reset{border:1px solid var(--line);border-radius:var(--radius-sm);padding:8px 14px;background:var(--sand);color:var(--ink);font-family:'Cairo',sans-serif;font-size:12px;font-weight:700;cursor:pointer;}
  .filter-reset:hover{border-color:var(--brass);color:var(--brass);}
  .active-filters{display:flex;flex-wrap:wrap;align-items:center;gap:7px;margin-top:15px;padding-top:13px;border-top:1px dashed var(--line);}
  .active-filters-label{color:var(--ink-soft);font-size:11px;}
  .filter-tag{padding:5px 10px;border-radius:100px;background:#e0f5f5;color:var(--ink);font-size:11px;font-weight:700;}
  .data-source-bar,.last-updated-panel>div{border-radius:var(--radius-md);box-shadow:var(--shadow-card);}
  .kpi-grid{gap:16px;margin-bottom:30px;}
  .kpi{border:1px solid rgba(255,255,255,.35);border-radius:var(--radius-md);box-shadow:var(--shadow-card);transition:transform .18s ease,box-shadow .18s ease;}
  .kpi:hover{transform:translateY(-3px);box-shadow:var(--shadow-hover);}
  section.category,.map-section,.insights-section,.strategic-compass,.analytics-section{border-radius:var(--radius-lg);box-shadow:var(--shadow-card);}
  .cat-head,.map-head,.insights-head{padding:18px 22px;background:linear-gradient(90deg,#edf7fa 0%,#fff 72%);}
  .cat-body,.insights-body,.strategic-compass-body{padding:20px 22px 24px;}
  .ind-cards,.comparison-grid,.strat-axes,.analytics-grid{gap:16px;}
  .ind-card,.comparison-card,.analytics-card,.strat-axis-card,.strat-overall-card{border-radius:var(--radius-md);box-shadow:0 3px 14px rgba(11,90,122,.05);transition:transform .18s ease,box-shadow .18s ease;}
  .ind-card:hover,.comparison-card:hover,.analytics-card:hover,.strat-axis-card:hover,.strat-overall-card:hover{transform:translateY(-2px);box-shadow:var(--shadow-hover);}
  .gov-item{border-radius:var(--radius-md);box-shadow:0 2px 10px rgba(11,90,122,.04);}
  .chart-wrap{border:1px solid var(--sand-2);box-shadow:inset 0 1px 0 rgba(255,255,255,.6);}
  .insight-card,.monthly-report-card{border-radius:var(--radius-md);box-shadow:0 3px 14px rgba(11,90,122,.05);}
  .table-scroll{overflow:auto;border:1px solid var(--line);border-radius:var(--radius-md);background:#fff;box-shadow:var(--shadow-card);}
  .users-table,.logs-table{min-width:680px;border-collapse:separate;border-spacing:0;font-size:12px;}
  .users-table th,.users-table td,.logs-table th,.logs-table td{padding:12px 13px;border-bottom:1px solid var(--sand-2);}
  .users-table th,.logs-table th{background:#eaf5f8;color:var(--ink);font-size:12px;letter-spacing:.01em;}
  .users-table tbody tr:last-child td,.logs-table tbody tr:last-child td{border-bottom:0;}
  .users-table tbody tr:hover,.logs-table tbody tr:hover{background:#f4fbfc;}
  .admin-actions{display:flex;flex-wrap:wrap;gap:8px;}
  .small-note,.diag-box,.file-protocol-warning{border-radius:var(--radius-md);}
  input,select,textarea{transition:border-color .15s ease,box-shadow .15s ease;}
  input:focus,select:focus,textarea:focus{box-shadow:0 0 0 3px rgba(13,139,168,.12);}
  @media(max-width:640px){
    .filter-panel{top:6px;margin:14px 14px 0;padding:16px;}
    .filter-head{align-items:stretch;flex-direction:column;}
    .filter-reset{width:100%;}
    .filter-fields{grid-template-columns:1fr;}
    .cat-head,.map-head,.insights-head{padding:16px;}
    .cat-body,.insights-body,.strategic-compass-body{padding:16px;}
  }

  

  /* ===== COLLAPSIBLE FILTER PANEL ===== */
  .filter-panel.collapsed .filter-body {
    display: none;
  }
  .filter-panel.collapsed #filterToggleIcon {
    transform: rotate(-90deg);
  }
  .filter-panel.collapsed {
    padding-bottom: 12px;
  }
  .filter-head {
    cursor: pointer;
    user-select: none;
  }
  @media(max-width:640px){.filter-panel{top:5px;margin:8px 10px 0;padding:10px 12px;}.filter-head{flex-direction:row;align-items:center;}.filter-reset{width:auto;}.filter-head p{display:none;}}
  .storage-meter{margin:10px 0 14px;padding:11px 13px;border:1px solid var(--line);border-radius:10px;background:var(--sand);}
  .storage-meter-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px;color:var(--ink);font-size:12px;font-weight:700;}
  .storage-meter-head strong{color:var(--ink);font-family:'IBM Plex Mono',monospace;font-size:11px;direction:ltr;}
  .storage-meter-track{height:8px;overflow:hidden;border-radius:100px;background:var(--sand-2);}
  .storage-meter-fill{width:0%;height:100%;border-radius:inherit;background:linear-gradient(90deg,#0B5A7A,#0D8BA8);transition:width .35s ease;}
  .storage-meter-fill.warning{background:linear-gradient(90deg,#f0a500,#ffc107);}
  .storage-meter-fill.danger{background:linear-gradient(90deg,#c62828,#ef5350);}
  .storage-meter-note{margin-top:6px;color:var(--ink-soft);font-size:10.5px;line-height:1.5;}
  .btn-sync-users{background:#e0f5f5;color:var(--ink);border:1px solid var(--line);}
  .btn-sync-users:hover{background:#c8edf0;border-color:var(--brass);}
  .btn-sync-users:disabled{opacity:.65;cursor:wait;}
  /* ===== MODERN CHART VISUAL SYSTEM ===== */
  :root{
    --chart-blue:#2563eb;--chart-cyan:#06b6d4;--chart-teal:#14b8a6;--chart-purple:#8b5cf6;
    --chart-ink:#0f172a;--chart-muted:#64748b;--chart-grid:rgba(100,116,139,.14);
  }
  .chart-wrap,.analytics-card .chart-wrap,.modern-chart-card{
    position:relative;background:linear-gradient(145deg,#ffffff 0%,#f8fbff 100%);
    border:1px solid rgba(148,163,184,.22);border-radius:18px;
    box-shadow:0 12px 30px rgba(15,23,42,.06);overflow:hidden;
  }
  .chart-wrap{padding:18px 18px 16px;}
  .chart-wrap::before,.modern-chart-card::before{content:"";position:absolute;inset:0 0 auto;height:3px;background:linear-gradient(90deg,var(--chart-blue),var(--chart-cyan),var(--chart-teal));opacity:.9;}
  .chart-wrap canvas{filter:drop-shadow(0 5px 10px rgba(37,99,235,.05));}
  .analytics-card{background:rgba(255,255,255,.88);border:1px solid rgba(148,163,184,.2);border-radius:18px;padding:16px;box-shadow:0 10px 28px rgba(15,23,42,.05);}
  .analytics-card h3{color:var(--chart-ink);font-size:16px;margin:0 0 12px;font-weight:800;}
  .modern-chart-grid{gap:18px;}
  .modern-chart-card{padding:18px;transition:transform .2s ease,box-shadow .2s ease;}
  .modern-chart-card:hover{transform:translateY(-3px);box-shadow:0 18px 38px rgba(37,99,235,.12);}
  .modern-chart-title h3{color:var(--chart-ink);font-weight:800;}
  .modern-chart-title small{color:var(--chart-muted);}
  .modern-chart-canvas{min-height:280px;}
  @media(max-width:640px){.chart-wrap{padding:14px 10px;}.modern-chart-card{padding:14px;}.modern-chart-canvas{min-height:240px;}}

/* ========== SEPARATOR ========== */

@media(max-width:760px){.chart-wrap,.profile-card,.strat-axis-card,.comparison-card,.insight-card,.monthly-report-card{border-radius:14px;}.chart-wrap{padding:12px 10px;}}

/* ========== SEPARATOR ========== */

/* Executive Profile Modal */
  .gov-profile-overlay{position:fixed;inset:0;background:rgba(5,42,58,0.65);z-index:2000;display:none;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(4px);}
  .gov-profile-overlay.open{display:flex;}
  .gov-profile-box{background:var(--paper);border-radius:22px;max-width:1100px;width:100%;max-height:92vh;overflow-y:auto;box-shadow:0 24px 80px rgba(5,42,58,0.35);position:relative;border:1px solid var(--line);}
  .gov-profile-header{background:linear-gradient(135deg,#0B5A7A 0%,#052a3a 100%);color:#fff;padding:24px 28px 20px;border-radius:22px 22px 0 0;position:relative;overflow:hidden;}
  .gov-profile-header::after{content:"";position:absolute;inset:0;background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.03) 0 2px,transparent 2px 26px);pointer-events:none;}
  .gov-profile-header-inner{position:relative;display:flex;align-items:center;gap:18px;}
  .gov-avatar{width:72px;height:72px;border-radius:50%;background:rgba(255,255,255,0.15);border:3px solid rgba(255,255,255,0.4);display:flex;align-items:center;justify-content:center;font-size:36px;flex-shrink:0;}
  .gov-profile-title h2{font-family:'Tajawal',sans-serif;font-weight:900;font-size:22px;margin:0 0 4px;}
  .gov-profile-title p{margin:0;font-size:13px;opacity:0.85;line-height:1.5;}
  .gov-profile-close{position:absolute;top:16px;left:16px;background:rgba(255,255,255,0.15);border:none;color:#fff;width:36px;height:36px;border-radius:50%;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.15s;z-index:10;}
  .gov-profile-close:hover{background:rgba(255,255,255,0.3);}
  .gov-profile-body{padding:24px 28px 28px;}
  .profile-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;}
  @media(max-width:760px){.profile-grid{grid-template-columns:1fr;}}
  .profile-card{background:var(--sand);border:1px solid var(--line);border-radius:16px;padding:18px;}
  .profile-card h3{font-family:'Tajawal';font-weight:700;font-size:15px;color:var(--ink);margin:0 0 14px;display:flex;align-items:center;gap:8px;}
  .gauge-wrap{position:relative;width:180px;height:100px;margin:0 auto 10px;}
  .gauge-value{position:absolute;bottom:0;left:50%;transform:translateX(-50%);font-family:'IBM Plex Mono';font-size:28px;font-weight:700;color:var(--ink);}
  .gauge-label{text-align:center;font-size:12px;color:var(--ink-soft);margin-top:4px;}
  .insights-list{display:flex;flex-direction:column;gap:10px;}
  .insight-item{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-radius:10px;font-size:12.5px;line-height:1.7;}
  .insight-item.strength{background:#e8f5e9;border-inline-start:3px solid #4F7A63;}
  .insight-item.weakness{background:#ffebee;border-inline-start:3px solid #B5533C;}
  .insight-icon{font-size:18px;flex-shrink:0;margin-top:1px;}
  .profile-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px;padding-top:18px;border-top:1px dashed var(--line);}
  .profile-btn{border:none;border-radius:10px;padding:10px 20px;font-family:'Cairo';font-size:13px;font-weight:700;cursor:pointer;transition:.15s;display:inline-flex;align-items:center;gap:6px;}
  .profile-btn-primary{background:var(--syria-green);color:#fff;}
  .profile-btn-primary:hover{background:var(--syria-black);}
  .profile-btn-secondary{background:var(--sand);color:var(--ink);border:1px solid var(--line);}
  .profile-btn-secondary:hover{border-color:#0B5A7A;}

  /* Split Screen Compare */
  .compare-overlay{position:fixed;inset:0;background:rgba(5,42,58,0.7);z-index:2100;display:none;align-items:center;justify-content:center;padding:12px;backdrop-filter:blur(4px);}
  .compare-overlay.open{display:flex;}
  .compare-box{background:var(--paper);border-radius:22px;max-width:1200px;width:100%;max-height:94vh;overflow-y:auto;box-shadow:0 24px 80px rgba(5,42,58,0.4);border:1px solid var(--line);}
  .compare-header{background:linear-gradient(135deg,#0D8BA8,#0B5A7A);color:#fff;padding:18px 24px;border-radius:22px 22px 0 0;display:flex;align-items:center;justify-content:space-between;}
  .compare-header h2{font-family:'Tajawal';font-weight:900;font-size:18px;margin:0;}
  .compare-close{background:rgba(255,255,255,0.15);border:none;color:#fff;width:32px;height:32px;border-radius:50%;font-size:18px;cursor:pointer;}
  .compare-body{padding:20px 24px 24px;}
  .compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
  @media(max-width:760px){.compare-grid{grid-template-columns:1fr;}}
  .compare-col{background:var(--sand);border:1px solid var(--line);border-radius:16px;padding:16px;}
  .compare-col h4{font-family:'Tajawal';font-weight:700;font-size:15px;color:var(--ink);margin:0 0 12px;text-align:center;padding-bottom:10px;border-bottom:2px solid var(--line);}
  .compare-metric{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #e0e0e0;font-size:12.5px;}
  .compare-metric:last-child{border-bottom:none;}
  .compare-metric-label{color:var(--ink-soft);}
  .compare-metric-val{font-family:'IBM Plex Mono';font-weight:600;color:var(--ink);}
  .compare-winner{background:#e8f5e9 !important;border-color:#4F7A63 !important;}
  .compare-loser{background:#ffebee !important;border-color:#B5533C !important;}
  .vs-divider{display:flex;align-items:center;justify-content:center;font-family:'IBM Plex Mono';font-weight:700;font-size:20px;color:#0D8BA8;background:var(--paper);width:44px;height:44px;border-radius:50%;border:2px solid #0D8BA8;margin:0 auto 14px;}
  .gov-selector-row{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:16px;justify-content:center;}
  .gov-selector-chip{border:1px solid var(--line);background:var(--paper);color:var(--ink);padding:6px 14px;border-radius:100px;font-size:12.5px;font-weight:600;cursor:pointer;font-family:'Cairo';transition:.15s;}
  .gov-selector-chip:hover{border-color:#0D8BA8;}
  .gov-selector-chip.active{background:#0B5A7A;color:#fff;border-color:#0B5A7A;}

  /* ===== VISUAL POLISH OVERRIDES ===== */
  :root{--ink:#0b5573;--ink-2:#073c55;--sand:#f3f8fa;--sand-2:#e3eff3;--paper:#fff;--brass:#0b91ad;--brass-light:#8ed1df;--line:#c8dce3;--ink-soft:#58717e;--shadow-sm:0 3px 12px rgba(7,60,85,.07);--shadow-md:0 12px 32px rgba(7,60,85,.11)}
  html{scroll-behavior:smooth}
  body{background:linear-gradient(180deg,#eef6f8 0%,#f7fbfc 42%,#eef6f8 100%);font-size:14px;line-height:1.7}
  button,input,select{font:inherit}:focus-visible{outline:3px solid rgba(13,139,168,.35);outline-offset:2px}
  .masthead{padding:36px 28px 30px;background:radial-gradient(circle at 12% 18%,rgba(91,163,192,.3),transparent 28%),linear-gradient(135deg,#0b5a7a 0%,#084a66 55%,#052a3a 100%);border-bottom:5px solid var(--brass)}
  .masthead-inner{min-height:112px;gap:28px}.masthead-emblem{width:96px;height:96px}.eyebrow{letter-spacing:.16em}h1{font-size:clamp(21px,3vw,32px);letter-spacing:-.02em}.sub{font-size:clamp(14px,2vw,18px);font-weight:500;max-width:720px}.month-badge{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.35);backdrop-filter:blur(8px)}
  .toolbar{box-shadow:0 5px 18px rgba(7,60,85,.09)}.toolbar-inner{padding-top:12px;padding-bottom:12px}
  .chip,.ranking-mode-btn,.strat-settings-btn{box-shadow:0 1px 0 rgba(7,60,85,.04)}
  .chip:hover,.ranking-mode-btn:hover,.strat-settings-btn:hover,.btn:hover,.strat-save-btn:hover{transform:translateY(-1px);box-shadow:var(--shadow-sm)}
  .btn,.chip,.ranking-mode-btn,.strat-settings-btn,.strat-save-btn{transition:transform .18s ease,box-shadow .18s ease,background .18s ease,border-color .18s ease}
  .data-source-bar{box-shadow:var(--shadow-sm)}main{padding-top:34px}
  .kpi-grid{gap:16px;margin-bottom:42px}.kpi{background:linear-gradient(145deg,rgba(11,90,122,.96),rgba(8,74,102,.92));box-shadow:var(--shadow-md);border-color:rgba(255,255,255,.28);padding:18px 14px 16px;transition:transform .2s ease,box-shadow .2s ease}.kpi:hover{transform:translateY(-4px);box-shadow:0 16px 34px rgba(7,60,85,.18)}
  section.category,.map-section,.insights-section,.analytics-section{border-color:#d4e4e9;box-shadow:var(--shadow-sm);transition:box-shadow .2s ease,transform .2s ease}section.category:hover,.map-section:hover,.insights-section:hover,.analytics-section:hover{box-shadow:var(--shadow-md)}
  .cat-head,.map-head,.insights-head,.analytics-head{padding:22px 26px;background:linear-gradient(100deg,#f0f7f9 0%,#fff 78%)}
  .cat-head .icon,.map-head .icon,.analytics-head .icon{box-shadow:0 4px 10px rgba(7,60,85,.16)}.cat-body,.insights-body,.analytics-body{padding:24px 26px 30px}
  .chart-wrap{border:1px solid rgba(200,220,227,.7);box-shadow:inset 0 1px 0 rgba(255,255,255,.8)}
  .ind-card,.gov-item,.comparison-card,.analytics-card,.analytics-kpi,.strat-axis-card{box-shadow:0 2px 8px rgba(7,60,85,.04);transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}.ind-card:hover,.gov-item:hover,.comparison-card:hover,.analytics-card:hover,.analytics-kpi:hover,.strat-axis-card:hover{transform:translateY(-2px);box-shadow:var(--shadow-sm);border-color:#a9ccd7}
  .gov-item .gh{background:linear-gradient(90deg,#fbfdfe,#fff)}.file-drop-zone{border-color:#9fc7d2;box-shadow:inset 0 0 0 1px rgba(255,255,255,.7)}.file-drop-zone:hover{transform:translateY(-2px);box-shadow:var(--shadow-sm)}
  .strategic-compass{box-shadow:var(--shadow-md);border-color:#9dc6d1}.strategic-compass-head{padding:24px 28px;background:radial-gradient(circle at 10% 10%,rgba(91,163,192,.22),transparent 35%),linear-gradient(135deg,#0b5a7a,#052a3a)}
  .strat-overall-card,.strat-settings-panel,.ranking-mode-bar,.cat-strat-badge,.insight-card,.monthly-report-card{box-shadow:0 2px 8px rgba(7,60,85,.04)}
  .password-overlay{background:radial-gradient(circle at 15% 15%,rgba(91,163,192,.28),transparent 30%),linear-gradient(135deg,#0b5a7a,#052a3a)}.password-box{box-shadow:0 22px 70px rgba(0,0,0,.35)}
  @media(max-width:760px){.masthead{padding:28px 18px 24px}.masthead-inner{min-height:0}.data-panel,main{padding-left:16px;padding-right:16px}.toolbar-inner{padding-left:16px;padding-right:16px}.kpi-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.kpi{padding:14px 10px}.kpi .val{font-size:18px}.cat-head,.map-head,.insights-head,.analytics-head{padding:17px 16px}.cat-body,.insights-body,.analytics-body{padding:18px 16px 22px}.ind-cards,.strat-axes{grid-template-columns:1fr}#govMap{height:360px}.admin-dashboard{padding:18px}.form-grid{grid-template-columns:1fr}}
  @media(max-width:420px){.masthead-emblem{width:72px;height:72px}.kpi .seal{width:38px;height:38px;font-size:18px}.kpi .lbl{font-size:10.5px}.sub{font-size:14px}}
  @media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;transition-duration:.01ms!important;animation-duration:.01ms!important}}

  /* ===== DARK MODE & MOBILE EXPERIENCE ===== */
  .theme-toggle{position:fixed;inset-inline-start:18px;top:18px;z-index:1200;width:42px;height:42px;border:1px solid rgba(255,255,255,.35);border-radius:50%;background:rgba(5,42,58,.78);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:19px;box-shadow:0 6px 18px rgba(0,0,0,.18);backdrop-filter:blur(8px);transition:transform .2s ease,background .2s ease,box-shadow .2s ease}
  .theme-toggle:hover{transform:translateY(-2px) rotate(8deg);box-shadow:0 10px 24px rgba(0,0,0,.25)}
  html[data-theme="dark"]{color-scheme:dark;--ink:#d9eef3;--ink-2:#b6dce5;--sand:#102a35;--sand-2:#193d4a;--paper:#12303d;--line:#2d5967;--ink-soft:#a6c2ca;--shadow-sm:0 3px 14px rgba(0,0,0,.2);--shadow-md:0 14px 36px rgba(0,0,0,.3)}
  html[data-theme="dark"] body{background:linear-gradient(180deg,#0b202a,#0d2732 45%,#0a1d26);color:var(--ink)}
  html[data-theme="dark"] .toolbar,html[data-theme="dark"] .month-toolbar{background:#102a35;border-color:var(--line)}
  html[data-theme="dark"] .chip,html[data-theme="dark"] .month-toolbar .chip,html[data-theme="dark"] .ranking-mode-btn,html[data-theme="dark"] .strat-settings-btn{background:#173947;color:var(--ink);border-color:var(--line)}
  html[data-theme="dark"] .chip.active,html[data-theme="dark"] .ranking-mode-btn.active,html[data-theme="dark"] .strat-settings-btn.active{background:#0d8ba8;color:#fff;border-color:#0d8ba8}
  html[data-theme="dark"] .data-source-bar,html[data-theme="dark"] section.category,html[data-theme="dark"] .map-section,html[data-theme="dark"] .insights-section,html[data-theme="dark"] .analytics-section,html[data-theme="dark"] .password-box,html[data-theme="dark"] .modal-box,html[data-theme="dark"] .admin-dashboard{background:var(--paper);border-color:var(--line)}
  html[data-theme="dark"] .cat-head,html[data-theme="dark"] .map-head,html[data-theme="dark"] .insights-head,html[data-theme="dark"] .analytics-head,html[data-theme="dark"] .gov-item .gh{background:linear-gradient(100deg,#173947,#12303d)}
  html[data-theme="dark"] .gsheet-input,html[data-theme="dark"] .password-box input,html[data-theme="dark"] .login-fields input,html[data-theme="dark"] .admin-form input,html[data-theme="dark"] .admin-form select,html[data-theme="dark"] .change-pw-form input,html[data-theme="dark"] .change-pw-section input,html[data-theme="dark"] .strat-input-row input{background:#0d2732;color:var(--ink);border-color:var(--line)}
  html[data-theme="dark"] .ind-card,html[data-theme="dark"] .gov-item,html[data-theme="dark"] .comparison-card,html[data-theme="dark"] .analytics-card,html[data-theme="dark"] .analytics-kpi,html[data-theme="dark"] .strat-axis-card{background:#153846;border-color:var(--line)}
  html[data-theme="dark"] .chart-wrap,html[data-theme="dark"] .ranking-mode-bar,html[data-theme="dark"] .strat-settings-panel,html[data-theme="dark"] .cat-strat-badge,html[data-theme="dark"] .file-drop-zone,html[data-theme="dark"] .analytics-controls,html[data-theme="dark"] .analytics-narrative{background:#102a35;border-color:var(--line)}
  html[data-theme="dark"] .month-badge{background:#0d8ba8;border-color:#5ba3c0}html[data-theme="dark"] .theme-toggle{background:#d9eef3;color:#073c55;border-color:#8ed1df}
  @media(max-width:760px){.theme-toggle{top:12px;inset-inline-start:12px;width:38px;height:38px;font-size:17px}.toolbar-inner{gap:7px}.toolbar-label{width:100%;margin:0}.chip{padding:7px 11px;font-size:12px}.data-source-bar{padding:12px}.gsheet-input{min-width:0}.cat-head h2,.map-head h2,.insights-head h2,.analytics-head h2{font-size:16px}.cat-head p,.map-head p,.insights-head p,.analytics-head p{font-size:12px}.modal-overlay{padding:12px}.modal-box{max-height:92vh}.modal-header,.modal-body{padding:16px}.comparison-grid{grid-template-columns:1fr}.strat-timeline{grid-template-columns:repeat(2,1fr)}.strat-overall{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:480px){.theme-toggle{top:10px}.masthead{padding-top:52px}.masthead-inner{gap:10px}.masthead-content{width:100%}.eyebrow{justify-content:center;font-size:10px}.month-badge{font-size:11px;padding:6px 11px}.data-panel,main{padding-left:12px;padding-right:12px}.kpi-grid{margin-bottom:28px}.kpi .val{font-size:16px}.kpi .lbl{min-height:0}.map-legend{padding:10px 14px;gap:8px}.legend-item{font-size:11px}.modal-box{border-radius:14px}.password-overlay{padding:12px}.password-box{padding:28px 20px;border-radius:16px}}
  .masthead-actions{flex-shrink:0;display:flex;align-items:flex-start;margin-inline-start:auto;position:relative;z-index:2}.top-logout-btn{border:1px solid rgba(255,255,255,.4);border-radius:10px;background:rgba(198,40,40,.9);color:#fff;padding:9px 14px;font-family:'Cairo',sans-serif;font-size:12.5px;font-weight:700;cursor:pointer;box-shadow:0 5px 14px rgba(0,0,0,.18);transition:transform .18s ease,background .18s ease,box-shadow .18s ease;white-space:nowrap}.top-logout-btn:hover{background:#b71c1c;transform:translateY(-2px);box-shadow:0 8px 18px rgba(0,0,0,.25)}
  .leaflet-control-layers{border:1px solid var(--line)!important;border-radius:10px!important;box-shadow:var(--shadow-sm)!important;font-family:'Cairo',sans-serif;font-size:12px;direction:rtl;text-align:right}.leaflet-control-layers-expanded{padding:8px 10px!important;background:rgba(255,255,255,.96)}html[data-theme="dark"] .leaflet-control-layers-expanded{background:rgba(18,48,61,.96);color:var(--ink);border-color:var(--line)!important}html[data-theme="dark"] .leaflet-control-layers-separator{border-color:var(--line)}
  @media(max-width:760px){.masthead-actions{position:absolute;top:8px;inset-inline-end:0}.top-logout-btn{padding:7px 10px;font-size:11px}.top-logout-btn span{display:none}.masthead{padding-top:52px}.leaflet-control-layers-expanded{font-size:11px;padding:6px 8px!important}}
  @media(max-width:480px){.masthead-actions{top:4px}.top-logout-btn{padding:6px 9px}.leaflet-control-layers{max-width:170px}}
  /* ===== MODERN CHART PRESENTATION ===== */
  .chart-wrap{position:relative;min-height:250px;padding:18px;border-radius:16px;background:linear-gradient(145deg,rgba(255,255,255,.72),rgba(232,243,246,.72));border:1px solid rgba(158,195,205,.5);box-shadow:inset 0 1px 0 rgba(255,255,255,.9),0 8px 22px rgba(7,60,85,.06);overflow:hidden}
  .chart-wrap::before{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(120deg,rgba(13,139,168,.06),transparent 42%)}
  .chart-wrap canvas{position:relative;z-index:1;max-height:none}
  .analytics-card{background:linear-gradient(145deg,var(--paper),rgba(243,248,250,.82));border-radius:16px;padding:16px;box-shadow:0 8px 24px rgba(7,60,85,.07)}
  .analytics-card h3{display:flex;align-items:center;gap:8px;font-size:16px;margin:0 0 12px;padding-bottom:10px;border-bottom:1px solid var(--sand-2)}
  .analytics-kpi{position:relative;overflow:hidden;background:linear-gradient(145deg,var(--paper),var(--sand));border-radius:14px;padding:16px 12px;box-shadow:0 6px 18px rgba(7,60,85,.06);transition:transform .2s ease,box-shadow .2s ease}
  .analytics-kpi::after{content:"";position:absolute;inset-inline-end:-22px;bottom:-28px;width:80px;height:80px;border-radius:50%;background:rgba(13,139,168,.1)}
  .analytics-kpi:hover{transform:translateY(-3px);box-shadow:0 12px 24px rgba(7,60,85,.12)}
  .analytics-kpi .ak-value{position:relative;z-index:1;font-size:21px;color:var(--ink)}
  html[data-theme="dark"] .chart-wrap{background:linear-gradient(145deg,#153846,#102a35);border-color:var(--line);box-shadow:inset 0 1px 0 rgba(255,255,255,.04),0 10px 26px rgba(0,0,0,.18)}
  html[data-theme="dark"] .analytics-card,html[data-theme="dark"] .analytics-kpi{background:linear-gradient(145deg,#153846,#12303d);border-color:var(--line)}
  @media(max-width:760px){.chart-wrap{min-height:220px;padding:12px}.analytics-card{padding:12px}.analytics-card h3{font-size:14px}.analytics-kpi .ak-value{font-size:18px}}
  @media(max-width:480px){.chart-wrap{min-height:200px;padding:9px}.analytics-kpis{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}}
  /* ===== DIVERSE MODERN INDICATOR CHARTS ===== */
  .modern-visuals-section{background:var(--paper);border:1px solid var(--line);border-radius:20px;margin-bottom:24px;overflow:hidden;box-shadow:var(--shadow-md)}
  .modern-visuals-head{display:flex;align-items:center;gap:14px;padding:22px 26px;background:linear-gradient(110deg,#0b5a7a,#0d8ba8 58%,#5ba3c0);color:#fff}
  .modern-visuals-icon{width:48px;height:48px;border-radius:15px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.35);font-size:24px}
  .modern-visuals-head h2{font-family:'Tajawal';font-size:20px;margin:0;font-weight:900}.modern-visuals-head p{margin:3px 0 0;color:rgba(255,255,255,.82);font-size:12.5px}
  .modern-visuals-body{padding:22px 24px 28px}.modern-chart-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.modern-chart-card{min-width:0;background:linear-gradient(145deg,var(--paper),var(--sand));border:1px solid var(--line);border-radius:17px;padding:16px;box-shadow:0 7px 20px rgba(7,60,85,.06);transition:transform .2s ease,box-shadow .2s ease}.modern-chart-card:hover{transform:translateY(-3px);box-shadow:0 14px 28px rgba(7,60,85,.12)}.modern-chart-card.wide{grid-column:span 2}
  .modern-chart-title{display:flex;align-items:center;gap:10px;margin-bottom:12px}.modern-chart-title>span{width:34px;height:34px;border-radius:11px;background:rgba(13,139,168,.13);color:var(--brass);display:flex;align-items:center;justify-content:center;font-size:18px}.modern-chart-title h3{margin:0;font-family:'Tajawal';font-size:15px;color:var(--ink)}.modern-chart-title small{display:block;color:var(--ink-soft);font-size:11px;margin-top:2px}.modern-chart-canvas{height:280px;position:relative}.modern-chart-canvas.donut-canvas{height:300px}.modern-chart-canvas.radar-canvas{height:330px}.modern-chart-canvas.governor-canvas{height:350px}.modern-chart-empty{height:100%;display:flex;align-items:center;justify-content:center;color:var(--ink-soft);font-size:13px;background:var(--sand);border-radius:12px}
  html[data-theme="dark"] .modern-chart-card{background:linear-gradient(145deg,#153846,#12303d);border-color:var(--line)}html[data-theme="dark"] .modern-visuals-section{background:#12303d;border-color:var(--line)}
  @media(max-width:760px){.modern-visuals-body{padding:16px}.modern-chart-grid{grid-template-columns:1fr}.modern-chart-card.wide{grid-column:auto}.modern-chart-canvas{height:250px}.modern-chart-canvas.donut-canvas{height:270px}.modern-chart-canvas.radar-canvas{height:290px}.modern-chart-canvas.governor-canvas{height:300px}}
  @media(max-width:480px){.modern-visuals-head{padding:17px 16px}.modern-visuals-head h2{font-size:17px}.modern-visuals-body{padding:12px}.modern-chart-card{padding:12px}.modern-chart-title h3{font-size:14px}.modern-chart-canvas{height:220px}.modern-chart-canvas.donut-canvas{height:240px}.modern-chart-canvas.radar-canvas{height:250px}.modern-chart-canvas.governor-canvas{height:270px}}

/* ═══════════════════════════════════════
   MAP MARKERS & GOVERNORATE PROFILE
   ═══════════════════════════════════════ */

/* Custom map markers */
.custom-marker {
  background: transparent !important;
  border: none !important;
}
.custom-marker div {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.custom-marker div:hover {
  transform: scale(1.25);
  box-shadow: 0 4px 16px rgba(0,0,0,0.4) !important;
}

/* Governorate Profile Overlay */
.gov-profile-overlay {
  position: fixed;
  inset: 0;
  background: rgba(5, 42, 58, 0.6);
  z-index: 200;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
  backdrop-filter: blur(4px);
}
.gov-profile-overlay.open {
  display: flex;
}
.gov-profile-box {
  background: var(--paper);
  border-radius: 20px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 80px rgba(5, 42, 58, 0.35);
  border: 2px solid #0D8BA8;
}
.gov-profile-head {
  padding: 22px 26px;
  border-bottom: 2px solid var(--sand-2);
  display: flex;
  align-items: center;
  gap: 14px;
  background: linear-gradient(135deg, #0B5A7A, #052a3a);
  color: white;
  border-radius: 18px 18px 0 0;
}
.gov-profile-head h3 {
  margin: 0;
  font-family: 'Tajawal';
  font-weight: 900;
  font-size: 20px;
}
.gov-profile-head .close-btn {
  margin-inline-start: auto;
  background: rgba(255,255,255,0.15);
  border: none;
  color: white;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.15s;
}
.gov-profile-head .close-btn:hover {
  background: rgba(255,255,255,0.3);
}
.gov-profile-body {
  padding: 24px 26px;
}
.profile-kpi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}
.profile-kpi {
  background: var(--sand);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 14px;
  text-align: center;
}
.profile-kpi .pk-val {
  font-family: 'IBM Plex Mono';
  font-weight: 700;
  font-size: 20px;
  color: var(--ink);
}
.profile-kpi .pk-lbl {
  font-size: 11px;
  color: var(--ink-soft);
  margin-top: 4px;
}
.profile-section-title {
  font-family: 'Tajawal';
  font-weight: 700;
  font-size: 15px;
  color: var(--ink);
  margin: 20px 0 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--sand-2);
}
.profile-text-block {
  background: var(--sand);
  border-radius: 10px;
  padding: 14px 16px;
  margin-bottom: 12px;
  font-size: 13px;
  line-height: 1.9;
  color: var(--ink-soft);
}
