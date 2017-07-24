define(["org/eclipse/edt/rui/widgets/Box", "ezekw$$dojo/widgets/DojoLib", "eglx/ui/rui/eze$$View", "eglx/ui/rui/eze$$Event", "org/eclipse/edt/rui/widgets/TextLabel", "ezekw$$dojo/widgets/eze$$DojoContentPane", "ezekw$$dojo/widgets/eze$$DojoDialog", "ezekw$$dojo/widgets/eze$$DojoTabContainer", "org/eclipse/edt/rui/widgets/TextField", "ezekw$$dojo/widgets/eze$$DojoButton", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/Button"],function(){
	egl.loadCSS("css/NewProject.css");
	egl.defineRUIHandler("client.client", "UserIn", {
		"eze$$fileName" : "client/client/UserIn.egl",
		"eze$$runtimePropertiesFile" : "client/client/UserIn",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.dojo.widgets.DojoLib();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.BodyBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TextLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.UserBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TabContainer = new egl.dojo.widgets.DojoTabContainer();
				this.userinfoBox = new egl.org.eclipse.edt.rui.widgets.Box();
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
					egl.atLine(this.eze$$fileName,25,714,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,25,727,8, this);
					this.ui.setRows(2);
					egl.atLine(this.eze$$fileName,25,737,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,25,754,31, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.UserBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BodyBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,26,792,13, this);
					this.ui.setWidth("850");
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,27,838,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,27,858,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,27,867,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,27,838,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,27,825,54, this);
					this.BodyBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,27,881,9, this);
					this.BodyBox.setPadding(8);
					egl.atLine(this.eze$$fileName,28,897,24, this);
					this.BodyBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,29,950,13, this);
					this.TextLabel.setText("\u4e2a\u4eba\u4e2d\u5fc3");
					egl.atLine(this.eze$$fileName,30,970,21, this);
					this.TextLabel.setColor("YellowGreen");
					egl.atLine(this.eze$$fileName,31,998,13, this);
					this.TextLabel.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,32,1018,15, this);
					this.TextLabel.setFontSize("25");
					egl.atLine(this.eze$$fileName,33,1040,21, this);
					this.TextLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,34,1068,17, this);
					this.TextLabel.setPaddingLeft(350);
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,35,1119,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,35,1139,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,35,1148,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,35,1119,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,35,1106,54, this);
					this.UserBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,35,1162,9, this);
					this.UserBox.setPadding(8);
					egl.atLine(this.eze$$fileName,36,1178,27, this);
					this.UserBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TabContainer,"dojo.widgets.DojoTabContainer"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,38,1246,13, this);
					this.TabContainer.setWidth("800");
					egl.atLine(this.eze$$fileName,38,1261,14, this);
					this.TabContainer.setHeight("400");
					egl.atLine(this.eze$$fileName,38,1277,35, this);
					this.TabContainer.setTabPosition(egl.dojo.widgets.DojoLib['$inst'].POSITION_LEFT);
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,43,1497,56, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp6 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp6;
						}).call(this);
						egl.atLine(this.eze$$fileName,43,1519,14, this);
						eze$SettingTarget1.setTitle("\u6211\u7684\u6d88\u606f");
						egl.atLine(this.eze$$fileName,43,1535,17, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp7 = []; eze$Temp7.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp7[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp7;})());
						egl.atLine(this.eze$$fileName,43,1497,56, this);
						eze$LNNTemp5 = eze$SettingTarget1;
					}
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,41,1436,56, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp8 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp8;
						}).call(this);
						egl.atLine(this.eze$$fileName,41,1458,14, this);
						eze$SettingTarget1.setTitle("\u6211\u7684\u8bfe\u7a0b");
						egl.atLine(this.eze$$fileName,41,1474,17, this);
						eze$SettingTarget1.setChildren((function() { var eze$Temp9 = []; eze$Temp9.setType("[eglx.ui.rui.Widget");
							for (var i = 0; i < 0; i++) {
							eze$Temp9[i] = new egl.eglx.ui.rui.Widget();}
						return eze$Temp9;})());
						egl.atLine(this.eze$$fileName,41,1436,56, this);
						eze$LNNTemp4 = eze$SettingTarget1;
					}
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,40,1365,66, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp10 = new egl.dojo.widgets.DojoContentPane();
							return eze$Temp10;
						}).call(this);
						egl.atLine(this.eze$$fileName,40,1387,14, this);
						eze$SettingTarget1.setTitle("\u4e2a\u4eba\u4fe1\u606f");
						egl.atLine(this.eze$$fileName,40,1403,26, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.userinfoBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,40,1365,66, this);
						eze$LNNTemp3 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,39,1349,208, this);
					this.TabContainer.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp3,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp4,"dojo.widgets.DojoContentPane"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp5,"dojo.widgets.DojoContentPane"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,47,1582,9, this);
					this.userinfoBox.setPadding(8);
					egl.atLine(this.eze$$fileName,47,1593,9, this);
					this.userinfoBox.setColumns(1);
					egl.atLine(this.eze$$fileName,48,1610,101, this);
					this.userinfoBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.IDBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nameBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.birthdayBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nclassBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.classBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.teacherBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.parentsBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.addressBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,50,1734,9, this);
					this.IDBox.setPadding(8);
					egl.atLine(this.eze$$fileName,51,1750,49, this);
					this.IDBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.IDTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.IDLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.reviseButton,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,52,1830,12, this);
					this.IDTextlabel.setText("\u5b66\u53f7\uff1a");
					egl.atLine(this.eze$$fileName,53,1849,11, this);
					this.IDTextlabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,54,1867,15, this);
					this.IDTextlabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,55,1889,21, this);
					this.IDTextlabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,56,1917,15, this);
					this.IDTextlabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,57,1959,13, this);
					this.IDLabel.setText("1101");
					egl.atLine(this.eze$$fileName,58,1979,11, this);
					this.IDLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,59,1997,15, this);
					this.IDLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,60,2019,21, this);
					this.IDLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,61,2073,15, this);
					this.reviseButton.setText("\u4fee\u6539\u4e2a\u4eba\u4fe1\u606f");
					egl.atLine(this.eze$$fileName,62,2095,16, this);
					this.reviseButton.setMarginLeft(400);
					egl.atLine(this.eze$$fileName,63,2118,13, this);
					this.reviseButton.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,64,2138,15, this);
					this.reviseButton.setFontSize("14");
					egl.atLine(this.eze$$fileName,64,2156,30, this);
					this.reviseButton.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.UserIn.prototype.editButton_onClick, ""));
					egl.atLine(this.eze$$fileName,65,2206,9, this);
					this.nameBox.setPadding(8);
					egl.atLine(this.eze$$fileName,66,2222,39, this);
					this.nameBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nameTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nameLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,67,2294,12, this);
					this.nameTextlabel.setText("\u59d3\u540d\uff1a");
					egl.atLine(this.eze$$fileName,68,2313,11, this);
					this.nameTextlabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,69,2331,15, this);
					this.nameTextlabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,70,2353,21, this);
					this.nameTextlabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,71,2381,15, this);
					this.nameTextlabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,72,2425,11, this);
					this.nameLabel.setText("\u5f20\u5f64");
					egl.atLine(this.eze$$fileName,73,2443,11, this);
					this.nameLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,74,2461,15, this);
					this.nameLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,75,2483,21, this);
					this.nameLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,76,2529,9, this);
					this.birthdayBox.setPadding(8);
					egl.atLine(this.eze$$fileName,77,2545,47, this);
					this.birthdayBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.birthdayTextLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.birthdayLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,78,2629,14, this);
					this.birthdayTextLabel.setText("\u51fa\u751f\u65e5\u671f\uff1a");
					egl.atLine(this.eze$$fileName,79,2650,11, this);
					this.birthdayTextLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,80,2668,15, this);
					this.birthdayTextLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,81,2690,21, this);
					this.birthdayTextLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,82,2718,15, this);
					this.birthdayTextLabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,83,2765,19, this);
					this.birthdayLabel.setText("07/24/1999");
					egl.atLine(this.eze$$fileName,84,2791,11, this);
					this.birthdayLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,85,2809,15, this);
					this.birthdayLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,86,2831,21, this);
					this.birthdayLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,87,2876,9, this);
					this.nclassBox.setPadding(8);
					egl.atLine(this.eze$$fileName,88,2892,43, this);
					this.nclassBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nclassTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nclassLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,89,2970,14, this);
					this.nclassTextlabel.setText("\u6240\u5728\u5e74\u7ea7\uff1a");
					egl.atLine(this.eze$$fileName,90,2991,11, this);
					this.nclassTextlabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,91,3009,15, this);
					this.nclassTextlabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,92,3031,21, this);
					this.nclassTextlabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,93,3059,15, this);
					this.nclassTextlabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,94,3105,12, this);
					this.nclassLabel.setText("\u4e00\u5e74\u7ea7");
					egl.atLine(this.eze$$fileName,95,3124,11, this);
					this.nclassLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,96,3142,15, this);
					this.nclassLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,97,3164,21, this);
					this.nclassLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,98,3207,9, this);
					this.classBox.setPadding(8);
					egl.atLine(this.eze$$fileName,99,3223,43, this);
					this.classBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.mclassTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.mclassLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,100,3301,14, this);
					this.mclassTextlabel.setText("\u6240\u5728\u73ed\u7ea7\uff1a");
					egl.atLine(this.eze$$fileName,101,3322,11, this);
					this.mclassTextlabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,102,3340,15, this);
					this.mclassTextlabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,103,3362,21, this);
					this.mclassTextlabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,104,3390,15, this);
					this.mclassTextlabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,105,3436,13, this);
					this.mclassLabel.setText("\uff081\uff09\u73ed");
					egl.atLine(this.eze$$fileName,106,3456,11, this);
					this.mclassLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,107,3474,15, this);
					this.mclassLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,108,3496,21, this);
					this.mclassLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,109,3541,9, this);
					this.teacherBox.setPadding(8);
					egl.atLine(this.eze$$fileName,110,3557,45, this);
					this.teacherBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.teacherTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.teacherLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,111,3638,13, this);
					this.teacherTextlabel.setText("\u73ed\u4e3b\u4efb\uff1a");
					egl.atLine(this.eze$$fileName,112,3658,11, this);
					this.teacherTextlabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,113,3676,15, this);
					this.teacherTextlabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,114,3698,21, this);
					this.teacherTextlabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,115,3726,15, this);
					this.teacherTextlabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,116,3773,11, this);
					this.teacherLabel.setText("\u674e\u8273");
					egl.atLine(this.eze$$fileName,117,3791,11, this);
					this.teacherLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,118,3809,15, this);
					this.teacherLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,119,3831,21, this);
					this.teacherLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,120,3876,9, this);
					this.parentsBox.setPadding(8);
					egl.atLine(this.eze$$fileName,121,3892,45, this);
					this.parentsBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.parentsTextlabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.parentsLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,122,3973,16, this);
					this.parentsTextlabel.setText("\u5bb6\u957f\u8054\u7cfb\u65b9\u5f0f\uff1a");
					egl.atLine(this.eze$$fileName,123,3996,11, this);
					this.parentsTextlabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,124,4014,15, this);
					this.parentsTextlabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,125,4036,21, this);
					this.parentsTextlabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,126,4064,15, this);
					this.parentsTextlabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,127,4111,20, this);
					this.parentsLabel.setText("13711111111");
					egl.atLine(this.eze$$fileName,128,4138,11, this);
					this.parentsLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,129,4156,15, this);
					this.parentsLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,130,4178,21, this);
					this.parentsLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,131,4223,9, this);
					this.addressBox.setPadding(8);
					egl.atLine(this.eze$$fileName,132,4242,45, this);
					this.addressBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.addressTextLabel,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.addressLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,133,4323,14, this);
					this.addressTextLabel.setText("\u5bb6\u5ead\u4f4f\u5740\uff1a");
					egl.atLine(this.eze$$fileName,134,4347,11, this);
					this.addressTextLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,135,4368,15, this);
					this.addressTextLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,136,4393,21, this);
					this.addressTextLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,137,4424,15, this);
					this.addressTextLabel.setMarginLeft(60);
					egl.atLine(this.eze$$fileName,138,4470,24, this);
					this.addressLabel.setText("\u6c88\u9633\u5e02\u7687\u59d1\u533a\u9ec4\u6cb3\u5317\u5927\u8857253\u53f7");
					egl.atLine(this.eze$$fileName,139,4504,11, this);
					this.addressLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,140,4523,15, this);
					this.addressLabel.setFontSize("16");
					egl.atLine(this.eze$$fileName,141,4546,21, this);
					this.addressLabel.setFontWeight("bolder");
					egl.atLine(this.eze$$fileName,144,4615,14, this);
					this.editfield.title = "\u4fee\u6539\u4e2a\u4eba\u4fe1\u606f";
					egl.atLine(this.eze$$fileName,144,4631,10, this);
					this.editfield.setPadding(20);
					egl.atLine(this.eze$$fileName,145,4652,28, this);
					this.editfield.setBackgroundColor("AliceBlue");
					egl.atLine(this.eze$$fileName,146,4690,16, this);
					this.editfield.draggable = true;
					egl.atLine(this.eze$$fileName,147,4716,17, this);
					this.editfield.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.RevBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,148,4751,9, this);
					this.RevBox.setPadding(4);
					egl.atLine(this.eze$$fileName,148,4762,10, this);
					this.RevBox.setColumns(1);
					egl.atLine(this.eze$$fileName,149,4781,18, this);
					this.RevBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.content,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,151,4841,10, this);
					this.content.setColumns(1);
					egl.atLine(this.eze$$fileName,151,4852,27, this);
					this.content.setBackgroundColor("lightBlue");
					egl.atLine(this.eze$$fileName,151,4881,9, this);
					this.content.setPadding(1);
					var eze$LNNTemp19 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,160,5589,64, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp20 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp20;
						}).call(this);
						egl.atLine(this.eze$$fileName,160,5597,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,160,5608,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,160,5618,34, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.saveButton,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.closeButton,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,160,5589,64, this);
						eze$LNNTemp19 = eze$SettingTarget1;
					}
					var eze$LNNTemp18 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,159,5502,66, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp21 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp21;
						}).call(this);
						egl.atLine(this.eze$$fileName,159,5510,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,159,5521,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,159,5531,36, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.address,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.addressTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,159,5502,66, this);
						eze$LNNTemp18 = eze$SettingTarget1;
					}
					var eze$LNNTemp17 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,158,5415,66, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp22 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp22;
						}).call(this);
						egl.atLine(this.eze$$fileName,158,5423,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,158,5434,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,158,5444,36, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.parents,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.parentsTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,158,5415,66, this);
						eze$LNNTemp17 = eze$SettingTarget1;
					}
					var eze$LNNTemp16 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,157,5328,66, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp23 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp23;
						}).call(this);
						egl.atLine(this.eze$$fileName,157,5336,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,157,5347,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,157,5357,36, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.teacher,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.teacherTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,157,5328,66, this);
						eze$LNNTemp16 = eze$SettingTarget1;
					}
					var eze$LNNTemp15 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,156,5243,64, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp24 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp24;
						}).call(this);
						egl.atLine(this.eze$$fileName,156,5251,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,156,5262,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,156,5272,34, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.mclass,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.mclassTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,156,5243,64, this);
						eze$LNNTemp15 = eze$SettingTarget1;
					}
					var eze$LNNTemp14 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,155,5158,64, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp25 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp25;
						}).call(this);
						egl.atLine(this.eze$$fileName,155,5166,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,155,5177,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,155,5187,34, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nclass,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nclassTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,155,5158,64, this);
						eze$LNNTemp14 = eze$SettingTarget1;
					}
					var eze$LNNTemp13 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,154,5069,68, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp26 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp26;
						}).call(this);
						egl.atLine(this.eze$$fileName,154,5077,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,154,5088,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,154,5098,38, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.birthday,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.birthdayTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,154,5069,68, this);
						eze$LNNTemp13 = eze$SettingTarget1;
					}
					var eze$LNNTemp12 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,153,4988,60, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp27 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp27;
						}).call(this);
						egl.atLine(this.eze$$fileName,153,4996,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,153,5007,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,153,5017,30, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.name,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.nameTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,153,4988,60, this);
						eze$LNNTemp12 = eze$SettingTarget1;
					}
					var eze$LNNTemp11 = null;
					{
						var eze$SettingTarget1;
						egl.atLine(this.eze$$fileName,152,4911,56, this);
						eze$SettingTarget1 = (function () {
							var eze$Temp28 = new egl.org.eclipse.edt.rui.widgets.Box();
							return eze$Temp28;
						}).call(this);
						egl.atLine(this.eze$$fileName,152,4919,9, this);
						eze$SettingTarget1.setPadding(8);
						egl.atLine(this.eze$$fileName,152,4930,9, this);
						eze$SettingTarget1.setColumns(2);
						egl.atLine(this.eze$$fileName,152,4940,26, this);
						eze$SettingTarget1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ID,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.IDTextField,"org.eclipse.edt.rui.widgets.TextField"])].setType("[Teglx/ui/rui/Widget;"));
						egl.atLine(this.eze$$fileName,152,4911,56, this);
						eze$LNNTemp11 = eze$SettingTarget1;
					}
					egl.atLine(this.eze$$fileName,152,4899,755, this);
					this.content.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp11,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp12,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp13,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp14,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp15,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp16,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp17,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp18,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [eze$LNNTemp19,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,162,5688,9, this);
					this.saveButton.setText("\u4fdd\u5b58");
					egl.atLine(this.eze$$fileName,163,5706,13, this);
					this.saveButton.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,164,5728,15, this);
					this.saveButton.setFontSize("12");
					egl.atLine(this.eze$$fileName,165,5752,20, this);
					this.saveButton.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.UserIn.prototype.saveInfo, ""));
					egl.atLine(this.eze$$fileName,166,5799,9, this);
					this.closeButton.setText("\u5173\u95ed");
					egl.atLine(this.eze$$fileName,167,5817,13, this);
					this.closeButton.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,168,5839,15, this);
					this.closeButton.setFontSize("12");
					egl.atLine(this.eze$$fileName,169,5863,22, this);
					this.closeButton.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.UserIn.prototype.hideDialog, ""));
					egl.atLine(this.eze$$fileName,171,5914,10, this);
					this.ID.setText("\u5b66\u53f7\uff1a");
					egl.atLine(this.eze$$fileName,172,5945,10, this);
					this.name.setText("\u59d3\u540d\uff1a");
					egl.atLine(this.eze$$fileName,173,5980,12, this);
					this.birthday.setText("\u51fa\u751f\u65e5\u671f\uff1a");
					egl.atLine(this.eze$$fileName,174,6015,12, this);
					this.nclass.setText("\u6240\u5728\u5e74\u7ea7\uff1a");
					egl.atLine(this.eze$$fileName,175,6050,12, this);
					this.mclass.setText("\u6240\u5728\u73ed\u7ea7\uff1a");
					egl.atLine(this.eze$$fileName,176,6086,11, this);
					this.teacher.setText("\u73ed\u4e3b\u4efb\uff1a");
					egl.atLine(this.eze$$fileName,177,6121,14, this);
					this.parents.setText("\u5bb6\u957f\u8054\u7cfb\u7535\u8bdd\uff1a");
					egl.atLine(this.eze$$fileName,178,6159,12, this);
					this.address.setText("\u5bb6\u5ead\u4f4f\u5740\uff1a");
					egl.atLine(this.eze$$fileName,180,6213,15, this);
					this.IDTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,181,6262,15, this);
					this.nameTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,182,6311,15, this);
					this.birthdayTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,183,6358,15, this);
					this.nclassTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,184,6405,15, this);
					this.mclassTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,185,6453,15, this);
					this.teacherTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,186,6501,15, this);
					this.parentsTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,187,6549,15, this);
					this.addressTextField.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,22,589,28, this);
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
				var ezert$$2 = new egl.client.client.UserIn();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.BodyBox = ezert$$1.BodyBox === null ? null : ezert$$1.BodyBox.eze$$clone();
				ezert$$2.TextLabel = ezert$$1.TextLabel === null ? null : ezert$$1.TextLabel.eze$$clone();
				ezert$$2.UserBox = ezert$$1.UserBox === null ? null : ezert$$1.UserBox.eze$$clone();
				ezert$$2.TabContainer = ezert$$1.TabContainer === null ? null : ezert$$1.TabContainer;
				ezert$$2.userinfoBox = ezert$$1.userinfoBox === null ? null : ezert$$1.userinfoBox.eze$$clone();
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
					{name: "BodyBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TextLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "UserBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TabContainer", sig: "dojo.widgets.DojoTabContainer"},
					{name: "userinfoBox", sig: "org.eclipse.edt.rui.widgets.Box"},
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
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("UserIn", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BodyBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BodyBox");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("BodyBox", "BodyBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("TextLabel", "TextLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("UserBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("UserBox");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("UserBox", "UserBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("userinfoBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("userinfoBox");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("userinfoBox", "userinfoBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("IDBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("IDBox");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("IDBox", "IDBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("IDTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("IDTextlabel");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("IDTextlabel", "IDTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("IDLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("IDLabel");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("IDLabel", "IDLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nameBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nameBox");
					this.fieldInfos[10] =new egl.eglx.services.FieldInfo("nameBox", "nameBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nameTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nameTextlabel");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("nameTextlabel", "nameTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nameLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nameLabel");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("nameLabel", "nameLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthdayBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthdayBox");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("birthdayBox", "birthdayBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthdayTextLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthdayTextLabel");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("birthdayTextLabel", "birthdayTextLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthdayLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthdayLabel");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("birthdayLabel", "birthdayLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nclassBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nclassBox");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("nclassBox", "nclassBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nclassTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nclassTextlabel");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("nclassTextlabel", "nclassTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nclassLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nclassLabel");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("nclassLabel", "nclassLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("classBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("classBox");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("classBox", "classBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("mclassTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("mclassTextlabel");
					this.fieldInfos[20] =new egl.eglx.services.FieldInfo("mclassTextlabel", "mclassTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("mclassLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("mclassLabel");
					this.fieldInfos[21] =new egl.eglx.services.FieldInfo("mclassLabel", "mclassLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("teacherBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("teacherBox");
					this.fieldInfos[22] =new egl.eglx.services.FieldInfo("teacherBox", "teacherBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("teacherTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("teacherTextlabel");
					this.fieldInfos[23] =new egl.eglx.services.FieldInfo("teacherTextlabel", "teacherTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("teacherLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("teacherLabel");
					this.fieldInfos[24] =new egl.eglx.services.FieldInfo("teacherLabel", "teacherLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("parentsBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("parentsBox");
					this.fieldInfos[25] =new egl.eglx.services.FieldInfo("parentsBox", "parentsBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("parentsTextlabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("parentsTextlabel");
					this.fieldInfos[26] =new egl.eglx.services.FieldInfo("parentsTextlabel", "parentsTextlabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("parentsLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("parentsLabel");
					this.fieldInfos[27] =new egl.eglx.services.FieldInfo("parentsLabel", "parentsLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("addressBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("addressBox");
					this.fieldInfos[28] =new egl.eglx.services.FieldInfo("addressBox", "addressBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("addressTextLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("addressTextLabel");
					this.fieldInfos[29] =new egl.eglx.services.FieldInfo("addressTextLabel", "addressTextLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("addressLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("addressLabel");
					this.fieldInfos[30] =new egl.eglx.services.FieldInfo("addressLabel", "addressLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("RevBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("RevBox");
					this.fieldInfos[32] =new egl.eglx.services.FieldInfo("RevBox", "RevBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("content", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("content");
					this.fieldInfos[33] =new egl.eglx.services.FieldInfo("content", "content", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("saveButton", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("saveButton");
					this.fieldInfos[34] =new egl.eglx.services.FieldInfo("saveButton", "saveButton", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("closeButton", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("closeButton");
					this.fieldInfos[35] =new egl.eglx.services.FieldInfo("closeButton", "closeButton", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ID", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ID");
					this.fieldInfos[36] =new egl.eglx.services.FieldInfo("ID", "ID", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("name", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("name");
					this.fieldInfos[37] =new egl.eglx.services.FieldInfo("name", "name", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthday", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthday");
					this.fieldInfos[38] =new egl.eglx.services.FieldInfo("birthday", "birthday", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nclass", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nclass");
					this.fieldInfos[39] =new egl.eglx.services.FieldInfo("nclass", "nclass", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("mclass", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("mclass");
					this.fieldInfos[40] =new egl.eglx.services.FieldInfo("mclass", "mclass", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("teacher", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("teacher");
					this.fieldInfos[41] =new egl.eglx.services.FieldInfo("teacher", "teacher", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("parents", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("parents");
					this.fieldInfos[42] =new egl.eglx.services.FieldInfo("parents", "parents", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("address", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("address");
					this.fieldInfos[43] =new egl.eglx.services.FieldInfo("address", "address", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("IDTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("IDTextField");
					this.fieldInfos[44] =new egl.eglx.services.FieldInfo("IDTextField", "IDTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nameTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nameTextField");
					this.fieldInfos[45] =new egl.eglx.services.FieldInfo("nameTextField", "nameTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("birthdayTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("birthdayTextField");
					this.fieldInfos[46] =new egl.eglx.services.FieldInfo("birthdayTextField", "birthdayTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("nclassTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("nclassTextField");
					this.fieldInfos[47] =new egl.eglx.services.FieldInfo("nclassTextField", "nclassTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("mclassTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("mclassTextField");
					this.fieldInfos[48] =new egl.eglx.services.FieldInfo("mclassTextField", "mclassTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("teacherTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("teacherTextField");
					this.fieldInfos[49] =new egl.eglx.services.FieldInfo("teacherTextField", "teacherTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("parentsTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("parentsTextField");
					this.fieldInfos[50] =new egl.eglx.services.FieldInfo("parentsTextField", "parentsTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("addressTextField", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("addressTextField");
					this.fieldInfos[51] =new egl.eglx.services.FieldInfo("addressTextField", "addressTextField", "org.eclipse.edt.rui.widgets.TextField", egl.org.eclipse.edt.rui.widgets.TextField, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,189,6574,24, this);
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
					egl.atLine(this.eze$$fileName,193,6661,23, this);
					this.editfield.showDialog();
					egl.atLine(this.eze$$fileName,192,6612,80, this);
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
					egl.atLine(this.eze$$fileName,197,6740,23, this);
					this.editfield.hideDialog();
					egl.atLine(this.eze$$fileName,196,6702,69, this);
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
					egl.atLine(this.eze$$fileName,201,6817,34, this);
					this.IDLabel.setText(this.IDTextField.getText());
					egl.atLine(this.eze$$fileName,202,6857,38, this);
					this.nameLabel.setText(this.nameTextField.getText());
					egl.atLine(this.eze$$fileName,203,6901,46, this);
					this.birthdayLabel.setText(this.birthdayTextField.getText());
					egl.atLine(this.eze$$fileName,204,6953,42, this);
					this.nclassLabel.setText(this.nclassTextField.getText());
					egl.atLine(this.eze$$fileName,205,7001,42, this);
					this.mclassLabel.setText(this.mclassTextField.getText());
					egl.atLine(this.eze$$fileName,206,7049,44, this);
					this.teacherLabel.setText(this.teacherTextField.getText());
					egl.atLine(this.eze$$fileName,207,7099,44, this);
					this.parentsLabel.setText(this.parentsTextField.getText());
					egl.atLine(this.eze$$fileName,208,7149,44, this);
					this.addressLabel.setText(this.addressTextField.getText());
					egl.atLine(this.eze$$fileName,200,6781,420, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[UserIn]";
			}
			,
			"eze$$getName": function() {
				return "UserIn";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "DojoLib", value : egl.dojo.widgets.DojoLib['$inst'], type : "dojo.widgets.DojoLib", jsName : "egl.dojo.widgets.DojoLib['$inst']"},
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "BodyBox", value : eze$$parent.BodyBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BodyBox"},
				{name: "TextLabel", value : eze$$parent.TextLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel"},
				{name: "UserBox", value : eze$$parent.UserBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "UserBox"},
				{name: "TabContainer", value : eze$$parent.TabContainer, type : "dojo.widgets.DojoTabContainer", jsName : "TabContainer"},
				{name: "userinfoBox", value : eze$$parent.userinfoBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "userinfoBox"},
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
