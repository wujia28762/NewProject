define(["org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/HyperLink", "org/eclipse/edt/rui/widgets/Image", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/HTML", "org/eclipse/edt/rui/widgets/TextLabel"],function(){
	egl.loadCSS("css/e-Learning.css");
	egl.defineRUIHandler("client.client", "MyLearn", {
		"eze$$fileName" : "client/client/MyLearn.egl",
		"eze$$runtimePropertiesFile" : "client/client/MyLearn",
			"constructor": function() {
				this.start();
			}
			,
			"eze$$setEmpty": function() {
				this.ui = new egl.org.eclipse.edt.rui.widgets.GridLayout();
				this.myLearningBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Lesson1Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Lesson1Image = new egl.org.eclipse.edt.rui.widgets.Image();
				this.Lesson1Intro = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Lesson1 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.Lesson1IntroText = new egl.org.eclipse.edt.rui.widgets.HTML();
				this.Lesson1Link = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Lesson2Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Lesson2Image = new egl.org.eclipse.edt.rui.widgets.Image();
				this.Lesson2Intro = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Lesson2 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.Lesson2IntroText = new egl.org.eclipse.edt.rui.widgets.HTML();
				this.Lesson2Link = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.Lesson3Box = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Lesson3Image = new egl.org.eclipse.edt.rui.widgets.Image();
				this.Lesson3Intro = new egl.org.eclipse.edt.rui.widgets.Box();
				this.Lesson3 = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.Lesson3IntroText = new egl.org.eclipse.edt.rui.widgets.HTML();
				this.Lesson3Link = new egl.org.eclipse.edt.rui.widgets.HyperLink();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,14,523,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,14,536,8, this);
					this.ui.setRows(1);
					egl.atLine(this.eze$$fileName,14,546,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,14,563,28, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myLearningBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,15,630,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,15,650,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,15,659,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,15,630,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,15,617,54, this);
					this.myLearningBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,15,673,9, this);
					this.myLearningBox.setPadding(8);
					egl.atLine(this.eze$$fileName,16,689,11, this);
					this.myLearningBox.setColumns(1);
					egl.atLine(this.eze$$fileName,17,707,49, this);
					this.myLearningBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1Box,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson2Box,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson3Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,19,786,9, this);
					this.Lesson1Box.setPadding(8);
					egl.atLine(this.eze$$fileName,20,802,54, this);
					this.Lesson1Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1Image,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1Intro,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1Link,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,21,863,11, this);
					this.Lesson1Box.setColumns(3);
					egl.atLine(this.eze$$fileName,23,907,42, this);
					this.Lesson1Image.setSrc("E:\\workspace\\pictures\\01_\u526f\u672c.png");
					egl.atLine(this.eze$$fileName,25,978,9, this);
					this.Lesson1Intro.setPadding(8);
					egl.atLine(this.eze$$fileName,25,989,9, this);
					this.Lesson1Intro.setColumns(1);
					egl.atLine(this.eze$$fileName,25,1000,36, this);
					this.Lesson1Intro.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1IntroText,"org.eclipse.edt.rui.widgets.HTML"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,26,1062,14, this);
					this.Lesson1.setText("\u53ef\u7231\u7684\u6821\u56ed");
					egl.atLine(this.eze$$fileName,27,1083,13, this);
					this.Lesson1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,28,1103,15, this);
					this.Lesson1.setFontSize("16");
					egl.atLine(this.eze$$fileName,29,1125,14, this);
					this.Lesson1.setMarginLeft(5);
					egl.atLine(this.eze$$fileName,30,1170,33, this);
					this.Lesson1IntroText.setText("\u672c\u8bfe\u7a0b\u4f7f\u5b66\u751f\u521d\u6b65\u4f53\u4f1a\u5230\u6570\u5177\u6709\u8868\u793a\u7269\u4f53\u4e2a\u6570\u7684\u542b\u4e49\u548c\u4f5c\u7528");
					egl.atLine(this.eze$$fileName,31,1210,13, this);
					this.Lesson1IntroText.setWidth("240");
					egl.atLine(this.eze$$fileName,32,1230,13, this);
					this.Lesson1IntroText.setMarginTop(5);
					egl.atLine(this.eze$$fileName,33,1274,11, this);
					this.Lesson1Link.setText("\u8fdb\u5165\u8bfe\u7a0b");
					egl.atLine(this.eze$$fileName,34,1292,14, this);
					this.Lesson1Link.setMarginTop(53);
					egl.atLine(this.eze$$fileName,35,1313,15, this);
					this.Lesson1Link.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,36,1335,72, this);
					this.Lesson1Link.setHref("http://192.168.1.119:5590/NewProject/client/client/Lesson1.html");
					egl.atLine(this.eze$$fileName,37,1414,13, this);
					this.Lesson1Link.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,38,1434,15, this);
					this.Lesson1Link.setFontSize("14");
					egl.atLine(this.eze$$fileName,40,1477,9, this);
					this.Lesson2Box.setPadding(8);
					egl.atLine(this.eze$$fileName,40,1488,9, this);
					this.Lesson2Box.setColumns(3);
					egl.atLine(this.eze$$fileName,41,1517,54, this);
					this.Lesson2Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson2Image,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson2Intro,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson2Link,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,42,1591,13, this);
					this.Lesson2Box.setHeight("90");
					egl.atLine(this.eze$$fileName,43,1629,42, this);
					this.Lesson2Image.setSrc("E:\\workspace\\pictures\\02_\u526f\u672c.png");
					egl.atLine(this.eze$$fileName,44,1695,9, this);
					this.Lesson2Intro.setPadding(8);
					egl.atLine(this.eze$$fileName,44,1706,9, this);
					this.Lesson2Intro.setColumns(1);
					egl.atLine(this.eze$$fileName,44,1717,36, this);
					this.Lesson2Intro.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson2,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson2IntroText,"org.eclipse.edt.rui.widgets.HTML"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,45,1779,14, this);
					this.Lesson2.setText("\u5feb\u4e50\u7684\u5bb6\u56ed");
					egl.atLine(this.eze$$fileName,46,1800,13, this);
					this.Lesson2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,47,1820,15, this);
					this.Lesson2.setFontSize("16");
					egl.atLine(this.eze$$fileName,48,1842,14, this);
					this.Lesson2.setMarginLeft(5);
					egl.atLine(this.eze$$fileName,49,1886,40, this);
					this.Lesson2IntroText.setText("\u672c\u8bfe\u7a0b\u5e2e\u52a9\u5b66\u751f\u5efa\u7acb\u6570\u4e0e\u5b9e\u7269\u7684\u5bf9\u5e94\u5173\u7cfb\u7684\u57fa\u7840\u4e0a\uff0c\u4f7f\u5b66\u751f\u7406\u89e3\u6570\u7684\u610f\u4e49\u3002");
					egl.atLine(this.eze$$fileName,50,1933,13, this);
					this.Lesson2IntroText.setWidth("240");
					egl.atLine(this.eze$$fileName,51,1953,13, this);
					this.Lesson2IntroText.setMarginTop(5);
					egl.atLine(this.eze$$fileName,52,1996,11, this);
					this.Lesson2Link.setText("\u8fdb\u5165\u8bfe\u7a0b");
					egl.atLine(this.eze$$fileName,53,2014,14, this);
					this.Lesson2Link.setMarginTop(53);
					egl.atLine(this.eze$$fileName,54,2035,15, this);
					this.Lesson2Link.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,55,2057,72, this);
					this.Lesson2Link.setHref("http://192.168.1.119:5590/NewProject/client/client/Lesson2.html");
					egl.atLine(this.eze$$fileName,56,2136,13, this);
					this.Lesson2Link.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,57,2156,15, this);
					this.Lesson2Link.setFontSize("14");
					egl.atLine(this.eze$$fileName,59,2199,9, this);
					this.Lesson3Box.setPadding(8);
					egl.atLine(this.eze$$fileName,59,2210,9, this);
					this.Lesson3Box.setColumns(3);
					egl.atLine(this.eze$$fileName,60,2239,54, this);
					this.Lesson3Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson3Image,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson3Intro,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson3Link,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,61,2320,42, this);
					this.Lesson3Image.setSrc("E:\\workspace\\pictures\\03_\u526f\u672c.png");
					egl.atLine(this.eze$$fileName,62,2389,9, this);
					this.Lesson3Intro.setPadding(8);
					egl.atLine(this.eze$$fileName,62,2400,9, this);
					this.Lesson3Intro.setColumns(1);
					egl.atLine(this.eze$$fileName,62,2411,36, this);
					this.Lesson3Intro.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson3,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson3IntroText,"org.eclipse.edt.rui.widgets.HTML"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,63,2476,13, this);
					this.Lesson3.setText("\u5c0f\u732b\u9493\u9c7c");
					egl.atLine(this.eze$$fileName,64,2496,13, this);
					this.Lesson3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,65,2516,15, this);
					this.Lesson3.setFontSize("16");
					egl.atLine(this.eze$$fileName,66,2538,14, this);
					this.Lesson3.setMarginLeft(5);
					egl.atLine(this.eze$$fileName,67,2585,61, this);
					this.Lesson3IntroText.setText("\u672c\u8bfe\u7a0b\u4f7f\u5b66\u751f\u77e5\u90530\u7684\u542b\u4e49\uff0c0\u5728\u6570\u4e2d\u7684\u987a\u5e8f\uff0c\u4f1a\u8bfb\u51990\uff1b\u6307\u5bfc\u5b66\u751f\u89c4\u8303\u4e66\u5199\uff0c\u517b\u6210\u826f\u597d\u7684\u4e66\u5199\u4e60\u60ef\uff1b\u7406\u89e30\u7684\u4e09\u4e2a\u542b\u4e49\u3002");
					egl.atLine(this.eze$$fileName,68,2653,13, this);
					this.Lesson3IntroText.setWidth("240");
					egl.atLine(this.eze$$fileName,69,2673,13, this);
					this.Lesson3IntroText.setMarginTop(5);
					egl.atLine(this.eze$$fileName,70,2718,11, this);
					this.Lesson3Link.setText("\u8fdb\u5165\u8bfe\u7a0b");
					egl.atLine(this.eze$$fileName,71,2736,14, this);
					this.Lesson3Link.setMarginTop(53);
					egl.atLine(this.eze$$fileName,72,2757,15, this);
					this.Lesson3Link.setMarginLeft(20);
					egl.atLine(this.eze$$fileName,73,2779,72, this);
					this.Lesson3Link.setHref("http://192.168.1.119:5590/NewProject/client/client/Lesson3.html");
					egl.atLine(this.eze$$fileName,74,2858,13, this);
					this.Lesson3Link.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,75,2878,15, this);
					this.Lesson3Link.setFontSize("14");
					egl.atLine(this.eze$$fileName,12,401,15, this);
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
				var ezert$$2 = new egl.client.client.MyLearn();
				ezert$$2.ui = ezert$$1.ui === null ? null : ezert$$1.ui.eze$$clone();
				ezert$$2.myLearningBox = ezert$$1.myLearningBox === null ? null : ezert$$1.myLearningBox.eze$$clone();
				ezert$$2.Lesson1Box = ezert$$1.Lesson1Box === null ? null : ezert$$1.Lesson1Box.eze$$clone();
				ezert$$2.Lesson1Image = ezert$$1.Lesson1Image === null ? null : ezert$$1.Lesson1Image.eze$$clone();
				ezert$$2.Lesson1Intro = ezert$$1.Lesson1Intro === null ? null : ezert$$1.Lesson1Intro.eze$$clone();
				ezert$$2.Lesson1 = ezert$$1.Lesson1 === null ? null : ezert$$1.Lesson1.eze$$clone();
				ezert$$2.Lesson1IntroText = ezert$$1.Lesson1IntroText === null ? null : ezert$$1.Lesson1IntroText.eze$$clone();
				ezert$$2.Lesson1Link = ezert$$1.Lesson1Link === null ? null : ezert$$1.Lesson1Link.eze$$clone();
				ezert$$2.Lesson2Box = ezert$$1.Lesson2Box === null ? null : ezert$$1.Lesson2Box.eze$$clone();
				ezert$$2.Lesson2Image = ezert$$1.Lesson2Image === null ? null : ezert$$1.Lesson2Image.eze$$clone();
				ezert$$2.Lesson2Intro = ezert$$1.Lesson2Intro === null ? null : ezert$$1.Lesson2Intro.eze$$clone();
				ezert$$2.Lesson2 = ezert$$1.Lesson2 === null ? null : ezert$$1.Lesson2.eze$$clone();
				ezert$$2.Lesson2IntroText = ezert$$1.Lesson2IntroText === null ? null : ezert$$1.Lesson2IntroText.eze$$clone();
				ezert$$2.Lesson2Link = ezert$$1.Lesson2Link === null ? null : ezert$$1.Lesson2Link.eze$$clone();
				ezert$$2.Lesson3Box = ezert$$1.Lesson3Box === null ? null : ezert$$1.Lesson3Box.eze$$clone();
				ezert$$2.Lesson3Image = ezert$$1.Lesson3Image === null ? null : ezert$$1.Lesson3Image.eze$$clone();
				ezert$$2.Lesson3Intro = ezert$$1.Lesson3Intro === null ? null : ezert$$1.Lesson3Intro.eze$$clone();
				ezert$$2.Lesson3 = ezert$$1.Lesson3 === null ? null : ezert$$1.Lesson3.eze$$clone();
				ezert$$2.Lesson3IntroText = ezert$$1.Lesson3IntroText === null ? null : ezert$$1.Lesson3IntroText.eze$$clone();
				ezert$$2.Lesson3Link = ezert$$1.Lesson3Link === null ? null : ezert$$1.Lesson3Link.eze$$clone();
				return ezert$$2;
			}
			,
			"eze$$getFieldSignatures": function() {
				if(this.fieldSigs === undefined){
					this.fieldSigs = [
					{name: "ui", sig: "org.eclipse.edt.rui.widgets.GridLayout"},
					{name: "myLearningBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Lesson1Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Lesson1Image", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "Lesson1Intro", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Lesson1", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "Lesson1IntroText", sig: "org.eclipse.edt.rui.widgets.HTML"},
					{name: "Lesson1Link", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Lesson2Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Lesson2Image", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "Lesson2Intro", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Lesson2", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "Lesson2IntroText", sig: "org.eclipse.edt.rui.widgets.HTML"},
					{name: "Lesson2Link", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "Lesson3Box", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Lesson3Image", sig: "org.eclipse.edt.rui.widgets.Image"},
					{name: "Lesson3Intro", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "Lesson3", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "Lesson3IntroText", sig: "org.eclipse.edt.rui.widgets.HTML"},
					{name: "Lesson3Link", sig: "org.eclipse.edt.rui.widgets.HyperLink"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("MyLearn", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("myLearningBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("myLearningBox");
					this.fieldInfos[1] =new egl.eglx.services.FieldInfo("myLearningBox", "myLearningBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson1Box", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson1Box");
					this.fieldInfos[2] =new egl.eglx.services.FieldInfo("Lesson1Box", "Lesson1Box", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson1Image", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson1Image");
					this.fieldInfos[3] =new egl.eglx.services.FieldInfo("Lesson1Image", "Lesson1Image", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson1Intro", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson1Intro");
					this.fieldInfos[4] =new egl.eglx.services.FieldInfo("Lesson1Intro", "Lesson1Intro", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson1");
					this.fieldInfos[5] =new egl.eglx.services.FieldInfo("Lesson1", "Lesson1", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson1IntroText", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson1IntroText");
					this.fieldInfos[6] =new egl.eglx.services.FieldInfo("Lesson1IntroText", "Lesson1IntroText", "org.eclipse.edt.rui.widgets.HTML", egl.org.eclipse.edt.rui.widgets.HTML, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson1Link", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson1Link");
					this.fieldInfos[7] =new egl.eglx.services.FieldInfo("Lesson1Link", "Lesson1Link", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson2Box", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson2Box");
					this.fieldInfos[8] =new egl.eglx.services.FieldInfo("Lesson2Box", "Lesson2Box", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson2Image", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson2Image");
					this.fieldInfos[9] =new egl.eglx.services.FieldInfo("Lesson2Image", "Lesson2Image", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson2Intro", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson2Intro");
					this.fieldInfos[10] =new egl.eglx.services.FieldInfo("Lesson2Intro", "Lesson2Intro", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson2");
					this.fieldInfos[11] =new egl.eglx.services.FieldInfo("Lesson2", "Lesson2", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson2IntroText", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson2IntroText");
					this.fieldInfos[12] =new egl.eglx.services.FieldInfo("Lesson2IntroText", "Lesson2IntroText", "org.eclipse.edt.rui.widgets.HTML", egl.org.eclipse.edt.rui.widgets.HTML, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson2Link", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson2Link");
					this.fieldInfos[13] =new egl.eglx.services.FieldInfo("Lesson2Link", "Lesson2Link", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson3Box", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson3Box");
					this.fieldInfos[14] =new egl.eglx.services.FieldInfo("Lesson3Box", "Lesson3Box", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson3Image", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson3Image");
					this.fieldInfos[15] =new egl.eglx.services.FieldInfo("Lesson3Image", "Lesson3Image", "org.eclipse.edt.rui.widgets.Image", egl.org.eclipse.edt.rui.widgets.Image, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson3Intro", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson3Intro");
					this.fieldInfos[16] =new egl.eglx.services.FieldInfo("Lesson3Intro", "Lesson3Intro", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson3", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson3");
					this.fieldInfos[17] =new egl.eglx.services.FieldInfo("Lesson3", "Lesson3", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson3IntroText", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson3IntroText");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("Lesson3IntroText", "Lesson3IntroText", "org.eclipse.edt.rui.widgets.HTML", egl.org.eclipse.edt.rui.widgets.HTML, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("Lesson3Link", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("Lesson3Link");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("Lesson3Link", "Lesson3Link", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,77,2910,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[MyLearn]";
			}
			,
			"eze$$getName": function() {
				return "MyLearn";
			}
			,
			"eze$$getChildVariables": function() {
				var eze$$parent = this;
				return [
				{name: "ui", value : eze$$parent.ui, type : "org.eclipse.edt.rui.widgets.GridLayout", jsName : "ui"},
				{name: "myLearningBox", value : eze$$parent.myLearningBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "myLearningBox"},
				{name: "Lesson1Box", value : eze$$parent.Lesson1Box, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Lesson1Box"},
				{name: "Lesson1Image", value : eze$$parent.Lesson1Image, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Lesson1Image"},
				{name: "Lesson1Intro", value : eze$$parent.Lesson1Intro, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Lesson1Intro"},
				{name: "Lesson1", value : eze$$parent.Lesson1, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "Lesson1"},
				{name: "Lesson1IntroText", value : eze$$parent.Lesson1IntroText, type : "org.eclipse.edt.rui.widgets.HTML", jsName : "Lesson1IntroText"},
				{name: "Lesson1Link", value : eze$$parent.Lesson1Link, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "Lesson1Link"},
				{name: "Lesson2Box", value : eze$$parent.Lesson2Box, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Lesson2Box"},
				{name: "Lesson2Image", value : eze$$parent.Lesson2Image, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Lesson2Image"},
				{name: "Lesson2Intro", value : eze$$parent.Lesson2Intro, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Lesson2Intro"},
				{name: "Lesson2", value : eze$$parent.Lesson2, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "Lesson2"},
				{name: "Lesson2IntroText", value : eze$$parent.Lesson2IntroText, type : "org.eclipse.edt.rui.widgets.HTML", jsName : "Lesson2IntroText"},
				{name: "Lesson2Link", value : eze$$parent.Lesson2Link, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "Lesson2Link"},
				{name: "Lesson3Box", value : eze$$parent.Lesson3Box, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Lesson3Box"},
				{name: "Lesson3Image", value : eze$$parent.Lesson3Image, type : "org.eclipse.edt.rui.widgets.Image", jsName : "Lesson3Image"},
				{name: "Lesson3Intro", value : eze$$parent.Lesson3Intro, type : "org.eclipse.edt.rui.widgets.Box", jsName : "Lesson3Intro"},
				{name: "Lesson3", value : eze$$parent.Lesson3, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "Lesson3"},
				{name: "Lesson3IntroText", value : eze$$parent.Lesson3IntroText, type : "org.eclipse.edt.rui.widgets.HTML", jsName : "Lesson3IntroText"},
				{name: "Lesson3Link", value : eze$$parent.Lesson3Link, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "Lesson3Link"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
