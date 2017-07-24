define(["org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/Image", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/TextLabel"],function(){
	egl.loadCSS("css/NewProject1.css");
	egl.defineRUIHandler("client.client", "top", {
		"eze$$fileName" : "client/client/top.egl",
		"eze$$runtimePropertiesFile" : "client/client/top",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.TextLabel = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.GridLayout = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.TextLabel1 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.GridLayout1 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.TextLabel2 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Image = new egl.org.eclipse.edt.rui.widgets.Image();
				this.GridLayout2 = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.TextLabel3 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.Box1 = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Image1 = new egl.org.eclipse.edt.rui.widgets.Image();
				this.Image2 = new egl.org.eclipse.edt.rui.widgets.Image();
				this.Image3 = new egl.org.eclipse.edt.rui.widgets.Image();
				this.Image4 = new egl.org.eclipse.edt.rui.widgets.Image();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,18,459,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,18,472,8, this);
					this.ui.setRows(2);
					egl.atLine(this.eze$$fileName,18,482,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,18,499,36, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,19,576,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,19,596,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,19,605,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,19,576,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,19,563,54, this);
					this.TextLabel.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,19,619,11, this);
					this.TextLabel.setText("\u9ad8\u77ee");
					egl.atLine(this.eze$$fileName,20,637,11, this);
					this.TextLabel.setFont("\u5b8b\u4f53");
					egl.atLine(this.eze$$fileName,21,655,15, this);
					this.TextLabel.setFontSize("28");
					egl.atLine(this.eze$$fileName,22,677,19, this);
					this.TextLabel.setFontWeight("bold");
					var eze$LNNTemp2 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,23,740,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,23,760,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,23,769,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,23,740,41, this);
						eze$LNNTemp2 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp2);
					}
					egl.atLine(this.eze$$fileName,23,727,54, this);
					this.GridLayout.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp2.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,23,783,15, this);
					this.GridLayout.setCellPadding(4);
					egl.atLine(this.eze$$fileName,23,800,8, this);
					this.GridLayout.setRows(3);
					egl.atLine(this.eze$$fileName,23,810,11, this);
					this.GridLayout.setColumns(1);
					egl.atLine(this.eze$$fileName,24,828,51, this);
					this.GridLayout.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout2,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.GridLayout1,"org.eclipse.edt.rui.widgets.GridLayout"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel1,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp3 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,25,922,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,25,942,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,25,951,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,25,922,41, this);
						eze$LNNTemp3 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp3);
					}
					egl.atLine(this.eze$$fileName,25,909,54, this);
					this.TextLabel1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp3.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,25,965,61, this);
					this.TextLabel1.setText("\u8bfe\u5802\u76f4\u901a\u8f66..........................................\u8bfe\u4e0a\u5b66\u4e00\u5b66");
					egl.atLine(this.eze$$fileName,26,1033,13, this);
					this.TextLabel1.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,27,1053,15, this);
					this.TextLabel1.setFontSize("24");
					var eze$LNNTemp4 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,28,1113,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,28,1133,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,28,1142,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,28,1113,41, this);
						eze$LNNTemp4 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp4);
					}
					egl.atLine(this.eze$$fileName,28,1100,54, this);
					this.GridLayout1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp4.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,28,1156,15, this);
					this.GridLayout1.setCellPadding(4);
					egl.atLine(this.eze$$fileName,28,1173,8, this);
					this.GridLayout1.setRows(2);
					egl.atLine(this.eze$$fileName,28,1183,11, this);
					this.GridLayout1.setColumns(1);
					egl.atLine(this.eze$$fileName,29,1201,30, this);
					this.GridLayout1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel2,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp5 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,30,1274,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,30,1294,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,30,1303,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,30,1274,41, this);
						eze$LNNTemp5 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp5);
					}
					egl.atLine(this.eze$$fileName,30,1261,54, this);
					this.TextLabel2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp5.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,30,1317,20, this);
					this.TextLabel2.setText("\u4e00\u3001\u5728\u6700\u9ad8\u7684\u4e0b\u9762\u753b\u221a\u3002");
					egl.atLine(this.eze$$fileName,31,1344,13, this);
					this.TextLabel2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,32,1364,15, this);
					this.TextLabel2.setFontSize("18");
					var eze$LNNTemp6 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,33,1409,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,33,1429,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,33,1438,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,33,1409,41, this);
						eze$LNNTemp6 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp6);
					}
					egl.atLine(this.eze$$fileName,33,1396,54, this);
					this.Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp6.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,33,1452,9, this);
					this.Box.setPadding(8);
					egl.atLine(this.eze$$fileName,34,1468,44, this);
					this.Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image2,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image3,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image4,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,36,1538,39, this);
					this.Image.setSrc("E:\\workspace\\pictures\\28.jpg");
					var eze$LNNTemp7 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,38,1626,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,38,1646,7, this);
						eze$SettingTarget1.row = 3;
						egl.atLine(this.eze$$fileName,38,1655,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,38,1626,41, this);
						eze$LNNTemp7 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
					}
					egl.atLine(this.eze$$fileName,38,1613,54, this);
					this.GridLayout2.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp7.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,38,1669,15, this);
					this.GridLayout2.setCellPadding(4);
					egl.atLine(this.eze$$fileName,38,1686,8, this);
					this.GridLayout2.setRows(2);
					egl.atLine(this.eze$$fileName,38,1696,11, this);
					this.GridLayout2.setColumns(1);
					egl.atLine(this.eze$$fileName,39,1714,31, this);
					this.GridLayout2.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Box1,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TextLabel3,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp8 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,40,1788,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,40,1808,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,40,1817,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,40,1788,41, this);
						eze$LNNTemp8 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp8);
					}
					egl.atLine(this.eze$$fileName,40,1775,54, this);
					this.TextLabel3.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp8.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,40,1831,34, this);
					this.TextLabel3.setText("\u4e8c\u3001\u5728\u6700\u9ad8\u7684\u4e0b\u9762\u91cc\u753b\u201c\u221a\u201d\uff0c\u5728\u6700\u77ee\u7684\u4e0b\u9762\u753b\u201c\u25cb\u201d\u3002");
					egl.atLine(this.eze$$fileName,41,1872,13, this);
					this.TextLabel3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,42,1892,15, this);
					this.TextLabel3.setFontSize("18");
					var eze$LNNTemp9 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,43,1938,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,43,1958,7, this);
						eze$SettingTarget1.row = 2;
						egl.atLine(this.eze$$fileName,43,1967,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,43,1938,41, this);
						eze$LNNTemp9 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp9);
					}
					egl.atLine(this.eze$$fileName,43,1925,54, this);
					this.Box1.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp9.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,43,1981,9, this);
					this.Box1.setPadding(8);
					egl.atLine(this.eze$$fileName,44,1997,21, this);
					this.Box1.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Image1,"org.eclipse.edt.rui.widgets.Image"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,46,2045,39, this);
					this.Image1.setSrc("E:\\workspace\\pictures\\29.jpg");
					egl.atLine(this.eze$$fileName,49,2115,38, this);
					this.Image2.setSrc("E:\\workspace\\pictures\\0.gif");
					egl.atLine(this.eze$$fileName,50,2160,15, this);
					this.Image2.setMarginTop(200);
					egl.atLine(this.eze$$fileName,51,2182,17, this);
					this.Image2.setMarginLeft(-350);
					egl.atLine(this.eze$$fileName,54,2230,38, this);
					this.Image3.setSrc("E:\\workspace\\pictures\\0.gif");
					egl.atLine(this.eze$$fileName,55,2275,15, this);
					this.Image3.setMarginTop(200);
					egl.atLine(this.eze$$fileName,56,2297,17, this);
					this.Image3.setMarginLeft(-230);
					egl.atLine(this.eze$$fileName,59,2345,38, this);
					this.Image4.setSrc("E:\\workspace\\pictures\\0.gif");
					egl.atLine(this.eze$$fileName,60,2390,15, this);
					this.Image4.setMarginTop(200);
					egl.atLine(this.eze$$fileName,61,2412,17, this);
					this.Image4.setMarginLeft(-100);
					egl.atLine(this.eze$$fileName,15,333,28, this);
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
				var ezert$$2 = new egl.client.client.top();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.TextLabel = ezert$$1.TextLabel === null ? null : ezert$$1.TextLabel.eze$$clone();
				ezert$$2.GridLayout = ezert$$1.GridLayout === null ? null : ezert$$1.GridLayout.eze$$clone();
				ezert$$2.TextLabel1 = ezert$$1.TextLabel1 === null ? null : ezert$$1.TextLabel1.eze$$clone();
				ezert$$2.GridLayout1 = ezert$$1.GridLayout1 === null ? null : ezert$$1.GridLayout1.eze$$clone();
				ezert$$2.TextLabel2 = ezert$$1.TextLabel2 === null ? null : ezert$$1.TextLabel2.eze$$clone();
				ezert$$2.Box = ezert$$1.Box === null ? null : ezert$$1.Box.eze$$clone();
				ezert$$2.Image = ezert$$1.Image === null ? null : ezert$$1.Image.eze$$clone();
				ezert$$2.GridLayout2 = ezert$$1.GridLayout2 === null ? null : ezert$$1.GridLayout2.eze$$clone();
				ezert$$2.TextLabel3 = ezert$$1.TextLabel3 === null ? null : ezert$$1.TextLabel3.eze$$clone();
				ezert$$2.Box1 = ezert$$1.Box1 === null ? null : ezert$$1.Box1.eze$$clone();
				ezert$$2.Image1 = ezert$$1.Image1 === null ? null : ezert$$1.Image1.eze$$clone();
				ezert$$2.Image2 = ezert$$1.Image2 === null ? null : ezert$$1.Image2.eze$$clone();
				ezert$$2.Image3 = ezert$$1.Image3 === null ? null : ezert$$1.Image3.eze$$clone();
				ezert$$2.Image4 = ezert$$1.Image4 === null ? null : ezert$$1.Image4.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "TextLabel", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "GridLayout", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "TextLabel1", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "GridLayout1", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "TextLabel2", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Image", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "GridLayout2", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "TextLabel3", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "Box1", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Image1", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "Image2", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "Image3", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "Image4", sig: "org.eclipse.edt.rui.widgets.Image"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("top", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("TextLabel", "TextLabel", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("GridLayout", "GridLayout", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel1");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("TextLabel1", "TextLabel1", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout1");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("GridLayout1", "GridLayout1", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel2");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("TextLabel2", "TextLabel2", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("Box", "Box", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Image", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Image");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("Image", "Image", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("GridLayout2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("GridLayout2");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("GridLayout2", "GridLayout2", "org.eclipse.edt.rui.widgets.GridLayout", egl.org.eclipse.edt.rui.widgets.GridLayout, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TextLabel3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TextLabel3");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("TextLabel3", "TextLabel3", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Box1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Box1");
					this.fieldInfos[10] =new egl.eglx.services.FieldInfo("Box1", "Box1", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Image1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Image1");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("Image1", "Image1", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Image2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Image2");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("Image2", "Image2", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Image3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Image3");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("Image3", "Image3", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Image4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Image4");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("Image4", "Image4", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,64,2442,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[top]";
			}
			,
			"eze$$getName": function() {
				return "top";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "TextLabel", value : eze$$parent.TextLabel, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel"},
				{name: "GridLayout", value : eze$$parent.GridLayout, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout"},
				{name: "TextLabel1", value : eze$$parent.TextLabel1, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel1"},
				{name: "GridLayout1", value : eze$$parent.GridLayout1, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout1"},
				{name: "TextLabel2", value : eze$$parent.TextLabel2, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel2"},
				{name: "Box", value : eze$$parent.Box, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box"},
				{name: "Image", value : eze$$parent.Image, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Image"},
				{name: "GridLayout2", value : eze$$parent.GridLayout2, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "GridLayout2"},
				{name: "TextLabel3", value : eze$$parent.TextLabel3, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "TextLabel3"},
				{name: "Box1", value : eze$$parent.Box1, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Box1"},
				{name: "Image1", value : eze$$parent.Image1, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Image1"},
				{name: "Image2", value : eze$$parent.Image2, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Image2"},
				{name: "Image3", value : eze$$parent.Image3, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Image3"},
				{name: "Image4", value : eze$$parent.Image4, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Image4"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
