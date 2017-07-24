define(["org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/Image", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/HTML", "org/eclipse/edt/rui/widgets/TextLabel", "org/eclipse/edt/rui/widgets/Button"],function(){
	egl.loadCSS("css/e-Learning.css");
	egl.defineRUIHandler("client.client", "ReLesson1", {
		"eze$$fileName" : "client/client/ReLesson1.egl",
		"eze$$runtimePropertiesFile" : "client/client/ReLesson1",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.Lesson1Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.TitleBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.LessonTitle = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.ButtonsBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Button1 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button2 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button3 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button4 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button5 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button6 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button7 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.Button8 = new egl.org.eclipse.edt.rui.widgets.Button();
				this.contentBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.topBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.leftBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.leftImage = new egl.org.eclipse.edt.rui.widgets.Image();
				this.leftText = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.bodyBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.HTML1 = new egl.org.eclipse.edt.rui.widgets.HTML();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,17,633,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,17,646,8, this);
					this.ui.setRows(1);
					egl.atLine(this.eze$$fileName,17,656,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,17,673,25, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,18,734,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,18,754,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,18,763,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,18,734,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,18,721,54, this);
					this.Lesson1Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,18,777,9, this);
					this.Lesson1Box.setPadding(8);
					egl.atLine(this.eze$$fileName,19,793,35, this);
					this.Lesson1Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TitleBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.contentBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,20,835,13, this);
					this.Lesson1Box.setWidth("900");
					egl.atLine(this.eze$$fileName,21,855,11, this);
					this.Lesson1Box.setColumns(1);
					egl.atLine(this.eze$$fileName,23,894,9, this);
					this.TitleBox.setPadding(8);
					egl.atLine(this.eze$$fileName,24,910,38, this);
					this.TitleBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.LessonTitle,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonsBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,25,956,32, this);
					this.TitleBox.setBackgroundColor("LightSkyBlue");
					egl.atLine(this.eze$$fileName,26,995,13, this);
					this.TitleBox.setWidth("900");
					egl.atLine(this.eze$$fileName,27,1015,13, this);
					this.TitleBox.setHeight("50");
					egl.atLine(this.eze$$fileName,28,1035,11, this);
					this.TitleBox.setColumns(2);
					egl.atLine(this.eze$$fileName,29,1077,9, this);
					this.LessonTitle.setText("\u73a9\u5177");
					egl.atLine(this.eze$$fileName,30,1094,13, this);
					this.LessonTitle.setFont("\u534e\u6587\u65b0\u9b4f");
					egl.atLine(this.eze$$fileName,31,1114,15, this);
					this.LessonTitle.setFontSize("30");
					egl.atLine(this.eze$$fileName,32,1153,9, this);
					this.ButtonsBox.setPadding(8);
					egl.atLine(this.eze$$fileName,33,1169,14, this);
					this.ButtonsBox.setMarginTop(20);
					egl.atLine(this.eze$$fileName,34,1190,15, this);
					this.ButtonsBox.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,35,1212,11, this);
					this.ButtonsBox.setColumns(8);
					egl.atLine(this.eze$$fileName,36,1230,85, this);
					this.ButtonsBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button1,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button2,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button3,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button4,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button5,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button6,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button7,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button8,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,37,1339,13, this);
					this.Button1.setText("\u8bfe\u7a0b\u7b80\u4ecb");
					egl.atLine(this.eze$$fileName,38,1359,15, this);
					this.Button1.setFontSize("14");
					egl.atLine(this.eze$$fileName,39,1381,13, this);
					this.Button1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,40,1418,13, this);
					this.Button2.setText("\u6559\u5e08\u7b80\u4ecb");
					egl.atLine(this.eze$$fileName,41,1438,15, this);
					this.Button2.setFontSize("14");
					egl.atLine(this.eze$$fileName,42,1460,13, this);
					this.Button2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,43,1497,13, this);
					this.Button3.setText("\u6307\u5b9a\u6559\u6750");
					egl.atLine(this.eze$$fileName,44,1517,15, this);
					this.Button3.setFontSize("14");
					egl.atLine(this.eze$$fileName,45,1539,13, this);
					this.Button3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,46,1576,13, this);
					this.Button4.setText("\u5b66\u4e60\u65b9\u6cd5");
					egl.atLine(this.eze$$fileName,47,1596,15, this);
					this.Button4.setFontSize("14");
					egl.atLine(this.eze$$fileName,48,1618,13, this);
					this.Button4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,49,1656,13, this);
					this.Button5.setText("\u6559\u5b66\u76ee\u6807");
					egl.atLine(this.eze$$fileName,50,1676,15, this);
					this.Button5.setFontSize("14");
					egl.atLine(this.eze$$fileName,51,1698,13, this);
					this.Button5.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,52,1735,13, this);
					this.Button6.setText("\u6559\u5b66\u91cd\u70b9");
					egl.atLine(this.eze$$fileName,53,1755,15, this);
					this.Button6.setFontSize("14");
					egl.atLine(this.eze$$fileName,54,1777,13, this);
					this.Button6.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,55,1814,13, this);
					this.Button7.setText("\u4f5c\u4e1a\u4e60\u9898");
					egl.atLine(this.eze$$fileName,56,1834,15, this);
					this.Button7.setFontSize("14");
					egl.atLine(this.eze$$fileName,57,1856,13, this);
					this.Button7.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,58,1893,13, this);
					this.Button8.setText("\u6388\u8bfe\u65f6\u957f");
					egl.atLine(this.eze$$fileName,59,1913,15, this);
					this.Button8.setFontSize("14");
					egl.atLine(this.eze$$fileName,60,1935,13, this);
					this.Button8.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,62,1978,9, this);
					this.contentBox.setPadding(8);
					egl.atLine(this.eze$$fileName,62,1988,9, this);
					this.contentBox.setColumns(1);
					egl.atLine(this.eze$$fileName,62,1999,26, this);
					this.contentBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.topBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.bodyBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,63,2044,9, this);
					this.topBox.setPadding(8);
					egl.atLine(this.eze$$fileName,63,2055,9, this);
					this.topBox.setColumns(2);
					egl.atLine(this.eze$$fileName,63,2066,18, this);
					this.topBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.leftBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,64,2091,13, this);
					this.topBox.setWidth("840");
					egl.atLine(this.eze$$fileName,66,2134,9, this);
					this.leftBox.setPadding(8);
					egl.atLine(this.eze$$fileName,66,2145,9, this);
					this.leftBox.setColumns(2);
					egl.atLine(this.eze$$fileName,67,2161,34, this);
					this.leftBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.leftImage,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.leftText,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,69,2224,39, this);
					this.leftImage.setSrc("E:\\workspace\\pictures\\\u56fe\u6807.jpg");
					egl.atLine(this.eze$$fileName,71,2295,16, this);
					this.leftText.setText("\u8bfe \u7a0b \u7b80 \u4ecb");
					egl.atLine(this.eze$$fileName,72,2318,15, this);
					this.leftText.setFontSize("16");
					egl.atLine(this.eze$$fileName,76,2366,9, this);
					this.bodyBox.setPadding(8);
					egl.atLine(this.eze$$fileName,76,2377,9, this);
					this.bodyBox.setColumns(1);
					egl.atLine(this.eze$$fileName,77,2392,20, this);
					this.bodyBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HTML1,"org.eclipse.edt.rui.widgets.HTML"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,78,2430,593, this);
					this.HTML1.setText((((((((((((((("<li><b>\u4e00\u3001 \u8bfe\u524d\u6d3b\u52a8</b></li><p>\u6253\u5f00\u4e66\u672c\uff0c\u8bf7\u627e\u4e00\u627e\u7b2c4\u9875\u548c\u7b2c5\u9875\u3002\u518d\u627e\u4e00\u627e\u7b2c6\u9875\u548c\u7b2c7\u9875\u3002\u4f60\u627e\u5230\u4e86\u5417\uff1f\u770b\u8c01\u627e\u5f97\u53c8\u5feb\u53c8\u51c6\u3002  </p>") + "<p>\u5c0f\u670b\u53cb\uff0c\u4f60\u4eec\u559c\u6b22\u73a9\u5177\u5417\uff1f\u4f60\u4eec\u90fd\u6709\u54ea\u4e9b\u73a9\u5177\u5462\uff1f\u6dd8\u6c14\u548c\u7b11\u7b11\u4e5f\u559c\u6b22\u73a9\u5177\uff0c\u4ed6\u4eec\u6b63\u5728\u7528\u624b\u4e2d\u7684\u73a9\u5177\u5e03\u7f6e\u4e00\u4e2a\u201c\u73a9\u5177\u57ce\u201d\uff0c\u6211\u4eec\u6765\u770b\u4e00\u770b\uff0c\u6570\u4e00\u6570\uff0c\u4ed6\u4eec\u90fd\u6709\u4e9b\u4ec0\u4e48\u73a9\u5177\uff0c\u6bcf\u6837\u73a9\u5177\u6709\u51e0\u4e2a\u5462\u3002</p>")) + "<li><b>\u4e8c\u3001\u5b66\u51991~5\u5404\u6570</b></li><p> 1\u3001\u89c2\u5bdf\u56fe\u753b\uff0c\u6570\u4e00\u6570\u56fe\u753b\u4e0a\u7269\u54c1\u7684\u6570\u91cf\u3002</p>")) + "<p>2\u3001\u6559\u5e08\u5f15\u5bfc\u5b66\u751f\u6709\u987a\u5e8f\u7684\u8bf4\u4e00\u8bf4\uff0c\u540c\u684c\u4ea4\u6d41\uff0c\u5168\u73ed\u4ea4\u6d41\u3002  </p>")) + "<p>3\u3001\u89c2\u5bdf1\uff0d5\u5404\u6570\uff0c\u8bf4\u8bf4\u5b83\u4eec\u50cf\u4ec0\u4e48\u3002</p>")) + "<p>4\u3001\u5b66\u51991\uff0d5\u5404\u6570\u3002  \uff08\u53ef\u4ee5\u7528\u53e3\u8bc0\u5e2e\u52a9\u8bb0\u5fc6\u3001\u63d0\u9ad8\u5174\u8da3\uff1a  1\u50cf\u5c0f\u68d2\u659c\u7740\u653e\uff0c2\u50cf\u5c0f\u9e2d\u560e\u560e\u53eb\uff0c3\u50cf\u8033\u6735\u5f2f\u53c8\u5f2f\uff0c4\u50cf\u5c0f\u65d7\u8fce\u98ce\u98d8\uff0c5\u50cf\u94a9\u5b50\u591a\u4e2a\u6a2a\u3002\uff09  </p>")) + "<p>5\u3001\u5728\u5c0f\u9ed1\u677f\u4e0a\u6559\u5e08\u6307\u5bfc\uff0c\u793a\u8303\uff0c\u5b66\u751f\u6a21\u4eff\u7ec3\u4e60\u3002</p>")) + "<p>6\u3001\u8bf4\u4e00\u8bf4\u600e\u6837\u624d\u80fd\u5199\u7684\u53c8\u5feb\u53c8\u597d\u3002</p>"));
					egl.atLine(this.eze$$fileName,86,3029,13, this);
					this.HTML1.setWidth("800");
					egl.atLine(this.eze$$fileName,87,3048,15, this);
					this.HTML1.setFontSize("14");
					egl.atLine(this.eze$$fileName,15,521,15, this);
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
				var ezert$$2 = new egl.client.client.ReLesson1();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.Lesson1Box = ezert$$1.Lesson1Box === null ? null : ezert$$1.Lesson1Box.eze$$clone();
				ezert$$2.TitleBox = ezert$$1.TitleBox === null ? null : ezert$$1.TitleBox.eze$$clone();
				ezert$$2.LessonTitle = ezert$$1.LessonTitle === null ? null : ezert$$1.LessonTitle.eze$$clone();
				ezert$$2.ButtonsBox = ezert$$1.ButtonsBox === null ? null : ezert$$1.ButtonsBox.eze$$clone();
				ezert$$2.Button1 = ezert$$1.Button1 === null ? null : ezert$$1.Button1.eze$$clone();
				ezert$$2.Button2 = ezert$$1.Button2 === null ? null : ezert$$1.Button2.eze$$clone();
				ezert$$2.Button3 = ezert$$1.Button3 === null ? null : ezert$$1.Button3.eze$$clone();
				ezert$$2.Button4 = ezert$$1.Button4 === null ? null : ezert$$1.Button4.eze$$clone();
				ezert$$2.Button5 = ezert$$1.Button5 === null ? null : ezert$$1.Button5.eze$$clone();
				ezert$$2.Button6 = ezert$$1.Button6 === null ? null : ezert$$1.Button6.eze$$clone();
				ezert$$2.Button7 = ezert$$1.Button7 === null ? null : ezert$$1.Button7.eze$$clone();
				ezert$$2.Button8 = ezert$$1.Button8 === null ? null : ezert$$1.Button8.eze$$clone();
				ezert$$2.contentBox = ezert$$1.contentBox === null ? null : ezert$$1.contentBox.eze$$clone();
				ezert$$2.topBox = ezert$$1.topBox === null ? null : ezert$$1.topBox.eze$$clone();
				ezert$$2.leftBox = ezert$$1.leftBox === null ? null : ezert$$1.leftBox.eze$$clone();
				ezert$$2.leftImage = ezert$$1.leftImage === null ? null : ezert$$1.leftImage.eze$$clone();
				ezert$$2.leftText = ezert$$1.leftText === null ? null : ezert$$1.leftText.eze$$clone();
				ezert$$2.bodyBox = ezert$$1.bodyBox === null ? null : ezert$$1.bodyBox.eze$$clone();
				ezert$$2.HTML1 = ezert$$1.HTML1 === null ? null : ezert$$1.HTML1.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "Lesson1Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "TitleBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "LessonTitle", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "ButtonsBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Button1", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button2", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button3", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button4", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button5", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button6", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button7", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "Button8", sig: "org.eclipse.edt.rui.widgets.Button"},
					{name: "contentBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "topBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "leftBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "leftImage", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "leftText", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "bodyBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "HTML1", sig: "org.eclipse.edt.rui.widgets.HTML"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("ReLesson1", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson1Box", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson1Box");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("Lesson1Box", "Lesson1Box", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("TitleBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("TitleBox");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("TitleBox", "TitleBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("LessonTitle", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("LessonTitle");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("LessonTitle", "LessonTitle", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("ButtonsBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("ButtonsBox");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("ButtonsBox", "ButtonsBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button1");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("Button1", "Button1", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button2");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("Button2", "Button2", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button3");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("Button3", "Button3", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button4", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button4");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("Button4", "Button4", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button5", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button5");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("Button5", "Button5", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button6", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button6");
					this.fieldInfos[10] =new egl.eglx.services.FieldInfo("Button6", "Button6", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button7", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button7");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("Button7", "Button7", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Button8", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Button8");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("Button8", "Button8", "org.eclipse.edt.rui.widgets.Button", egl.org.eclipse.edt.rui.widgets.Button, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("contentBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("contentBox");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("contentBox", "contentBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("topBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("topBox");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("topBox", "topBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("leftBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("leftBox");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("leftBox", "leftBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("leftImage", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("leftImage");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("leftImage", "leftImage", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("leftText", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("leftText");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("leftText", "leftText", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("bodyBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("bodyBox");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("bodyBox", "bodyBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HTML1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HTML1");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("HTML1", "HTML1", "org.eclipse.edt.rui.widgets.HTML", egl.org.eclipse.edt.rui.widgets.HTML, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,89,3074,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[ReLesson1]";
			}
			,
			"eze$$getName": function() {
				return "ReLesson1";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "Lesson1Box", value : eze$$parent.Lesson1Box, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Lesson1Box"},
				{name: "TitleBox", value : eze$$parent.TitleBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "TitleBox"},
				{name: "LessonTitle", value : eze$$parent.LessonTitle, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "LessonTitle"},
				{name: "ButtonsBox", value : eze$$parent.ButtonsBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "ButtonsBox"},
				{name: "Button1", value : eze$$parent.Button1, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button1"},
				{name: "Button2", value : eze$$parent.Button2, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button2"},
				{name: "Button3", value : eze$$parent.Button3, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button3"},
				{name: "Button4", value : eze$$parent.Button4, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button4"},
				{name: "Button5", value : eze$$parent.Button5, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button5"},
				{name: "Button6", value : eze$$parent.Button6, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button6"},
				{name: "Button7", value : eze$$parent.Button7, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button7"},
				{name: "Button8", value : eze$$parent.Button8, type : "org.eclipse.edt.rui.widgets.Button", jsName : "Button8"},
				{name: "contentBox", value : eze$$parent.contentBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "contentBox"},
				{name: "topBox", value : eze$$parent.topBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "topBox"},
				{name: "leftBox", value : eze$$parent.leftBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "leftBox"},
				{name: "leftImage", value : eze$$parent.leftImage, type : "org.eclipse.edt.rui.widgets.Image", jsName : "leftImage"},
				{name: "leftText", value : eze$$parent.leftText, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "leftText"},
				{name: "bodyBox", value : eze$$parent.bodyBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "bodyBox"},
				{name: "HTML1", value : eze$$parent.HTML1, type : "org.eclipse.edt.rui.widgets.HTML", jsName : "HTML1"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
