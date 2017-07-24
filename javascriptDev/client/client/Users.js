define(["org/eclipse/edt/rui/widgets/Button", "org/eclipse/edt/rui/widgets/TextField", "eglx/ui/rui/eze$$Event", "org/eclipse/edt/rui/widgets/Box", "ezekw$$dojo/widgets/eze$$DojoButton", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/TextLabel", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "ezekw$$dojo/widgets/eze$$DojoDialog"],function(){
	egl.loadCSS("css/NewProject.css");
	egl.defineRUIHandler("client.client", "Users", {
		"eze$$fileName" : "client/client/Users.egl",
		"eze$$runtimePropertiesFile" : "client/client/Users",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.bodyBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Body = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.contentBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.IDBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.IDTextlabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.IDLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.reviseButton = new egl.dojo.widgets.DojoButton();
				this.nameBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.nameTextlabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.nameLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.birthdayBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.birthdayTextLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.birthdayLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.nclassBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.nclassTextlabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.nclassLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.classBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.mclassTextlabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.mclassLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.teacherBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.teacherTextlabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.teacherLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.parentsBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.parentsTextlabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.parentsLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.addressBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.addressTextLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.addressLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.editfield = new egl.dojo.widgets.DojoDialog();
				this.RevBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.content = new egl.org.eclipse.edt.rui.widgets.Box();
				this.saveButton = new egl.org.eclipse.edt.rui.widgets.Button();
				this.closeButton = new egl.org.eclipse.edt.rui.widgets.Button();
				this.ID = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.name = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.birthday = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.nclass = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.mclass = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.teacher = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.parents = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.address = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.IDTextField = new egl.org.eclipse.edt.rui.widgets.TextField();
				this.nameTextField = new egl.org.eclipse.edt.rui.widgets.TextField();
				this.birthdayTextField = new egl.org.eclipse.edt.rui.widgets.TextField();
				this.nclassTextField = new egl.org.eclipse.edt.rui.widgets.TextField();
				this.mclassTextField = new egl.org.eclipse.edt.rui.widgets.TextField();
				this.teacherTextField = new egl.org.eclipse.edt.rui.widgets.TextField();
				this.parentsTextField = new egl.org.eclipse.edt.rui.widgets.TextField();
				this.addressTextField = new egl.org.eclipse.edt.rui.widgets.TextField();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,22,618,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,22,631,8, this);
					this.ui.setRows(2);
					egl.atLine(this.eze$$fileName,22,641,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,22,658,34, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.contentBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.bodyBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,23,700,13, this);
					this.ui.setWidth("800");
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,24,747,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,24,767,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,24,776,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,24,747,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,24,734,54, this);
					this.bodyBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,24,790,9, this);
					this.bodyBox.setPadding(8);
					egl.atLine(this.eze$$fileName,25,807,19, this);
					this.bodyBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Body,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,26,851,13, this);
					this.Body.setText("\u4e2a\u4eba\u4fe1\u606f");
					egl.atLine(this.eze$$fileName,27,872,13, this);
					this.Body.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,28,893,15, this);
					this.Body.setFontSize("25");
					egl.atLine(this.eze$$fileName,29,916,21, this);
					this.Body.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,30,945,21, this);
					this.Body.setColor("YellowGreen");
					egl.atLine(this.eze$$fileName,31,974,17, this);
					this.Body.setPaddingLeft(350);
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,32,1029,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,32,1049,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,32,1058,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,32,1029,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,32,1016,54, this);
					this.contentBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,32,1072,9, this);
					this.contentBox.setPadding(8);
					egl.atLine(this.eze$$fileName,33,1089,99, this);
					this.contentBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.IDBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nameBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.birthdayBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nclassBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.classBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.teacherBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.parentsBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.addressBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,34,1196,11, this);
					this.contentBox.setColumns(1);
					egl.atLine(this.eze$$fileName,35,1227,9, this);
					this.IDBox.setPadding(8);
					egl.atLine(this.eze$$fileName,36,1244,49, this);
					this.IDBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.IDTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.IDLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.reviseButton,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,37,1325,12, this);
					this.IDTextlabel.setText("\u5b66\u53f7\uff1a");
					egl.atLine(this.eze$$fileName,38,1345,11, this);
					this.IDTextlabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,39,1364,15, this);
					this.IDTextlabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,40,1387,21, this);
					this.IDTextlabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,41,1416,15, this);
					this.IDTextlabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,42,1459,13, this);
					this.IDLabel.setText("1101");
					egl.atLine(this.eze$$fileName,43,1480,11, this);
					this.IDLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,44,1499,15, this);
					this.IDLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,45,1522,21, this);
					this.IDLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,46,1577,15, this);
					this.reviseButton.setText("\u4fee\u6539\u4e2a\u4eba\u4fe1\u606f");
					egl.atLine(this.eze$$fileName,47,1600,16, this);
					this.reviseButton.setMarginLeft(400);
					egl.atLine(this.eze$$fileName,48,1624,13, this);
					this.reviseButton.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,49,1645,15, this);
					this.reviseButton.setFontSize("14");
					egl.atLine(this.eze$$fileName,49,1663,30, this);
					this.reviseButton.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Users.prototype.editButton_onClick, ""));
					egl.atLine(this.eze$$fileName,50,1714,9, this);
					this.nameBox.setPadding(8);
					egl.atLine(this.eze$$fileName,51,1731,39, this);
					this.nameBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nameTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,52,1804,12, this);
					this.nameTextlabel.setText("\u59d3\u540d\uff1a");
					egl.atLine(this.eze$$fileName,53,1824,11, this);
					this.nameTextlabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,54,1843,15, this);
					this.nameTextlabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,55,1866,21, this);
					this.nameTextlabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,56,1895,15, this);
					this.nameTextlabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,57,1940,11, this);
					this.nameLabel.setText("\u5f20\u5f64");
					egl.atLine(this.eze$$fileName,58,1959,11, this);
					this.nameLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,59,1978,15, this);
					this.nameLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,60,2001,21, this);
					this.nameLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,61,2048,9, this);
					this.birthdayBox.setPadding(8);
					egl.atLine(this.eze$$fileName,62,2065,47, this);
					this.birthdayBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.birthdayTextLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.birthdayLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,63,2150,14, this);
					this.birthdayTextLabel.setText("\u51fa\u751f\u65e5\u671f\uff1a");
					egl.atLine(this.eze$$fileName,64,2172,11, this);
					this.birthdayTextLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,65,2191,15, this);
					this.birthdayTextLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,66,2214,21, this);
					this.birthdayTextLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,67,2243,15, this);
					this.birthdayTextLabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,68,2291,19, this);
					this.birthdayLabel.setText("07/24/1999");
					egl.atLine(this.eze$$fileName,69,2318,11, this);
					this.birthdayLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,70,2337,15, this);
					this.birthdayLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,71,2360,21, this);
					this.birthdayLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,72,2406,9, this);
					this.nclassBox.setPadding(8);
					egl.atLine(this.eze$$fileName,73,2423,43, this);
					this.nclassBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nclassTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nclassLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,74,2502,14, this);
					this.nclassTextlabel.setText("\u6240\u5728\u5e74\u7ea7\uff1a");
					egl.atLine(this.eze$$fileName,75,2524,11, this);
					this.nclassTextlabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,76,2543,15, this);
					this.nclassTextlabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,77,2566,21, this);
					this.nclassTextlabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,78,2595,15, this);
					this.nclassTextlabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,79,2642,12, this);
					this.nclassLabel.setText("\u4e00\u5e74\u7ea7");
					egl.atLine(this.eze$$fileName,80,2662,11, this);
					this.nclassLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,81,2681,15, this);
					this.nclassLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,82,2704,21, this);
					this.nclassLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,83,2748,9, this);
					this.classBox.setPadding(8);
					egl.atLine(this.eze$$fileName,84,2765,43, this);
					this.classBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.mclassTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.mclassLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,85,2844,14, this);
					this.mclassTextlabel.setText("\u6240\u5728\u73ed\u7ea7\uff1a");
					egl.atLine(this.eze$$fileName,86,2866,11, this);
					this.mclassTextlabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,87,2885,15, this);
					this.mclassTextlabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,88,2908,21, this);
					this.mclassTextlabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,89,2937,15, this);
					this.mclassTextlabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,90,2984,13, this);
					this.mclassLabel.setText("\uff081\uff09\u73ed");
					egl.atLine(this.eze$$fileName,91,3005,11, this);
					this.mclassLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,92,3024,15, this);
					this.mclassLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,93,3047,21, this);
					this.mclassLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,94,3093,9, this);
					this.teacherBox.setPadding(8);
					egl.atLine(this.eze$$fileName,95,3110,45, this);
					this.teacherBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.teacherTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.teacherLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,96,3192,13, this);
					this.teacherTextlabel.setText("\u73ed\u4e3b\u4efb\uff1a");
					egl.atLine(this.eze$$fileName,97,3213,11, this);
					this.teacherTextlabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,98,3232,15, this);
					this.teacherTextlabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,99,3255,21, this);
					this.teacherTextlabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,100,3284,15, this);
					this.teacherTextlabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,101,3332,11, this);
					this.teacherLabel.setText("\u674e\u8273");
					egl.atLine(this.eze$$fileName,102,3351,11, this);
					this.teacherLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,103,3370,15, this);
					this.teacherLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,104,3393,21, this);
					this.teacherLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,105,3439,9, this);
					this.parentsBox.setPadding(8);
					egl.atLine(this.eze$$fileName,106,3456,45, this);
					this.parentsBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.parentsTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.parentsLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,107,3538,16, this);
					this.parentsTextlabel.setText("\u5bb6\u957f\u8054\u7cfb\u65b9\u5f0f\uff1a");
					egl.atLine(this.eze$$fileName,108,3562,11, this);
					this.parentsTextlabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,109,3581,15, this);
					this.parentsTextlabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,110,3604,21, this);
					this.parentsTextlabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,111,3633,15, this);
					this.parentsTextlabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,112,3681,20, this);
					this.parentsLabel.setText("13711111111");
					egl.atLine(this.eze$$fileName,113,3709,11, this);
					this.parentsLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,114,3728,15, this);
					this.parentsLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,115,3751,21, this);
					this.parentsLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,116,3797,9, this);
					this.addressBox.setPadding(8);
					egl.atLine(this.eze$$fileName,117,3817,45, this);
					this.addressBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.addressTextLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.addressLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,118,3899,14, this);
					this.addressTextLabel.setText("\u5bb6\u5ead\u4f4f\u5740\uff1a");
					egl.atLine(this.eze$$fileName,119,3924,11, this);
					this.addressTextLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,120,3946,15, this);
					this.addressTextLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,121,3972,21, this);
					this.addressTextLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,122,4004,15, this);
					this.addressTextLabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,123,4051,24, this);
					this.addressLabel.setText("\u6c88\u9633\u5e02\u7687\u59d1\u533a\u9ec4\u6cb3\u5317\u5927\u8857253\u53f7");
					egl.atLine(this.eze$$fileName,124,4086,11, this);
					this.addressLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,125,4106,15, this);
					this.addressLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,126,4130,21, this);
					this.addressLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,130,4203,14, this);
					this.editfield.title = "\u4fee\u6539\u4e2a\u4eba\u4fe1\u606f";
					egl.atLine(this.eze$$fileName,130,4219,10, this);
					this.editfield.setPadding(20);
					egl.atLine(this.eze$$fileName,131,4241,28, this);
					this.editfield.setBackgroundColor("AliceBlue");
					egl.atLine(this.eze$$fileName,132,4280,16, this);
					this.editfield.draggable = true;
					egl.atLine(this.eze$$fileName,133,4307,17, this);
					this.editfield.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.RevBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,134,4343,9, this);
					this.RevBox.setPadding(4);
					egl.atLine(this.eze$$fileName,134,4354,10, this);
					this.RevBox.setColumns(1);
					egl.atLine(this.eze$$fileName,135,4374,18, this);
					this.RevBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.content,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,137,4436,10, this);
					this.content.setColumns(1);
					egl.atLine(this.eze$$fileName,137,4447,27, this);
					this.content.setBackgroundColor("lightBlue");
					egl.atLine(this.eze$$fileName,137,4476,9, this);
					this.content.setPadding(1);
					var eze$LNNTemp11 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,146,5193,64, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp12 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp12;
						}).call(this);
						egl.atLine(this.eze$$fileName,146,5201,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,146,5212,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,146,5222,34, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.saveButton,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.closeButton,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,146,5193,64, this);
						eze$LNNTemp11 = eze$SettingTarget1;
					}
					var eze$LNNTemp10 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,145,5105,66, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp13 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp13;
						}).call(this);
						egl.atLine(this.eze$$fileName,145,5113,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,145,5124,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,145,5134,36, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.address,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.addressTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,145,5105,66, this);
						eze$LNNTemp10 = eze$SettingTarget1;
					}
					var eze$LNNTemp9 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,144,5017,66, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp14 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp14;
						}).call(this);
						egl.atLine(this.eze$$fileName,144,5025,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,144,5036,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,144,5046,36, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.parents,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.parentsTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,144,5017,66, this);
						eze$LNNTemp9 = eze$SettingTarget1;
					}
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,143,4929,66, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp15 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp15;
						}).call(this);
						egl.atLine(this.eze$$fileName,143,4937,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,143,4948,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,143,4958,36, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.teacher,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.teacherTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,143,4929,66, this);
						eze$LNNTemp8 = eze$SettingTarget1;
					}
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,142,4843,64, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp16 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp16;
						}).call(this);
						egl.atLine(this.eze$$fileName,142,4851,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,142,4862,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,142,4872,34, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.mclass,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.mclassTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,142,4843,64, this);
						eze$LNNTemp7 = eze$SettingTarget1;
					}
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,141,4757,64, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp17 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp17;
						}).call(this);
						egl.atLine(this.eze$$fileName,141,4765,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,141,4776,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,141,4786,34, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nclass,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nclassTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,141,4757,64, this);
						eze$LNNTemp6 = eze$SettingTarget1;
					}
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,140,4667,68, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp18 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp18;
						}).call(this);
						egl.atLine(this.eze$$fileName,140,4675,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,140,4686,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,140,4696,38, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.birthday,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.birthdayTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,140,4667,68, this);
						eze$LNNTemp5 = eze$SettingTarget1;
					}
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,139,4585,60, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp19 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp19;
						}).call(this);
						egl.atLine(this.eze$$fileName,139,4593,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,139,4604,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,139,4614,30, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.name,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nameTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,139,4585,60, this);
						eze$LNNTemp4 = eze$SettingTarget1;
					}
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,138,4507,56, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp20 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp20;
						}).call(this);
						egl.atLine(this.eze$$fileName,138,4515,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,138,4526,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,138,4536,26, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ID,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.IDTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,138,4507,56, this);
						eze$LNNTemp3 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,138,4495,763, this);
					this.content.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp3,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp4,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp5,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp6,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp7,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp8,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp9,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp10,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp11,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,148,5294,9, this);
					this.saveButton.setText("\u4fdd\u5b58");
					egl.atLine(this.eze$$fileName,149,5313,13, this);
					this.saveButton.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,150,5336,15, this);
					this.saveButton.setFontSize("12");
					egl.atLine(this.eze$$fileName,151,5361,20, this);
					this.saveButton.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Users.prototype.saveInfo, ""));
					egl.atLine(this.eze$$fileName,152,5409,9, this);
					this.closeButton.setText("\u5173\u95ed");
					egl.atLine(this.eze$$fileName,153,5428,13, this);
					this.closeButton.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,154,5451,15, this);
					this.closeButton.setFontSize("12");
					egl.atLine(this.eze$$fileName,155,5476,22, this);
					this.closeButton.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Users.prototype.hideDialog, ""));
					egl.atLine(this.eze$$fileName,157,5529,10, this);
					this.ID.setText("\u5b66\u53f7\uff1a");
					egl.atLine(this.eze$$fileName,158,5561,10, this);
					this.name.setText("\u59d3\u540d\uff1a");
					egl.atLine(this.eze$$fileName,159,5597,12, this);
					this.birthday.setText("\u51fa\u751f\u65e5\u671f\uff1a");
					egl.atLine(this.eze$$fileName,160,5633,12, this);
					this.nclass.setText("\u6240\u5728\u5e74\u7ea7\uff1a");
					egl.atLine(this.eze$$fileName,161,5669,12, this);
					this.mclass.setText("\u6240\u5728\u73ed\u7ea7\uff1a");
					egl.atLine(this.eze$$fileName,162,5706,11, this);
					this.teacher.setText("\u73ed\u4e3b\u4efb\uff1a");
					egl.atLine(this.eze$$fileName,163,5742,14, this);
					this.parents.setText("\u5bb6\u957f\u8054\u7cfb\u7535\u8bdd\uff1a");
					egl.atLine(this.eze$$fileName,164,5781,12, this);
					this.address.setText("\u5bb6\u5ead\u4f4f\u5740\uff1a");
					egl.atLine(this.eze$$fileName,166,5837,15, this);
					this.IDTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,167,5887,15, this);
					this.nameTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,168,5937,15, this);
					this.birthdayTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,169,5985,15, this);
					this.nclassTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,170,6033,15, this);
					this.mclassTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,171,6082,15, this);
					this.teacherTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,172,6131,15, this);
					this.parentsTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,173,6180,15, this);
					this.addressTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,19,490,29, this);
					this.initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;");
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"eze$$clone": function() {
				var ezert$$1 = this;
				var ezert$$2 = new egl.client.client.Users();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.bodyBox = ezert$$1.bodyBox === null ? null : ezert$$1.bodyBox.eze$$clone();
				ezert$$2.Body = ezert$$1.Body === null ? null : ezert$$1.Body.eze$$clone();
				ezert$$2.contentBox = ezert$$1.contentBox === null ? null : ezert$$1.contentBox.eze$$clone();
				ezert$$2.IDBox = ezert$$1.IDBox === null ? null : ezert$$1.IDBox.eze$$clone();
				ezert$$2.IDTextlabel = ezert$$1.IDTextlabel === null ? null : ezert$$1.IDTextlabel.eze$$clone();
				ezert$$2.IDLabel = ezert$$1.IDLabel === null ? null : ezert$$1.IDLabel.eze$$clone();
				ezert$$2.reviseButton = ezert$$1.reviseButton === null ? null : ezert$$1.reviseButton;
				ezert$$2.nameBox = ezert$$1.nameBox === null ? null : ezert$$1.nameBox.eze$$clone();
				ezert$$2.nameTextlabel = ezert$$1.nameTextlabel === null ? null : ezert$$1.nameTextlabel.eze$$clone();
				ezert$$2.nameLabel = ezert$$1.nameLabel === null ? null : ezert$$1.nameLabel.eze$$clone();
				ezert$$2.birthdayBox = ezert$$1.birthdayBox === null ? null : ezert$$1.birthdayBox.eze$$clone();
				ezert$$2.birthdayTextLabel = ezert$$1.birthdayTextLabel === null ? null : ezert$$1.birthdayTextLabel.eze$$clone();
				ezert$$2.birthdayLabel = ezert$$1.birthdayLabel === null ? null : ezert$$1.birthdayLabel.eze$$clone();
				ezert$$2.nclassBox = ezert$$1.nclassBox === null ? null : ezert$$1.nclassBox.eze$$clone();
				ezert$$2.nclassTextlabel = ezert$$1.nclassTextlabel === null ? null : ezert$$1.nclassTextlabel.eze$$clone();
				ezert$$2.nclassLabel = ezert$$1.nclassLabel === null ? null : ezert$$1.nclassLabel.eze$$clone();
				ezert$$2.classBox = ezert$$1.classBox === null ? null : ezert$$1.classBox.eze$$clone();
				ezert$$2.mclassTextlabel = ezert$$1.mclassTextlabel === null ? null : ezert$$1.mclassTextlabel.eze$$clone();
				ezert$$2.mclassLabel = ezert$$1.mclassLabel === null ? null : ezert$$1.mclassLabel.eze$$clone();
				ezert$$2.teacherBox = ezert$$1.teacherBox === null ? null : ezert$$1.teacherBox.eze$$clone();
				ezert$$2.teacherTextlabel = ezert$$1.teacherTextlabel === null ? null : ezert$$1.teacherTextlabel.eze$$clone();
				ezert$$2.teacherLabel = ezert$$1.teacherLabel === null ? null : ezert$$1.teacherLabel.eze$$clone();
				ezert$$2.parentsBox = ezert$$1.parentsBox === null ? null : ezert$$1.parentsBox.eze$$clone();
				ezert$$2.parentsTextlabel = ezert$$1.parentsTextlabel === null ? null : ezert$$1.parentsTextlabel.eze$$clone();
				ezert$$2.parentsLabel = ezert$$1.parentsLabel === null ? null : ezert$$1.parentsLabel.eze$$clone();
				ezert$$2.addressBox = ezert$$1.addressBox === null ? null : ezert$$1.addressBox.eze$$clone();
				ezert$$2.addressTextLabel = ezert$$1.addressTextLabel === null ? null : ezert$$1.addressTextLabel.eze$$clone();
				ezert$$2.addressLabel = ezert$$1.addressLabel === null ? null : ezert$$1.addressLabel.eze$$clone();
				ezert$$2.editfield = ezert$$1.editfield === null ? null : ezert$$1.editfield;
				ezert$$2.RevBox = ezert$$1.RevBox === null ? null : ezert$$1.RevBox.eze$$clone();
				ezert$$2.content = ezert$$1.content === null ? null : ezert$$1.content.eze$$clone();
				ezert$$2.saveButton = ezert$$1.saveButton === null ? null : ezert$$1.saveButton.eze$$clone();
				ezert$$2.closeButton = ezert$$1.closeButton === null ? null : ezert$$1.closeButton.eze$$clone();
				ezert$$2.ID = ezert$$1.ID === null ? null : ezert$$1.ID.eze$$clone();
				ezert$$2.name = ezert$$1.name === null ? null : ezert$$1.name.eze$$clone();
				ezert$$2.birthday = ezert$$1.birthday === null ? null : ezert$$1.birthday.eze$$clone();
				ezert$$2.nclass = ezert$$1.nclass === null ? null : ezert$$1.nclass.eze$$clone();
				ezert$$2.mclass = ezert$$1.mclass === null ? null : ezert$$1.mclass.eze$$clone();
				ezert$$2.teacher = ezert$$1.teacher === null ? null : ezert$$1.teacher.eze$$clone();
				ezert$$2.parents = ezert$$1.parents === null ? null : ezert$$1.parents.eze$$clone();
				ezert$$2.address = ezert$$1.address === null ? null : ezert$$1.address.eze$$clone();
				ezert$$2.IDTextField = ezert$$1.IDTextField === null ? null : ezert$$1.IDTextField.eze$$clone();
				ezert$$2.nameTextField = ezert$$1.nameTextField === null ? null : ezert$$1.nameTextField.eze$$clone();
				ezert$$2.birthdayTextField = ezert$$1.birthdayTextField === null ? null : ezert$$1.birthdayTextField.eze$$clone();
				ezert$$2.nclassTextField = ezert$$1.nclassTextField === null ? null : ezert$$1.nclassTextField.eze$$clone();
				ezert$$2.mclassTextField = ezert$$1.mclassTextField === null ? null : ezert$$1.mclassTextField.eze$$clone();
				ezert$$2.teacherTextField = ezert$$1.teacherTextField === null ? null : ezert$$1.teacherTextField.eze$$clone();
				ezert$$2.parentsTextField = ezert$$1.parentsTextField === null ? null : ezert$$1.parentsTextField.eze$$clone();
				ezert$$2.addressTextField = ezert$$1.addressTextField === null ? null : ezert$$1.addressTextField.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "bodyBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Body", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "contentBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "IDBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "IDTextlabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "IDLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "reviseButton", sig: "dojo.widgets.DojoButton"},
					{name: "nameBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "nameTextlabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "nameLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "birthdayBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "birthdayTextLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "birthdayLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "nclassBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "nclassTextlabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "nclassLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "classBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "mclassTextlabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "mclassLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "teacherBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "teacherTextlabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "teacherLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "parentsBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "parentsTextlabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "parentsLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "addressBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "addressTextLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "addressLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "editfield", sig: "dojo.widgets.DojoDialog"},
					{name: "RevBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "content", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "saveButton", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "closeButton", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "ID", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "name", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "birthday", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "nclass", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "mclass", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "teacher", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "parents", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "address", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "IDTextField", sig: "org.eclipse.edt.rui.widgets.TextField"},
					{name: "nameTextField", sig: "org.eclipse.edt.rui.widgets.TextField"},
					{name: "birthdayTextField", sig: "org.eclipse.edt.rui.widgets.TextField"},
					{name: "nclassTextField", sig: "org.eclipse.edt.rui.widgets.TextField"},
					{name: "mclassTextField", sig: "org.eclipse.edt.rui.widgets.TextField"},
					{name: "teacherTextField", sig: "org.eclipse.edt.rui.widgets.TextField"},
					{name: "parentsTextField", sig: "org.eclipse.edt.rui.widgets.TextField"},
					{name: "addressTextField", sig: "org.eclipse.edt.rui.widgets.TextField"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Users", null, false);
				}
				return this.annotations;
			}
			,
			"eze$$getFieldInfos": function() {
				if(this.fieldInfos === undefined){
					var annotations;
					this.fieldInfos = new Array();
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ui", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ui");
					this.fieldInfos[0] =new egl.eglx.services.FieldInfo("ui", "ui", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("bodyBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("bodyBox");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("bodyBox", "bodyBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Body", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Body");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("Body", "Body", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("contentBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("contentBox");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("contentBox", "contentBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("IDBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("IDBox");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("IDBox", "IDBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("IDTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("IDTextlabel");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("IDTextlabel", "IDTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("IDLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("IDLabel");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("IDLabel", "IDLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nameBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nameBox");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("nameBox", "nameBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nameTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nameTextlabel");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("nameTextlabel", "nameTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nameLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nameLabel");
					this.fieldInfos[10] =new egl.eglx.services.FieldInfo("nameLabel", "nameLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthdayBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthdayBox");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("birthdayBox", "birthdayBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthdayTextLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthdayTextLabel");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("birthdayTextLabel", "birthdayTextLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthdayLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthdayLabel");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("birthdayLabel", "birthdayLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nclassBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nclassBox");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("nclassBox", "nclassBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nclassTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nclassTextlabel");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("nclassTextlabel", "nclassTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nclassLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nclassLabel");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("nclassLabel", "nclassLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("classBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("classBox");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("classBox", "classBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("mclassTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("mclassTextlabel");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("mclassTextlabel", "mclassTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("mclassLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("mclassLabel");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("mclassLabel", "mclassLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("teacherBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("teacherBox");
					this.fieldInfos[20] =new egl.eglx.services.FieldInfo("teacherBox", "teacherBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("teacherTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("teacherTextlabel");
					this.fieldInfos[21] =new egl.eglx.services.FieldInfo("teacherTextlabel", "teacherTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("teacherLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("teacherLabel");
					this.fieldInfos[22] =new egl.eglx.services.FieldInfo("teacherLabel", "teacherLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("parentsBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("parentsBox");
					this.fieldInfos[23] =new egl.eglx.services.FieldInfo("parentsBox", "parentsBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("parentsTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("parentsTextlabel");
					this.fieldInfos[24] =new egl.eglx.services.FieldInfo("parentsTextlabel", "parentsTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("parentsLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("parentsLabel");
					this.fieldInfos[25] =new egl.eglx.services.FieldInfo("parentsLabel", "parentsLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("addressBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("addressBox");
					this.fieldInfos[26] =new egl.eglx.services.FieldInfo("addressBox", "addressBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("addressTextLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("addressTextLabel");
					this.fieldInfos[27] =new egl.eglx.services.FieldInfo("addressTextLabel", "addressTextLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("addressLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("addressLabel");
					this.fieldInfos[28] =new egl.eglx.services.FieldInfo("addressLabel", "addressLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("RevBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("RevBox");
					this.fieldInfos[30] =new egl.eglx.services.FieldInfo("RevBox", "RevBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("content", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("content");
					this.fieldInfos[31] =new egl.eglx.services.FieldInfo("content", "content", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("saveButton", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("saveButton");
					this.fieldInfos[32] =new egl.eglx.services.FieldInfo("saveButton", "saveButton", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("closeButton", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("closeButton");
					this.fieldInfos[33] =new egl.eglx.services.FieldInfo("closeButton", "closeButton", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ID", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ID");
					this.fieldInfos[34] =new egl.eglx.services.FieldInfo("ID", "ID", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("name", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("name");
					this.fieldInfos[35] =new egl.eglx.services.FieldInfo("name", "name", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthday", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthday");
					this.fieldInfos[36] =new egl.eglx.services.FieldInfo("birthday", "birthday", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nclass", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nclass");
					this.fieldInfos[37] =new egl.eglx.services.FieldInfo("nclass", "nclass", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("mclass", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("mclass");
					this.fieldInfos[38] =new egl.eglx.services.FieldInfo("mclass", "mclass", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("teacher", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("teacher");
					this.fieldInfos[39] =new egl.eglx.services.FieldInfo("teacher", "teacher", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("parents", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("parents");
					this.fieldInfos[40] =new egl.eglx.services.FieldInfo("parents", "parents", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("address", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("address");
					this.fieldInfos[41] =new egl.eglx.services.FieldInfo("address", "address", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("IDTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("IDTextField");
					this.fieldInfos[42] =new egl.eglx.services.FieldInfo("IDTextField", "IDTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nameTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nameTextField");
					this.fieldInfos[43] =new egl.eglx.services.FieldInfo("nameTextField", "nameTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthdayTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthdayTextField");
					this.fieldInfos[44] =new egl.eglx.services.FieldInfo("birthdayTextField", "birthdayTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nclassTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nclassTextField");
					this.fieldInfos[45] =new egl.eglx.services.FieldInfo("nclassTextField", "nclassTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("mclassTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("mclassTextField");
					this.fieldInfos[46] =new egl.eglx.services.FieldInfo("mclassTextField", "mclassTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("teacherTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("teacherTextField");
					this.fieldInfos[47] =new egl.eglx.services.FieldInfo("teacherTextField", "teacherTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("parentsTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("parentsTextField");
					this.fieldInfos[48] =new egl.eglx.services.FieldInfo("parentsTextField", "parentsTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("addressTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("addressTextField");
					this.fieldInfos[49] =new egl.eglx.services.FieldInfo("addressTextField", "addressTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,175,6207,25, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"editButton_onClick": function(event) {
				try { egl.enter("editButton_onClick",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					egl.atLine(this.eze$$fileName,179,6298,23, this);
					this.editfield.showDialog();
					egl.atLine(this.eze$$fileName,178,6248,82, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"hideDialog": function(e) {
				try { egl.enter("hideDialog",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,183,6381,23, this);
					this.editfield.hideDialog();
					egl.atLine(this.eze$$fileName,182,6342,71, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"saveInfo": function(e) {
				try { egl.enter("saveInfo",this,arguments);
					egl.addLocalFunctionVariable("e", e, "eglx.ui.rui.Event", "e");
					egl.atLine(this.eze$$fileName,187,6462,34, this);
					this.IDLabel.setText(this.IDTextField.getText());
					egl.atLine(this.eze$$fileName,188,6503,38, this);
					this.nameLabel.setText(this.nameTextField.getText());
					egl.atLine(this.eze$$fileName,189,6548,46, this);
					this.birthdayLabel.setText(this.birthdayTextField.getText());
					egl.atLine(this.eze$$fileName,190,6601,42, this);
					this.nclassLabel.setText(this.nclassTextField.getText());
					egl.atLine(this.eze$$fileName,191,6650,42, this);
					this.mclassLabel.setText(this.mclassTextField.getText());
					egl.atLine(this.eze$$fileName,192,6699,44, this);
					this.teacherLabel.setText(this.teacherTextField.getText());
					egl.atLine(this.eze$$fileName,193,6750,44, this);
					this.parentsLabel.setText(this.parentsTextField.getText());
					egl.atLine(this.eze$$fileName,194,6801,44, this);
					this.addressLabel.setText(this.addressTextField.getText());
					egl.atLine(this.eze$$fileName,186,6425,429, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Users]";
			}
			,
			"eze$$getName": function() {
				return "Users";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "bodyBox", value : eze$$parent.bodyBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "bodyBox"},
				{name: "Body", value : eze$$parent.Body, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "Body"},
				{name: "contentBox", value : eze$$parent.contentBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "contentBox"},
				{name: "IDBox", value : eze$$parent.IDBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "IDBox"},
				{name: "IDTextlabel", value : eze$$parent.IDTextlabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "IDTextlabel"},
				{name: "IDLabel", value : eze$$parent.IDLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "IDLabel"},
				{name: "reviseButton", value : eze$$parent.reviseButton, type : "dojo.widgets.DojoButton", jsName : "reviseButton"},
				{name: "nameBox", value : eze$$parent.nameBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "nameBox"},
				{name: "nameTextlabel", value : eze$$parent.nameTextlabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "nameTextlabel"},
				{name: "nameLabel", value : eze$$parent.nameLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "nameLabel"},
				{name: "birthdayBox", value : eze$$parent.birthdayBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "birthdayBox"},
				{name: "birthdayTextLabel", value : eze$$parent.birthdayTextLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "birthdayTextLabel"},
				{name: "birthdayLabel", value : eze$$parent.birthdayLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "birthdayLabel"},
				{name: "nclassBox", value : eze$$parent.nclassBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "nclassBox"},
				{name: "nclassTextlabel", value : eze$$parent.nclassTextlabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "nclassTextlabel"},
				{name: "nclassLabel", value : eze$$parent.nclassLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "nclassLabel"},
				{name: "classBox", value : eze$$parent.classBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "classBox"},
				{name: "mclassTextlabel", value : eze$$parent.mclassTextlabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "mclassTextlabel"},
				{name: "mclassLabel", value : eze$$parent.mclassLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "mclassLabel"},
				{name: "teacherBox", value : eze$$parent.teacherBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "teacherBox"},
				{name: "teacherTextlabel", value : eze$$parent.teacherTextlabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "teacherTextlabel"},
				{name: "teacherLabel", value : eze$$parent.teacherLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "teacherLabel"},
				{name: "parentsBox", value : eze$$parent.parentsBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "parentsBox"},
				{name: "parentsTextlabel", value : eze$$parent.parentsTextlabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "parentsTextlabel"},
				{name: "parentsLabel", value : eze$$parent.parentsLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "parentsLabel"},
				{name: "addressBox", value : eze$$parent.addressBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "addressBox"},
				{name: "addressTextLabel", value : eze$$parent.addressTextLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "addressTextLabel"},
				{name: "addressLabel", value : eze$$parent.addressLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "addressLabel"},
				{name: "editfield", value : eze$$parent.editfield, type : "dojo.widgets.DojoDialog", jsName : "editfield"},
				{name: "RevBox", value : eze$$parent.RevBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "RevBox"},
				{name: "content", value : eze$$parent.content, type : "org.eclipse.edt.rui.widgets.Box", jsName : "content"},
				{name: "saveButton", value : eze$$parent.saveButton, type : "org.eclipse.edt.rui.widgets.Button", jsName : "saveButton"},
				{name: "closeButton", value : eze$$parent.closeButton, type : "org.eclipse.edt.rui.widgets.Button", jsName : "closeButton"},
				{name: "ID", value : eze$$parent.ID, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "ID"},
				{name: "name", value : eze$$parent.name, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "name"},
				{name: "birthday", value : eze$$parent.birthday, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "birthday"},
				{name: "nclass", value : eze$$parent.nclass, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "nclass"},
				{name: "mclass", value : eze$$parent.mclass, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "mclass"},
				{name: "teacher", value : eze$$parent.teacher, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "teacher"},
				{name: "parents", value : eze$$parent.parents, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "parents"},
				{name: "address", value : eze$$parent.address, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "address"},
				{name: "IDTextField", value : eze$$parent.IDTextField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "IDTextField"},
				{name: "nameTextField", value : eze$$parent.nameTextField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "nameTextField"},
				{name: "birthdayTextField", value : eze$$parent.birthdayTextField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "birthdayTextField"},
				{name: "nclassTextField", value : eze$$parent.nclassTextField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "nclassTextField"},
				{name: "mclassTextField", value : eze$$parent.mclassTextField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "mclassTextField"},
				{name: "teacherTextField", value : eze$$parent.teacherTextField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "teacherTextField"},
				{name: "parentsTextField", value : eze$$parent.parentsTextField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "parentsTextField"},
				{name: "addressTextField", value : eze$$parent.addressTextField, type : "org.eclipse.edt.rui.widgets.TextField", jsName : "addressTextField"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
