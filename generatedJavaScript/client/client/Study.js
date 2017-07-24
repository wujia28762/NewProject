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
				this.eze$$setEmpty();
				this.ui.setColumns(3);
				this.ui.setRows(5);
				this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayoutAccouncement,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Bottom,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayoutNavigation,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxDoor,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.ui.setWidth("1000");
				this.ui.setBackgroundColor("AliceBlue");
				this.ui.setMarginBottom(5);
				var eze$LNNTemp1 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$SettingTarget1.horizontalSpan = 3;
					eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
				}
				this.BoxDoor.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.BoxDoor.setPadding(8);
				this.BoxDoor.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Door,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
				this.BoxDoor.setBackgroundColor("AliceBlue");
				this.Door.setSrc("E:\\workspace\\pictures\\3.jpg");
				var eze$LNNTemp2 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 1;
					eze$SettingTarget1.horizontalSpan = 2;
					eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
				}
				this.GridLayoutNavigation.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.GridLayoutNavigation.setCellPadding(4);
				this.GridLayoutNavigation.setRows(1);
				this.GridLayoutNavigation.setColumns(2);
				this.GridLayoutNavigation.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxNavigation,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.GridLayoutNavigation.setWidth("1000");
				this.GridLayoutNavigation.setHeight("50");
				this.GridLayoutNavigation.setBorderBottomStyle("solid");
				this.GridLayoutNavigation.setBorderColor("Khaki");
				this.GridLayoutNavigation.setBackgroundColor("Khaki");
				var eze$LNNTemp3 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$SettingTarget1.horizontalSpan = 2;
					eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
				}
				this.BoxNavigation.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.BoxNavigation.setPadding(8);
				this.BoxNavigation.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Login,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HomePage,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Learning,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Test,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Education,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Users,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
				this.BoxNavigation.setWidth("600");
				this.BoxNavigation.setHeight("50");
				this.HomePage.setText("\u9996\u9875");
				this.HomePage.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.HomePage.setFontSize("16");
				this.HomePage.setFontWeight("bold");
				this.HomePage.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Study.prototype.showcall, ""));
				this.Learning.setText("\u5728\u7ebf\u5b66\u4e60");
				this.Learning.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Learning.setFontSize("16");
				this.Learning.setFontWeight("bold");
				this.Learning.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Study.prototype.showcall, ""));
				this.Test.setText("\u5728\u7ebf\u6d4b\u8bd5");
				this.Test.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Test.setFontSize("16");
				this.Test.setFontWeight("bold");
				this.Test.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Study.prototype.showcall, ""));
				this.Education.setText("\u6559\u80b2\u8d44\u8baf");
				this.Education.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Education.setFontSize("16");
				this.Education.setFontWeight("bold");
				this.Education.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Study.prototype.showcall, ""));
				this.Users.setText("\u4e2a\u4eba\u4e2d\u5fc3");
				this.Users.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Users.setFontSize("16");
				this.Users.setFontWeight("bold");
				this.Users.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Study.prototype.showcall, ""));
				var eze$LNNTemp4 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 5;
					eze$SettingTarget1.column = 1;
					eze$SettingTarget1.horizontalSpan = 3;
					eze$SettingTarget1.horizontalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].ALIGN_CENTER;
					eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
				}
				this.Bottom.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.Bottom.setText("All Rights Reserved!");
				this.Bottom.setMarginTop(20);
				this.Bottom.setMarginBottom(10);
				this.Bottom.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				var eze$LNNTemp5 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 3;
					eze$SettingTarget1.column = 1;
					eze$SettingTarget1.horizontalSpan = 3;
					eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
				}
				this.GridLayoutAccouncement.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.GridLayoutAccouncement.setCellPadding(4);
				this.GridLayoutAccouncement.setRows(3);
				this.GridLayoutAccouncement.setColumns(3);
				this.GridLayoutAccouncement.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.BoxBody,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				var eze$LNNTemp6 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$SettingTarget1.horizontalSpan = 2;
					eze$SettingTarget1.verticalAlignment = egl.org.eclipse.edt.rui.widgets.GridLayoutLib['$inst'].VALIGN_TOP;
					eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
				}
				this.BoxBody.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp6.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.BoxBody.setPadding(8);
				this.BoxBody.setWidth("1000");
				this.BoxBody.setPosition("relative");
				this.Login.setText("\u767b\u9646");
				this.Login.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Login.setFontSize("16");
				this.Login.setFontWeight("bold");
				this.Login.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Study.prototype.showcall, ""));
				var eze$LNNTemp7 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 2;
					eze$SettingTarget1.column = 3;
					eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
				}
				this.Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.Box.setPadding(8);
				this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextField,"dojo.widgets.DojoTextField"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
				this.Button.setText("\u641c\u7d22");
				this.initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;");
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
			}
			,
			"showcall": function(event) {
				var button;
				button = egl.eglx.lang.EAny.ezeCast({eze$$value : event.widget, eze$$signature : "eglx.ui.rui.Widget"}, egl.dojo.widgets.DojoButton);
				this.BoxBody.setChildren((function() { var eze$Temp8 = []; eze$Temp8.setType("[eglx.ui.rui.Widget");
					for (var i = 0; i < 0; i++) {
					eze$Temp8[i] = new egl.eglx.ui.rui.Widget();}
				return eze$Temp8;})());
				{
					EzeLabel_eze_CaseLabel_0: if (((button.getText()) == "\u767b\u9646")) {
						this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Login().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
					}
					else {
						if (((button.getText()) == "\u9996\u9875")) {
							this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.HomePage().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
						}
						else {
							if (((button.getText()) == "\u5728\u7ebf\u5b66\u4e60")) {
								this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Learning().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
							}
							else {
								if (((button.getText()) == "\u5728\u7ebf\u6d4b\u8bd5")) {
									this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Test().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
								}
								else {
									if (((button.getText()) == "\u6559\u80b2\u8d44\u8baf")) {
										this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.Education().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
									}
									else {
										if (((button.getText()) == "\u4e2a\u4eba\u4e2d\u5fc3")) {
											this.BoxBody.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.UserIn().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
										}
									}
								}
							}
						}
					}
				}
			}
			,
			"toString": function() {
				return "[Study]";
			}
		}
	);
});
