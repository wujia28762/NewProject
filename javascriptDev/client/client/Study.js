define(["org/eclipse/edt/rui/widgets/Box", "client/client/HomePage", "eglx/ui/rui/eze$$View", "client/client/Test", "client/client/Learning", "org/eclipse/edt/rui/widgets/TextLabel", "eglx/ui/rui/eze$$Event", "org/eclipse/edt/rui/widgets/GridLayoutLib", "client/client/Education", "client/client/UserIn", "ezekw$$dojo/widgets/eze$$DojoTextField", "org/eclipse/edt/rui/widgets/Image", "ezekw$$dojo/widgets/eze$$DojoButton", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/GridLayoutData", "client/client/Login", "org/eclipse/edt/rui/widgets/Button"],function(){
	egl.loadCSS("css/e-Learning.css");
	egl.defineRUIHandler("client.client", "Study", {
		"eze$$fileName" : "client/client/Study.egl",
		"eze$$runtimePropertiesFile" : "client/client/Study",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				new egl.org.eclipse.edt.rui.widgets.GridLayoutLib();
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.BoxDoor = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Door = new egl.org.eclipse.edt.rui.widgets.Image();
				this.GridLayoutNavigation = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.BoxNavigation = new egl.org.eclipse.edt.rui.widgets.Box();
				this.HomePage = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Learning = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Test = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Education = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Users = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Bottom = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.GridLayoutAccouncement = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.BoxBody = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Login = new egl.dojo.widgets.DojoButton();
				this.Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TextField = new egl.dojo.widgets.DojoTextField();
				this.Button = new egl.dojo.widgets.DojoButton();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,22,790,11, this);
					this.ui.setColumns(3);
					egl.atLine(this.eze$$fileName,22,803,8, this);
					this.ui.setRows(5);
					egl.atLine(this.eze$$fileName,22,813,80, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayoutAccouncement,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Bottom,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayoutNavigation,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxDoor,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,23,900,14, this);
					this.ui.setWidth("1000");
					egl.atLine(this.eze$$fileName,24,921,29, this);
					this.ui.setBackgroundColor("AliceBlue");
					egl.atLine(this.eze$$fileName,25,957,16, this);
					this.ui.setMarginBottom(5);
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,26,1006,66, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,26,1026,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,26,1035,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,27,1052,18, this);
						eze$SettingTarget1.horizontalSpan = 3;
						egl.atLine(this.eze$$fileName,26,1006,66, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,26,993,79, this);
					this.BoxDoor.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,27,1074,9, this);
					this.BoxDoor.setPadding(8);
					egl.atLine(this.eze$$fileName,28,1090,19, this);
					this.BoxDoor.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Door,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,29,1116,29, this);
					this.BoxDoor.setBackgroundColor("AliceBlue");
					egl.atLine(this.eze$$fileName,31,1171,38, this);
					this.Door.setSrc("E:\\workspace\\pictures\\3.jpg");
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,33,1267,66, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,33,1287,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,33,1296,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,34,1313,18, this);
						eze$SettingTarget1.horizontalSpan = 2;
						egl.atLine(this.eze$$fileName,33,1267,66, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,33,1254,79, this);
					this.GridLayoutNavigation.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,34,1335,15, this);
					this.GridLayoutNavigation.setCellPadding(4);
					egl.atLine(this.eze$$fileName,34,1352,8, this);
					this.GridLayoutNavigation.setRows(1);
					egl.atLine(this.eze$$fileName,34,1362,11, this);
					this.GridLayoutNavigation.setColumns(2);
					egl.atLine(this.eze$$fileName,35,1380,28, this);
					this.GridLayoutNavigation.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxNavigation,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,36,1415,14, this);
					this.GridLayoutNavigation.setWidth("1000");
					egl.atLine(this.eze$$fileName,37,1436,13, this);
					this.GridLayoutNavigation.setHeight("50");
					egl.atLine(this.eze$$fileName,38,1456,27, this);
					this.GridLayoutNavigation.setBorderBottomStyle("solid");
					egl.atLine(this.eze$$fileName,39,1490,21, this);
					this.GridLayoutNavigation.setBorderColor("Khaki");
					egl.atLine(this.eze$$fileName,40,1518,25, this);
					this.GridLayoutNavigation.setBackgroundColor("Khaki");
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,41,1583,66, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,41,1603,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,41,1612,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,42,1629,18, this);
						eze$SettingTarget1.horizontalSpan = 2;
						egl.atLine(this.eze$$fileName,41,1583,66, this);
						eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
					}
					egl.atLine(this.eze$$fileName,41,1570,79, this);
					this.BoxNavigation.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,42,1651,9, this);
					this.BoxNavigation.setPadding(8);
					egl.atLine(this.eze$$fileName,43,1667,65, this);
					this.BoxNavigation.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Login,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HomePage,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Learning,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Test,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Education,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Users,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,44,1739,13, this);
					this.BoxNavigation.setWidth("600");
					egl.atLine(this.eze$$fileName,45,1759,13, this);
					this.BoxNavigation.setHeight("50");
					egl.atLine(this.eze$$fileName,46,1796,11, this);
					this.HomePage.setText("\u9996\u9875");
					egl.atLine(this.eze$$fileName,47,1814,13, this);
					this.HomePage.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,48,1834,15, this);
					this.HomePage.setFontSize("16");
					egl.atLine(this.eze$$fileName,49,1856,19, this);
					this.HomePage.setFontWeight("bold");
					egl.atLine(this.eze$$fileName,49,1877,20, this);
					this.HomePage.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Study.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,50,1922,13, this);
					this.Learning.setText("\u5728\u7ebf\u5b66\u4e60");
					egl.atLine(this.eze$$fileName,51,1942,13, this);
					this.Learning.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,52,1962,15, this);
					this.Learning.setFontSize("16");
					egl.atLine(this.eze$$fileName,53,1984,19, this);
					this.Learning.setFontWeight("bold");
					egl.atLine(this.eze$$fileName,53,2005,20, this);
					this.Learning.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Study.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,54,2045,13, this);
					this.Test.setText("\u5728\u7ebf\u6d4b\u8bd5");
					egl.atLine(this.eze$$fileName,55,2065,13, this);
					this.Test.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,56,2085,15, this);
					this.Test.setFontSize("16");
					egl.atLine(this.eze$$fileName,57,2107,19, this);
					this.Test.setFontWeight("bold");
					egl.atLine(this.eze$$fileName,57,2128,20, this);
					this.Test.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Study.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,58,2174,13, this);
					this.Education.setText("\u6559\u80b2\u8d44\u8baf");
					egl.atLine(this.eze$$fileName,59,2194,13, this);
					this.Education.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,60,2214,15, this);
					this.Education.setFontSize("16");
					egl.atLine(this.eze$$fileName,61,2236,19, this);
					this.Education.setFontWeight("bold");
					egl.atLine(this.eze$$fileName,61,2257,20, this);
					this.Education.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Study.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,62,2299,13, this);
					this.Users.setText("\u4e2a\u4eba\u4e2d\u5fc3");
					egl.atLine(this.eze$$fileName,63,2319,13, this);
					this.Users.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,64,2339,15, this);
					this.Users.setFontSize("16");
					egl.atLine(this.eze$$fileName,65,2361,19, this);
					this.Users.setFontWeight("bold");
					egl.atLine(this.eze$$fileName,65,2382,20, this);
					this.Users.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Study.prototype.showcall, ""));
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,66,2441,121, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,66,2461,7, this);
						eze$SettingTarget1.row = 5;
						egl.atLine(this.eze$$fileName,66,2470,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,67,2487,18, this);
						eze$SettingTarget1.horizontalSpan = 3;
						egl.atLine(this.eze$$fileName,68,2512,48, this);
						eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_CENTER;
						egl.atLine(this.eze$$fileName,66,2441,121, this);
						eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
					}
					egl.atLine(this.eze$$fileName,66,2428,134, this);
					this.Bottom.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,68,2564,29, this);
					this.Bottom.setText("All Rights Reserved!");
					egl.atLine(this.eze$$fileName,69,2600,14, this);
					this.Bottom.setMarginTop(20);
					egl.atLine(this.eze$$fileName,70,2621,17, this);
					this.Bottom.setMarginBottom(10);
					egl.atLine(this.eze$$fileName,71,2645,13, this);
					this.Bottom.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,72,2714,66, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,72,2734,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,72,2743,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,73,2760,18, this);
						eze$SettingTarget1.horizontalSpan = 3;
						egl.atLine(this.eze$$fileName,72,2714,66, this);
						eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
					}
					egl.atLine(this.eze$$fileName,72,2701,79, this);
					this.GridLayoutAccouncement.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,73,2782,15, this);
					this.GridLayoutAccouncement.setCellPadding(4);
					egl.atLine(this.eze$$fileName,73,2799,8, this);
					this.GridLayoutAccouncement.setRows(3);
					egl.atLine(this.eze$$fileName,73,2809,11, this);
					this.GridLayoutAccouncement.setColumns(3);
					egl.atLine(this.eze$$fileName,74,2827,21, this);
					this.GridLayoutAccouncement.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxBody,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,75,2882,117, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,75,2902,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,75,2911,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,76,2928,18, this);
						eze$SettingTarget1.horizontalSpan = 2;
						egl.atLine(this.eze$$fileName,77,2953,44, this);
						eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
						egl.atLine(this.eze$$fileName,75,2882,117, this);
						eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
					}
					egl.atLine(this.eze$$fileName,75,2869,130, this);
					this.BoxBody.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp6.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,77,3001,9, this);
					this.BoxBody.setPadding(8);
					egl.atLine(this.eze$$fileName,78,3017,14, this);
					this.BoxBody.setWidth("1000");
					egl.atLine(this.eze$$fileName,79,3038,21, this);
					this.BoxBody.setPosition("relative");
					egl.atLine(this.eze$$fileName,80,3085,11, this);
					this.Login.setText("\u767b\u9646");
					egl.atLine(this.eze$$fileName,81,3103,13, this);
					this.Login.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,82,3123,15, this);
					this.Login.setFontSize("16");
					egl.atLine(this.eze$$fileName,83,3145,19, this);
					this.Login.setFontWeight("bold");
					egl.atLine(this.eze$$fileName,83,3166,20, this);
					this.Login.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Study.prototype.showcall, ""));
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,84,3216,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,84,3236,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,84,3245,10, this);
						eze$SettingTarget1.column = 3;
						egl.atLine(this.eze$$fileName,84,3216,41, this);
						eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
					}
					egl.atLine(this.eze$$fileName,84,3203,54, this);
					this.Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,84,3259,9, this);
					this.Box.setPadding(8);
					egl.atLine(this.eze$$fileName,85,3275,32, this);
					this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextField,"dojo.widgets.DojoTextField"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,87,3365,11, this);
					this.Button.setText("\u641c\u7d22");
					egl.atLine(this.eze$$fileName,19,665,28, this);
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
				var ezert$$2 = new egl.client.client.Study();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.BoxDoor = ezert$$1.BoxDoor === null ? null : ezert$$1.BoxDoor.eze$$clone();
				ezert$$2.Door = ezert$$1.Door === null ? null : ezert$$1.Door.eze$$clone();
				ezert$$2.GridLayoutNavigation = ezert$$1.GridLayoutNavigation === null ? null : ezert$$1.GridLayoutNavigation.eze$$clone();
				ezert$$2.BoxNavigation = ezert$$1.BoxNavigation === null ? null : ezert$$1.BoxNavigation.eze$$clone();
				ezert$$2.HomePage = ezert$$1.HomePage === null ? null : ezert$$1.HomePage.eze$$clone();
				ezert$$2.Learning = ezert$$1.Learning === null ? null : ezert$$1.Learning.eze$$clone();
				ezert$$2.Test = ezert$$1.Test === null ? null : ezert$$1.Test.eze$$clone();
				ezert$$2.Education = ezert$$1.Education === null ? null : ezert$$1.Education.eze$$clone();
				ezert$$2.Users = ezert$$1.Users === null ? null : ezert$$1.Users.eze$$clone();
				ezert$$2.Bottom = ezert$$1.Bottom === null ? null : ezert$$1.Bottom.eze$$clone();
				ezert$$2.GridLayoutAccouncement = ezert$$1.GridLayoutAccouncement === null ? null : ezert$$1.GridLayoutAccouncement.eze$$clone();
				ezert$$2.BoxBody = ezert$$1.BoxBody === null ? null : ezert$$1.BoxBody.eze$$clone();
				ezert$$2.Login = ezert$$1.Login === null ? null : ezert$$1.Login;
				ezert$$2.Box = ezert$$1.Box === null ? null : ezert$$1.Box.eze$$clone();
				ezert$$2.TextField = ezert$$1.TextField === null ? null : ezert$$1.TextField;
				ezert$$2.Button = ezert$$1.Button === null ? null : ezert$$1.Button;
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "BoxDoor", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Door", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "GridLayoutNavigation", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "BoxNavigation", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "HomePage", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Learning", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Test", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Education", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Users", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Bottom", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "GridLayoutAccouncement", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "BoxBody", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Login", sig: "dojo.widgets.DojoButton"},
					{name: "Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TextField", sig: "dojo.widgets.DojoTextField"},
					{name: "Button", sig: "dojo.widgets.DojoButton"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Study", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxDoor", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxDoor");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("BoxDoor", "BoxDoor", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Door", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Door");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("Door", "Door", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayoutNavigation", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayoutNavigation");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("GridLayoutNavigation", "GridLayoutNavigation", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxNavigation", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxNavigation");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("BoxNavigation", "BoxNavigation", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HomePage", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HomePage");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("HomePage", "HomePage", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Learning", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Learning");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("Learning", "Learning", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Test", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Test");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("Test", "Test", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Education", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Education");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("Education", "Education", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Users", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Users");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("Users", "Users", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Bottom", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Bottom");
					this.fieldInfos[10] =new egl.eglx.services.FieldInfo("Bottom", "Bottom", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayoutAccouncement", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayoutAccouncement");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("GridLayoutAccouncement", "GridLayoutAccouncement", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("BoxBody", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("BoxBody");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("BoxBody", "BoxBody", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("Box", "Box", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,91,3395,27, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"showcall": function(event) {
				try { egl.enter("showcall",this,arguments);
					egl.addLocalFunctionVariable("event", event, "eglx.ui.rui.Event", "event");
					var button;
					egl.addLocalFunctionVariable("button", button, "dojo.widgets.DojoButton", "button");
					egl.atLine(this.eze$$fileName,95,3494,12, this);
					button = egl.eglx.lang.EAny.ezeCast({eze$$value : event.widget, eze$$signature : "eglx.ui.rui.Widget"}, egl.dojo.widgets.DojoButton);
					egl.setLocalFunctionVariable("button", button, "dojo.widgets.DojoButton");
					egl.atLine(this.eze$$fileName,96,3515,23, this);
					this.BoxBody.setChildren((function() { var eze$Temp8 = []; eze$Temp8.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp8[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp8;})());
					{
						egl.atLine(this.eze$$fileName,97,3547,402, this);
						egl.atLine(this.eze$$fileName,97,3547,402, this);
						EzeLabel_eze_CaseLabel_0: if (((button.getText()) == "\u767b\u9646")) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,98,3588,36, this);
								this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Login().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,99,3634,52, this);
								if (((button.getText()) == "\u9996\u9875")) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,99,3647,39, this);
										this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.HomePage().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
									}finally{egl.exitBlock();}
								}
								else {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,100,3696,54, this);
										if (((button.getText()) == "\u5728\u7ebf\u5b66\u4e60")) {
											try{egl.enterBlock();
												egl.atLine(this.eze$$fileName,100,3711,39, this);
												this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Learning().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
											}finally{egl.exitBlock();}
										}
										else {
											try{egl.enterBlock();
												egl.atLine(this.eze$$fileName,101,3760,50, this);
												if (((button.getText()) == "\u5728\u7ebf\u6d4b\u8bd5")) {
													try{egl.enterBlock();
														egl.atLine(this.eze$$fileName,101,3775,35, this);
														this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Test().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
													}finally{egl.exitBlock();}
												}
												else {
													try{egl.enterBlock();
														egl.atLine(this.eze$$fileName,102,3820,55, this);
														if (((button.getText()) == "\u6559\u80b2\u8d44\u8baf")) {
															try{egl.enterBlock();
																egl.atLine(this.eze$$fileName,102,3835,40, this);
																this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Education().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
															}finally{egl.exitBlock();}
														}
														else {
															try{egl.enterBlock();
																egl.atLine(this.eze$$fileName,103,3885,52, this);
																if (((button.getText()) == "\u4e2a\u4eba\u4e2d\u5fc3")) {
																	try{egl.enterBlock();
																		egl.atLine(this.eze$$fileName,103,3900,37, this);
																		this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.UserIn().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
																	}finally{egl.exitBlock();}
																}
															}finally{egl.exitBlock();}
														}
													}finally{egl.exitBlock();}
												}
											}finally{egl.exitBlock();}
										}
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
						}
					}
					egl.atLine(this.eze$$fileName,94,3436,522, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Study]";
			}
			,
			"eze$$getName": function() {
				return "Study";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "GridLayoutLib", value : egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'], type : "org.eclipse.edt.rui.widgets.GridLayoutLib", jsName : "egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst']"},
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "BoxDoor", value : eze$$parent.BoxDoor, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxDoor"},
				{name: "Door", value : eze$$parent.Door, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Door"},
				{name: "GridLayoutNavigation", value : eze$$parent.GridLayoutNavigation, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayoutNavigation"},
				{name: "BoxNavigation", value : eze$$parent.BoxNavigation, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxNavigation"},
				{name: "HomePage", value : eze$$parent.HomePage, type : "org.eclipse.edt.rui.widgets.Button", jsName : "HomePage"},
				{name: "Learning", value : eze$$parent.Learning, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Learning"},
				{name: "Test", value : eze$$parent.Test, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Test"},
				{name: "Education", value : eze$$parent.Education, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Education"},
				{name: "Users", value : eze$$parent.Users, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Users"},
				{name: "Bottom", value : eze$$parent.Bottom, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "Bottom"},
				{name: "GridLayoutAccouncement", value : eze$$parent.GridLayoutAccouncement, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayoutAccouncement"},
				{name: "BoxBody", value : eze$$parent.BoxBody, type : "org.eclipse.edt.rui.widgets.Box", jsName : "BoxBody"},
				{name: "Login", value : eze$$parent.Login, type : "dojo.widgets.DojoButton", jsName : "Login"},
				{name: "Box", value : eze$$parent.Box, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box"},
				{name: "TextField", value : eze$$parent.TextField, type : "dojo.widgets.DojoTextField", jsName : "TextField"},
				{name: "Button", value : eze$$parent.Button, type : "dojo.widgets.DojoButton", jsName : "Button"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
