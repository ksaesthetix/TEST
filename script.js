const OWNERS = ['Mark Holmes','Sanya Sabir','Andy Fox','Zilong Zhang','Gozde Can','Christy Tsui','Anil Patel','Ee Ling','Silvana','Shakeel Chowdhury','Kieran Shah','Shana Ray','Lucy Clark','Nic Hopper','Jean-Luc','Verisk SBS / Shakeel Chowdhury','Shakeel Chowdhury / Nic Hopper','Sanya Sabir / Andy Fox','Gozde / Damien (Required for Approval)'];
const AVATAR_COLORS = ['#4DA4BC','#22A884','#FA9E09','#706F6F','#BCBDDC','#C4D0FA'];
const WD_TAGS = ['Pre-WD1','WD1','WD2'];
const WD_COLORS = { 'Pre-WD1':'#FFC107', 'WD1':'#C4D0FA', 'WD2':'#8EC7D2' };
const WD_TEXT = { 'Pre-WD1':'#2B2D41', 'WD1':'#2B2D41', 'WD2':'#2B2D41' };
 
let tasks = [
  {id:1,name:'Refresh Input file (Cat Analysis) to ensure DQ checks pick up any new items.',system:'Manual',actionTime:'WD1 minus 5\n25th March 2026',primaryOwner:'Mark Holmes',secondaryOwner:'Sanya Sabir',status:'open',comments:'Semi-Automated',tags:['Pre-WD1']},
  {id:2,name:'Creation of Block Booked Claims file (Handover to Claims)',system:'IDP',actionTime:'WD1 minus 5\n25th March 2026',primaryOwner:'Andy Fox',secondaryOwner:'Zilong Zhang',status:'open',comments:'Zilong to book meeting with Mark/Sanya regarding changes to this step - Automation. Zilong to provide permissions to allow Sanya/Mark to run the job needed to create this file',tags:['Pre-WD1']},
  {id:3,name:'Run reserving model in Alteryx and reconciliation model, then compare to previous month file (check Missing PCoL, Undocumented PCoL, and Changes Loss Type)',system:'Manual',actionTime:'WD1 minus 5\n25th March 2026',primaryOwner:'Gozde Can',secondaryOwner:'Christy Tsui',status:'open',comments:'',tags:['Pre-WD1']},
  {id:4,name:'DQ gaps identified and communicated to UW / Claims Ops for correction at source',system:'Manual',actionTime:'WD1 minus 5\n25th March 2026',primaryOwner:'Anil Patel',secondaryOwner:'Ee Ling / Silvana',status:'open',comments:'',tags:['Pre-WD1']},
  {id:5,name:'Apps Support to send trigger email for Month End',system:'N/A',actionTime:'WD1 minus 5\n25th March 2026',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'Agreed to send out on Thurs 26th',tags:['Pre-WD1']},
  {id:6,name:'Process Operational Movements and Confirmations from the 30th Jan',system:'Sequel Claims',actionTime:'WD1 minus 1\n31st March 2026',primaryOwner:'Mark Holmes',secondaryOwner:'Sanya Sabir',status:'open',comments:'',tags:['WD1']},
  {id:7,name:'Pre-close items (process USMs, SCMs, Cash - Settlement exceptions and manual movements posted)',system:'Eclipse',actionTime:'WD1 minus 1\n31st March 2026',primaryOwner:'Shana Ray',secondaryOwner:'Lucy Clark',status:'open',comments:'',tags:['WD1']},
  {id:8,name:'Eclipse and Claims Sync',system:'Sequel Claims',actionTime:'WD1 minus 1\n31st March 2026',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD1']},
  {id:9,name:'Check No unmatched USM & SCM on period close screen',system:'Eclipse',actionTime:'WD1 minus 1\n31st March 2026',primaryOwner:'Shana Ray',secondaryOwner:'Lucy Clark',status:'open',comments:'',tags:['WD1']},
  {id:10,name:'Refresh Input file (Cat Analysis) to ensure DQ checks pick up any new items.',system:'Manual',actionTime:'WD1 minus 1\n31st March 2026',primaryOwner:'Mark Holmes',secondaryOwner:'Sanya Sabir',status:'open',comments:'Zilong to book meeting with Mark/Sanya regarding changes to this step - Automation.',tags:['Pre-WD1']},
  {id:11,name:'Creation of Block Booked Claims file',system:'IDP',actionTime:'WD1 minus 1\n31st March 2026',primaryOwner:'Andy Fox',secondaryOwner:'Zilong Zhang',status:'open',comments:'Zilong to book meeting with Mark/Sanya regarding changes to this step - Automation. Zilong to provide permissions to allow Sanya/Mark to run the job needed to create this file',tags:['Pre-WD1']},
  {id:12,name:'Run reserving model in Alteryx and reconciliation model, then compare to previous month file (check Missing PCoL, Undocumented PCoL, and Changes Loss Type)',system:'Alteryx',actionTime:'WD1 minus 1\n31st March 2026',primaryOwner:'Gozde Can',secondaryOwner:'Christy Tsui',status:'open',comments:'',tags:['Pre-WD1']},
  {id:13,name:'Update Missing Primary Cause of Losses',system:'Sequel Claims',actionTime:'WD1 minus 1\n31st March 2026',primaryOwner:'Sanya Sabir',secondaryOwner:'Mark Holmes',status:'open',comments:'',tags:['Pre-WD1']},
  {id:14,name:'Data team to verify whether Samsara is running and stop if needed',system:'IDP',actionTime:'WD1 minus 1\n31st March 2026',primaryOwner:'Nic Hopper',secondaryOwner:'Andy Fox',status:'open',comments:'',tags:['Pre-WD1']},
  {id:15,name:'Data team to ensure there are no party xref duplicates',system:'IDP',actionTime:'WD1 minus 1\n31st March 2026',primaryOwner:'Nic Hopper',secondaryOwner:'Andy Fox',status:'open',comments:'',tags:['Pre-WD1']},
  {id:16,name:'Review overnight jobs: Eclipse (USM, UCM, SCM loaded)',system:'Eclipse (USM, UCM, SCM loaded)',actionTime:'By 7 am on WD1',primaryOwner:'Verisk SBS / Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['Pre-WD1']},
  {id:17,name:'Review overnight jobs: IDP (IDP Load)',system:'IDP (IDP Load)',actionTime:'By 7 am on WD1',primaryOwner:'Shakeel Chowdhury / Nic Hopper',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['Pre-WD1']},
  {id:18,name:'Review overnight jobs: FAH (Tandem Load)',system:'FAH (Tandem Load)',actionTime:'By 8 am on WD1',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['Pre-WD1']},
  {id:19,name:'Reconciliation: Eclipse vs IDP (raw/base/curated)',system:'Eclipse vs IDP reconciliation',actionTime:'By 6 am on WD1',primaryOwner:'Shakeel Chowdhury / Nic Hopper',secondaryOwner:'Kieran Shah / Sumeet Kumar',status:'open',comments:'Manual rec ran by Nic',tags:['Pre-WD1']},
  {id:20,name:'Reconciliation: IDP v/s Policy extracts',system:'IDP v/s Policy reconciliation',actionTime:'By 6 am on WD1',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD1']},
  {id:21,name:'Reconciliation: FAH reconciliation (including Tandem vs IDP Curated)',system:'FAH reconciliation',actionTime:'By 8 am on WD1',primaryOwner:'Shakeel Chowdhury / Nic Hopper',secondaryOwner:'Kieran Shah / Sumeet Kumar',status:'open',comments:'Manual rec ran by Nic',tags:['WD1']},
  {id:22,name:'Additional Reconciliation of FAH (including Tandem vs IDP Curated)',system:'FAH reconciliation',actionTime:'By 8 am on WD1',primaryOwner:'Nic Hopper',secondaryOwner:'',status:'open',comments:'Tandem appears to finish at 7:30 approx every day - we would require a manual rec to ensure this can be done earlier than 10 am scheduled time.',tags:['WD1']},
  {id:23,name:'ROE Checks and Load to Coda & Eclipse: PowerBI',system:'PowerBI',actionTime:'By 9.30am on WD1',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD1']},
  {id:24,name:'ROE Checks and Load to Coda & Eclipse: Coda',system:'Coda',actionTime:'By 9.30am on WD1',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD1']},
  {id:25,name:'ROE Checks and Load to Coda & Eclipse: Eclipse',system:'Eclipse',actionTime:'By 9.30am on WD1',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD1']},
  {id:26,name:'Refresh FX rates report - FAH',system:'PowerBI',actionTime:'By 9.30 am on WD1',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'As per Kieran\'s email, this is done automatically.',tags:['WD1']},
  {id:27,name:'IDP Transaction mapping update',system:'IDP',actionTime:'By 9.30am on WD1',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD1']},
  {id:28,name:'Review Ignite Triggers',system:'Eclipse Replica server',actionTime:'By 9.30 am on WD1',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'This will remain to be disabled this month.',tags:['WD1']},
  {id:29,name:'Provide Mark/Sanya of SCM/LIMCLM - Unmatched (Required) view.',system:'Eclipse',actionTime:'By 9.30 am on WD0',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD1']},
  {id:30,name:'Notify Finance about any unmatched USM/SCM\'s',system:'Eclipse',actionTime:'By 9.30 am on WD1',primaryOwner:'Shana Ray',secondaryOwner:'Lucy Clark',status:'open',comments:'',tags:['WD1']},
  {id:31,name:'EPI Attestation Report',system:'',actionTime:'By 12 WD2',primaryOwner:'Shana Ray',secondaryOwner:'Lucy Clark',status:'open',comments:'',tags:['WD1']},
  {id:32,name:'IDP Backups to be taken',system:'IDP',actionTime:'By 11:30am WD1',primaryOwner:'Nic Hopper',secondaryOwner:'Sumeet Kumar',status:'open',comments:'11',tags:['WD1']},
  {id:33,name:'FAH Backups to be taken',system:'FAH',actionTime:'Once Tandem has completed.',primaryOwner:'Nic Hopper',secondaryOwner:'Jean-Luc',status:'open',comments:'',tags:['WD1']},
  {id:34,name:'Process Operational Movements and Confirmations.',system:'Sequel Claims',actionTime:'By 3pm - WD1',primaryOwner:'Mark Holmes',secondaryOwner:'Sanya Sabir',status:'open',comments:'',tags:['WD1']},
  {id:35,name:'Process USMs from overnight load',system:'Eclipse',actionTime:'By 3 pm - WD1',primaryOwner:'Shana Ray',secondaryOwner:'Lucy Clark',status:'open',comments:'',tags:['WD1']},
  {id:36,name:'Eclipse and Claims Sync',system:'Sequel Claims',actionTime:'3pm – WD1',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD1']},
  {id:37,name:'Reconcile USM vs UCM',system:'Eclipse',actionTime:'3pm - WD1',primaryOwner:'Shana Ray',secondaryOwner:'Lucy Clark',status:'open',comments:'',tags:['WD1']},
  {id:38,name:'Eclipse Period Close',system:'Eclipse',actionTime:'4pm - WD1',primaryOwner:'Shana Ray',secondaryOwner:'Lucy Clark',status:'open',comments:'',tags:['WD1']},
  {id:39,name:'Refresh Input file (Cat Analysis) to ensure DQ checks pick up any new items.',system:'Manual',actionTime:'By 10 AM WD1',primaryOwner:'Sanya Sabir',secondaryOwner:'Mark Holmes',status:'open',comments:'Zilong to discuss with Mark/Sanya and handover this one - will be backup in ME if needed.',tags:['WD1']},
  {id:40,name:'Populate CAT split for any new additions',system:'Manual',actionTime:'By 12PM WD1',primaryOwner:'Sanya Sabir',secondaryOwner:'Mark Holmes',status:'open',comments:'',tags:['WD1']},
  {id:41,name:'Handover to Data team to run the ingestion process',system:'IDP (IDP Load)',actionTime:'By 10:45am WD1',primaryOwner:'Sanya Sabir / Andy Fox',secondaryOwner:'Mark Holmes',status:'open',comments:'Zilong to discuss with Mark/Sanya and handover this one - will be backup in ME if needed.',tags:['WD1']},
  {id:42,name:'Review output file and send file for review to Actuarial team - Using output control from step 3',system:'Manual',actionTime:'By 11:00am WD1',primaryOwner:'Sanya Sabir',secondaryOwner:'Mark Holmes',status:'open',comments:'',tags:['WD1']},
  {id:43,name:'Run reserving model in Alteryx and reconciliation model and compare to previous months file (check Missing PCoL, Undocumented PCoL, and Changes Loss Type)',system:'Manual',actionTime:'By 11:30am WD1',primaryOwner:'Gozde / Damien (Required for Approval)',secondaryOwner:'Christy Tsui / Shirley Huang/Tom Smith (for approval)',status:'open',comments:'',tags:['WD1']},
  {id:44,name:'Final file review and handover to FAH',system:'Manual',actionTime:'Around 15 mins',primaryOwner:'Mark Holmes',secondaryOwner:'Sanya Sabir',status:'open',comments:'',tags:['WD1']},
  {id:45,name:'Run FAH Job',system:'FAH',actionTime:'By 12:15 pm WD1',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD1']},
  {id:46,name:'Send FAH-BBC reconciliation report',system:'Manual',actionTime:'By 12:15 pm WD1',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD1']},
  {id:47,name:'Gross Premiums – Postbox Postings - USGAAP & UKGAAP',system:'Manual / FAH (Postbox)',actionTime:'By 9pm WD1',primaryOwner:'Anil Patel',secondaryOwner:'Ee Ling / Silvana',status:'open',comments:'',tags:['WD1']},
  {id:48,name:'Gross Claims – Postbox Postings - USGAAP & UKGAAP',system:'Manual / FAH (Postbox)',actionTime:'By 9pm WD1',primaryOwner:'Anil Patel',secondaryOwner:'Ee Ling / Silvana',status:'open',comments:'Kieran to add the granular steps - Phinsys to support',tags:['WD1']},
  {id:49,name:'Gross Premiums - Postbox Reconcillations - (Failed Postings Rec & Postbox to GL Rec)',system:'Manual / FAH (Postbox)',actionTime:'By 9pm WD1',primaryOwner:'Anil Patel',secondaryOwner:'Ee Ling / Silvana',status:'open',comments:'Kieran to add the granular steps - Phinsys to support',tags:['WD1']},
  {id:50,name:'Review overnight jobs: Eclipse (USM, UCM, SCM loaded)',system:'Eclipse (USM, UCM, SCM loaded)',actionTime:'By 9 am on WD2',primaryOwner:'Verisk SBS / Kieran Shah',secondaryOwner:'Shakeel Chowdhury',status:'open',comments:'',tags:['WD2']},
  {id:51,name:'Review overnight jobs: IDP (IDP Load)',system:'IDP (IDP Load)',actionTime:'By 9 am on WD2 (OOH morning support is available)',primaryOwner:'Shakeel Chowdhury / Nic Hopper',secondaryOwner:'Kieran Shah / Sumeet Kumar',status:'open',comments:'',tags:['WD2']},
  {id:52,name:'Review overnight jobs: FAH (Tandem Load)',system:'FAH (Tandem Load)',actionTime:'By 9 am on WD2',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD2']},
  {id:53,name:'Review Eclipse ROE Updater',system:'Eclipse',actionTime:'By 9:30 am - WD2',primaryOwner:'Kieran Shah',secondaryOwner:'Shakeel Chowdhury',status:'open',comments:'This will remain turned off due to the bug which we had faced during Decembers run',tags:['WD2']},
  {id:54,name:'Reconciliation: Eclipse vs IDP (raw/base/curated)',system:'Eclipse vs IDP reconciliation',actionTime:'By 9.30am on WD2',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD2']},
  {id:55,name:'Reconciliation: IDP v/s Policy extracts',system:'IDP vs Policy reconciliation',actionTime:'By 9.30am on WD2',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD2']},
  {id:56,name:'Reconciliation: FAH reconciliation (including Tandem vs IDP Curated)',system:'FAH reconciliation',actionTime:'By 9.30 am on WD2',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD2']},
  {id:57,name:'IDP Backups to be taken',system:'IDP',actionTime:'By 11:30am WD2',primaryOwner:'Nic Hopper',secondaryOwner:'Sumeet Kumar',status:'open',comments:'',tags:['WD2']},
  {id:58,name:'Breached UW Report - to be sent to Gary',system:'',actionTime:'By 12 WD2',primaryOwner:'Shakeel Chowdhury',secondaryOwner:'Kieran Shah',status:'open',comments:'',tags:['WD2']},
  {id:59,name:'Ceded Premiums – QS and XoL Calculations - Refresh Tandem Cube',system:'Manual / FAH Excel Cube',actionTime:'By 5pm WD2',primaryOwner:'Anil Patel',secondaryOwner:'Ee Ling / Silvana',status:'open',comments:'',tags:['WD2']},
  {id:60,name:'Ceded Premiums - Alteryx models run - QS and XoL Calculations',system:'Manual / Alteryx',actionTime:'By 5pm WD2',primaryOwner:'Anil Patel',secondaryOwner:'Ee Ling / Silvana',status:'open',comments:'',tags:['WD2']},
  {id:61,name:'Refresh ITD Cube',system:'Manual / FAH Excel Cube',actionTime:'By 5pm WD2',primaryOwner:'Anil Patel',secondaryOwner:'Ee Ling / Silvana',status:'open',comments:'',tags:['WD2']},
  {id:62,name:'Refresh Gross Cube for Ceded Ops',system:'Manual / FAH Excel Cube',actionTime:'By 5pm WD2',primaryOwner:'Anil Patel',secondaryOwner:'Ee Ling / Silvana',status:'open',comments:'',tags:['WD2']},
  {id:63,name:'Confirm Data Availability for Actuarial & Ceded Usage',system:'Manual',actionTime:'By 5pm WD2',primaryOwner:'Anil Patel',secondaryOwner:'Ee Ling / Silvana',status:'open',comments:'',tags:['WD2']},
];
let nextId = 64;
let activeWD = 'All';
let filterAssignee = '';
let filterStatus = '';
 
function initPeople() {
  const sel = document.getElementById('filter-assignee');
  OWNERS.forEach(p => {
    const o = document.createElement('option');
    o.value = p; o.textContent = p;
    sel.appendChild(o);
  });
  sel.addEventListener('change', e => { filterAssignee = e.target.value; render(); });
  document.getElementById('filter-status').addEventListener('change', e => { filterStatus = e.target.value; render(); });
}
 
function initWDTabs() {
  const wrap = document.getElementById('wd-tabs');
  ['All', ...WD_TAGS].forEach(w => {
    const btn = document.createElement('button');
    btn.className = 'wd-tab' + (w === activeWD ? ' active' : '');
    btn.textContent = w;
    btn.onclick = () => {
      activeWD = w;
      document.querySelectorAll('.wd-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    };
    wrap.appendChild(btn);
  });
}
 
function avatarInitials(name) { return name.split(' ').map(x => x[0]).join('').slice(0, 2); }
function avatarColor(name) { return AVATAR_COLORS[OWNERS.indexOf(name) % AVATAR_COLORS.length] || '#22A884'; }
 
function statusPill(status) {
  const map = { open:'status-open', review:'status-review', done:'status-done', overdue:'status-overdue' };
  const label = { open:'Open', review:'In review', done:'Done', overdue:'Overdue' };
  return `<span class="status-pill ${map[status] || 'status-open'}">${label[status] || status}</span>`;
}
 
function tagPills(tags) {
  return tags.map(t =>
    `<span class="tag-pill" style="background:${WD_COLORS[t]||'#eee'};color:${WD_TEXT[t]||'#333'}">${t}</span>`
  ).join(' ');
}
 
function filteredTasks() {
  return tasks.filter(t => {
    if (activeWD !== 'All' && !t.tags.includes(activeWD)) return false;
    if (filterAssignee && t.primaryOwner !== filterAssignee) return false;
    if (filterStatus && t.status !== filterStatus) return false;
    return true;
  });
}
 
function render() {
  const ft = filteredTasks();
  const done = ft.filter(t => t.status === 'done').length;
  const total = ft.length;
  const pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById('prog-label').textContent = `${done} / ${total} complete`;
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-pct').textContent = pct + '%';
  document.getElementById('open-count').textContent =
    tasks.filter(t => t.status === 'open' || t.status === 'overdue').length + ' open';
 
  const statuses = ['open','review','done','overdue'];
  const sLabels = ['Open','In review','Done','Overdue'];
  const stats = document.getElementById('stats-row');
  stats.innerHTML = statuses.map((s, i) => {
    const n = ft.filter(t => t.status === s).length;
    const color = s==='overdue' ? '#c0392b' : s==='done' ? '#1a7a5a' : '#2B2D41';
    return `<div class="stat-card">
      <div class="stat-num" style="color:${color}">${n}</div>
      <div class="stat-lbl">${sLabels[i]}</div>
    </div>`;
  }).join('');
 
  const table = document.getElementById('task-table');
  if (ft.length === 0) {
    table.innerHTML = `<div class="empty-state">No tasks match your filters.<br>
      <span style="color:#22A884;cursor:pointer" onclick="document.getElementById('btn-add-task').click()">+ Add your first task</span>
    </div>`;
    return;
  }
 
  table.innerHTML = `
    <div class="task-header">
      <span></span><span>Task</span><span>System</span><span>Action time</span>
      <span>Primary owner</span><span>Secondary owner</span><span>Status</span><span>Comments</span><span></span>
    </div>
    ${ft.map(t => {
      return `<div class="task-row${t.status === 'done' ? ' done' : ''}" id="row-${t.id}">
        <div class="cb${t.status === 'done' ? ' checked' : ''}" onclick="toggleDone(${t.id})"></div>
        <div class="task-name" title="${t.name}">${t.name}${t.comments ? ` <span style="color:#BCBDDC;font-size:10px">●</span>` : ''}</div>
        <div class="assignee-pill">
          <div class="avatar" style="background:${avatarColor(t.system)}">${avatarInitials(t.system)}</div>
          <span>${t.system}</span>
        </div>
        <div class="date-cell">${t.actionTime || ''}</div>
        <div class="assignee-pill">
          <div class="avatar" style="background:${avatarColor(t.primaryOwner)}">${avatarInitials(t.primaryOwner)}</div>
          <span>${t.primaryOwner}</span>
        </div>
        <div class="reviewer-pill">${t.secondaryOwner || ''}</div>
        <div>${statusPill(t.status)}</div>
        <div class="reviewer-pill" title="${t.comments || ''}">${t.comments || ''}</div>
        <div class="actions-cell">
          <button class="btn-icon" title="Edit" onclick="openEdit(${t.id})">✎</button>
          <button class="btn-icon" title="Delete" onclick="deleteTask(${t.id})" style="color:#ED7A7A">✕</button>
        </div>
      </div>`;
    }).join('')}`;
}
 
function toggleDone(id) {
  const t = tasks.find(x => x.id === id);
  if (!t) return;
  t.status = t.status === 'done' ? 'open' : 'done';
  render();
}
 
function deleteTask(id) {
  tasks = tasks.filter(x => x.id !== id);
  render();
}
 
function openAdd() { showModal(null); }
function openEdit(id) { showModal(tasks.find(t => t.id === id)); }
 
function showModal(task) {
  const isEdit = !!task;
  const selTags = isEdit ? (task.tags || []) : [];
  const mc = document.getElementById('modal-container');
  mc.innerHTML = `<div class="modal-bg" id="modal-bg">
    <div class="modal" onclick="event.stopPropagation()">
      <div class="modal-title"><span></span>${isEdit ? 'Edit task' : 'New task'}</div>
      <div class="form-grid">
        <div class="form-field full">
          <label>Task name</label>
          <input id="f-name" type="text" value="${isEdit ? task.name : ''}" placeholder="e.g. Refresh input file">
        </div>
        <div class="form-field">
          <label>System</label>
          <input id="f-system" type="text" value="${isEdit ? task.system : ''}" placeholder="e.g. Manual">
        </div>
        <div class="form-field">
          <label>Action time</label>
          <input id="f-action" type="text" value="${isEdit ? task.actionTime : ''}" placeholder="e.g. WD1 minus 1">
        </div>
            <div class="form-field">
          <label>Primary owner</label>
          <select id="f-assignee">${OWNERS.map(p => `<option value="${p}"${isEdit && task.primaryOwner === p ? ' selected' : ''}>${p}</option>`).join('')}</select>
        </div>
        <div class="form-field">
          <label>Secondary owner</label>
          <input id="f-secondary" type="text" value="${isEdit ? task.secondaryOwner : ''}" placeholder="Optional">
        </div>
        <div class="form-field">
          <label>Status</label>
          <select id="f-status">
            ${['open','review','done','overdue'].map(s =>
              `<option value="${s}"${isEdit && task.status === s ? ' selected' : ''}>${{open:'Open',review:'In review',done:'Done',overdue:'Overdue'}[s]}</option>`
            ).join('')}
          </select>
        </div>
        <div class="form-field full">
          <label>Working Day tags</label>
          <div class="wd-tag-grid" id="wd-tag-grid">
            ${WD_TAGS.map(w => `<button type="button" class="wd-toggle${selTags.includes(w) ? ' sel' : ''}" onclick="toggleTag(this,'${w}')">${w}</button>`).join('')}
          </div>
        </div>
        <div class="form-field full">
          <label>Comments</label>
          <textarea id="f-notes" placeholder="Optional comments…">${isEdit ? task.comments : ''}</textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-cancel" onclick="closeModal()">Cancel</button>
        <button class="btn-save" onclick="saveTask(${isEdit ? task.id : 'null'})">${isEdit ? 'Save changes' : 'Add task'}</button>
      </div>
    </div>
  </div>`;
  document.getElementById('modal-bg').onclick = closeModal;
}
 
function toggleTag(btn, tag) { btn.classList.toggle('sel'); }
function closeModal() { document.getElementById('modal-container').innerHTML = ''; }
 
function saveTask(id) {
  const name = document.getElementById('f-name').value.trim();
  if (!name) return;
  const tags = [...document.querySelectorAll('#wd-tag-grid .wd-toggle.sel')].map(b => b.textContent);
  const data = {
    name,
    system: document.getElementById('f-system').value.trim(),
    actionTime: document.getElementById('f-action').value.trim(),
    primaryOwner: document.getElementById('f-assignee').value,
    secondaryOwner: document.getElementById('f-secondary').value.trim(),
    status: document.getElementById('f-status').value,
    tags,
    comments: document.getElementById('f-notes').value
  };
  if (id === null) {
    tasks.push({ id: nextId++, ...data });
  } else {
    const t = tasks.find(x => x.id === id);
    Object.assign(t, data);
  }
  closeModal();
  render();
}

function untickAllTasks() {
  tasks.forEach(t => { t.status = 'open'; });
  render();
  const cb = document.getElementById('cb-untick-all');
  if (cb) cb.checked = false;
}

document.getElementById('cb-untick-all').addEventListener('change', e => {
  if (e.target.checked) untickAllTasks();
});

document.getElementById('btn-add-task').addEventListener('click', openAdd);
initPeople();
initWDTabs();
render();