define(["org/eclipse/edt/rui/widgets/Box", "client/client/number", "client/client/fruit", "client/client/fish", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/TextLabel", "eglx/ui/rui/eze$$Event", "client/client/car", "ezekw$$dojo/widgets/eze$$DojoButton", "org/eclipse/edt/rui/widgets/GridLayoutData", "client/client/pencil", "org/eclipse/edt/rui/widgets/GridLayout"],function(){
	egl.loadCSS("css/NewProject1.css");
	egl.defineRUIHandler("client.client", "Test3", {
		"eze$$fileName" : "client/client/Test3.egl",
		"eze$$runtimePropertiesFile" : "client/client/Test3",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.conBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.con = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.GridLayout = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.GridLayout1 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Button = new egl.dojo.widgets.DojoButton();
				this.Button1 = new egl.dojo.widgets.DojoButton();
				this.Button2 = new egl.dojo.widgets.DojoButton();
				this.Button3 = new egl.dojo.widgets.DojoButton();
				this.Button4 = new egl.dojo.widgets.DojoButton();
				this.GridLayout2 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Boxcon = new egl.org.eclipse.edt.rui.widgets.Box();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,20,523,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,20,536,8, this);
					this.ui.setRows(2);
					egl.atLine(this.eze$$fileName,20,546,15, this);
					this.ui.setCellPadding(1);
					egl.atLine(this.eze$$fileName,20,563,33, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.conBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,21,628,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,21,648,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,21,657,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,21,628,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,21,615,54, this);
					this.conBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,21,671,9, this);
					this.conBox.setPadding(8);
					egl.atLine(this.eze$$fileName,22,687,18, this);
					this.conBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.con,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,23,713,29, this);
					this.conBox.setBackgroundColor("Turquoise");
					egl.atLine(this.eze$$fileName,24,749,13, this);
					this.conBox.setWidth("790");
					egl.atLine(this.eze$$fileName,25,784,15, this);
					this.con.setText("\u4e09\u3001\u52a0\u51cf\u6cd5\uff08\u4e00\uff09");
					egl.atLine(this.eze$$fileName,26,806,13, this);
					this.con.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,27,826,15, this);
					this.con.setFontSize("20");
					egl.atLine(this.eze$$fileName,28,848,21, this);
					this.con.setFontWeight("bolder");
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,29,913,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,29,933,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,29,942,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,29,913,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,29,900,54, this);
					this.GridLayout.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,29,956,15, this);
					this.GridLayout.setCellPadding(4);
					egl.atLine(this.eze$$fileName,29,973,8, this);
					this.GridLayout.setRows(2);
					egl.atLine(this.eze$$fileName,29,983,11, this);
					this.GridLayout.setColumns(1);
					egl.atLine(this.eze$$fileName,30,1001,39, this);
					this.GridLayout.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout2,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout1,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,31,1085,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,31,1105,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,31,1114,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,31,1085,41, this);
						eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
					}
					egl.atLine(this.eze$$fileName,31,1072,54, this);
					this.GridLayout1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,31,1128,15, this);
					this.GridLayout1.setCellPadding(4);
					egl.atLine(this.eze$$fileName,31,1145,8, this);
					this.GridLayout1.setRows(1);
					egl.atLine(this.eze$$fileName,31,1155,11, this);
					this.GridLayout1.setColumns(1);
					egl.atLine(this.eze$$fileName,32,1173,18, this);
					this.GridLayout1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,33,1221,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,33,1241,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,33,1250,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,33,1221,41, this);
						eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
					}
					egl.atLine(this.eze$$fileName,33,1208,54, this);
					this.Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,33,1264,9, this);
					this.Box.setPadding(8);
					egl.atLine(this.eze$$fileName,34,1280,57, this);
					this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button1,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button2,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button3,"dojo.widgets.DojoButton"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button4,"dojo.widgets.DojoButton"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,35,1364,14, this);
					this.Button.setText("\u6709\u51e0\u652f\u94c5\u7b14");
					egl.atLine(this.eze$$fileName,36,1385,13, this);
					this.Button.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,37,1405,15, this);
					this.Button.setFontSize("16");
					egl.atLine(this.eze$$fileName,37,1422,20, this);
					this.Button.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test3.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,38,1470,13, this);
					this.Button1.setText("\u6709\u51e0\u8f86\u8f66");
					egl.atLine(this.eze$$fileName,39,1490,13, this);
					this.Button1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,40,1510,15, this);
					this.Button1.setFontSize("16");
					egl.atLine(this.eze$$fileName,40,1527,20, this);
					this.Button1.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test3.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,41,1575,12, this);
					this.Button2.setText("\u6458\u679c\u5b50");
					egl.atLine(this.eze$$fileName,42,1594,13, this);
					this.Button2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,43,1614,15, this);
					this.Button2.setFontSize("16");
					egl.atLine(this.eze$$fileName,43,1631,20, this);
					this.Button2.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test3.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,44,1679,13, this);
					this.Button3.setText("\u5c0f\u732b\u5403\u9c7c");
					egl.atLine(this.eze$$fileName,45,1699,13, this);
					this.Button3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,46,1719,15, this);
					this.Button3.setFontSize("16");
					egl.atLine(this.eze$$fileName,46,1736,20, this);
					this.Button3.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test3.prototype.showcall, ""));
					egl.atLine(this.eze$$fileName,47,1784,13, this);
					this.Button4.setText("\u731c\u6570\u6e38\u620f");
					egl.atLine(this.eze$$fileName,48,1804,13, this);
					this.Button4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,49,1824,15, this);
					this.Button4.setFontSize("16");
					egl.atLine(this.eze$$fileName,49,1841,20, this);
					this.Button4.getOnClick().appendElement(new egl.egl.jsrt.Delegate(this, egl.client.client.Test3.prototype.showcall, ""));
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,51,1910,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,51,1930,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,51,1939,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,51,1910,41, this);
						eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
					}
					egl.atLine(this.eze$$fileName,51,1897,54, this);
					this.GridLayout2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,51,1953,15, this);
					this.GridLayout2.setCellPadding(4);
					egl.atLine(this.eze$$fileName,51,1970,8, this);
					this.GridLayout2.setRows(1);
					egl.atLine(this.eze$$fileName,51,1980,11, this);
					this.GridLayout2.setColumns(1);
					egl.atLine(this.eze$$fileName,52,1998,21, this);
					this.GridLayout2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Boxcon,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,53,2052,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,53,2072,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,53,2081,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,53,2052,41, this);
						eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
					}
					egl.atLine(this.eze$$fileName,53,2039,54, this);
					this.Boxcon.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp6.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,53,2095,9, this);
					this.Boxcon.setPadding(8);
					egl.atLine(this.eze$$fileName,17,397,28, this);
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
				var ezert$$2 = new egl.client.client.Test3();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.conBox = ezert$$1.conBox === null ? null : ezert$$1.conBox.eze$$clone();
				ezert$$2.con = ezert$$1.con === null ? null : ezert$$1.con.eze$$clone();
				ezert$$2.GridLayout = ezert$$1.GridLayout === null ? null : ezert$$1.GridLayout.eze$$clone();
				ezert$$2.GridLayout1 = ezert$$1.GridLayout1 === null ? null : ezert$$1.GridLayout1.eze$$clone();
				ezert$$2.Box = ezert$$1.Box === null ? null : ezert$$1.Box.eze$$clone();
				ezert$$2.Button = ezert$$1.Button === null ? null : ezert$$1.Button;
				ezert$$2.Button1 = ezert$$1.Button1 === null ? null : ezert$$1.Button1;
				ezert$$2.Button2 = ezert$$1.Button2 === null ? null : ezert$$1.Button2;
				ezert$$2.Button3 = ezert$$1.Button3 === null ? null : ezert$$1.Button3;
				ezert$$2.Button4 = ezert$$1.Button4 === null ? null : ezert$$1.Button4;
				ezert$$2.GridLayout2 = ezert$$1.GridLayout2 === null ? null : ezert$$1.GridLayout2.eze$$clone();
				ezert$$2.Boxcon = ezert$$1.Boxcon === null ? null : ezert$$1.Boxcon.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "conBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "con", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "GridLayout", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "GridLayout1", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Button", sig: "dojo.widgets.DojoButton"},
					{name: "Button1", sig: "dojo.widgets.DojoButton"},
					{name: "Button2", sig: "dojo.widgets.DojoButton"},
					{name: "Button3", sig: "dojo.widgets.DojoButton"},
					{name: "Button4", sig: "dojo.widgets.DojoButton"},
					{name: "GridLayout2", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Boxcon", sig: "org.eclipse.edt.rui.widgets.Box"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Test3", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("conBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("conBox");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("conBox", "conBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("con", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("con");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("con", "con", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("GridLayout", "GridLayout", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout1");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("GridLayout1", "GridLayout1", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("Box", "Box", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout2");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("GridLayout2", "GridLayout2", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Boxcon", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Boxcon");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("Boxcon", "Boxcon", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,54,2112,24, this);
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
					egl.atLine(this.eze$$fileName,58,2203,12, this);
					button = egl.eglx.lang.EAny.ezeCast({eze$$value : event.widget, eze$$signature : "eglx.ui.rui.Widget"}, egl.dojo.widgets.DojoButton);
					egl.setLocalFunctionVariable("button", button, "dojo.widgets.DojoButton");
					egl.atLine(this.eze$$fileName,59,2224,22, this);
					this.Boxcon.setChildren((function() { var eze$Temp7 = []; eze$Temp7.setType("[eglx.ui.rui.Widget");
						for (var i = 0; i < 0; i++) {
						eze$Temp7[i] = new egl.eglx.ui.rui.Widget();}
					return eze$Temp7;})());
					{
						egl.atLine(this.eze$$fileName,60,2255,329, this);
						egl.atLine(this.eze$$fileName,60,2255,329, this);
						EzeLabel_eze_CaseLabel_0: if (((button.getText()) == "\u6709\u51e0\u652f\u94c5\u7b14")) {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,61,2299,36, this);
								this.Boxcon.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.pencil().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
							}finally{egl.exitBlock();}
						}
						else {
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,62,2345,48, this);
								if (((button.getText()) == "\u6709\u51e0\u8f86\u8f66")) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,62,2360,33, this);
										this.Boxcon.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.car().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
									}finally{egl.exitBlock();}
								}
								else {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,63,2403,49, this);
										if (((button.getText()) == "\u6458\u679c\u5b50")) {
											try{egl.enterBlock();
												egl.atLine(this.eze$$fileName,63,2417,35, this);
												this.Boxcon.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.fruit().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
											}finally{egl.exitBlock();}
										}
										else {
											try{egl.enterBlock();
												egl.atLine(this.eze$$fileName,64,2462,49, this);
												if (((button.getText()) == "\u5c0f\u732b\u5403\u9c7c")) {
													try{egl.enterBlock();
														egl.atLine(this.eze$$fileName,64,2477,34, this);
														this.Boxcon.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.fish().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
													}finally{egl.exitBlock();}
												}
												else {
													try{egl.enterBlock();
														egl.atLine(this.eze$$fileName,65,2521,51, this);
														if (((button.getText()) == "\u731c\u6570\u6e38\u620f")) {
															try{egl.enterBlock();
																egl.atLine(this.eze$$fileName,65,2536,36, this);
																this.Boxcon.appendChild(egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [new egl.client.client.number().ui,"org.eclipse.edt.rui.widgets.GridLayout"]));
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
					egl.atLine(this.eze$$fileName,57,2146,446, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Test3]";
			}
			,
			"eze$$getName": function() {
				return "Test3";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "conBox", value : eze$$parent.conBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "conBox"},
				{name: "con", value : eze$$parent.con, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "con"},
				{name: "GridLayout", value : eze$$parent.GridLayout, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout"},
				{name: "GridLayout1", value : eze$$parent.GridLayout1, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout1"},
				{name: "Box", value : eze$$parent.Box, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box"},
				{name: "Button", value : eze$$parent.Button, type : "dojo.widgets.DojoButton", jsName : "Button"},
				{name: "Button1", value : eze$$parent.Button1, type : "dojo.widgets.DojoButton", jsName : "Button1"},
				{name: "Button2", value : eze$$parent.Button2, type : "dojo.widgets.DojoButton", jsName : "Button2"},
				{name: "Button3", value : eze$$parent.Button3, type : "dojo.widgets.DojoButton", jsName : "Button3"},
				{name: "Button4", value : eze$$parent.Button4, type : "dojo.widgets.DojoButton", jsName : "Button4"},
				{name: "GridLayout2", value : eze$$parent.GridLayout2, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout2"},
				{name: "Boxcon", value : eze$$parent.Boxcon, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Boxcon"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
