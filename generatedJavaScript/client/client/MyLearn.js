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
				this.eze$$setEmpty();
				this.ui.setColumns(1);
				this.ui.setRows(1);
				this.ui.setCellPadding(4);
				this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.myLearningBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				var eze$LNNTemp1 = null;
				{
					var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
					eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
					eze$SettingTarget1.row = 1;
					eze$SettingTarget1.column = 1;
					eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
				}
				this.myLearningBox.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
				this.myLearningBox.setPadding(8);
				this.myLearningBox.setColumns(1);
				this.myLearningBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1Box,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson2Box,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson3Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
				this.Lesson1Box.setPadding(8);
				this.Lesson1Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1Image,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1Intro,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1Link,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
				this.Lesson1Box.setColumns(3);
				this.Lesson1Image.setSrc("E:\\workspace\\pictures\\01_\u526f\u672c.png");
				this.Lesson1Intro.setPadding(8);
				this.Lesson1Intro.setColumns(1);
				this.Lesson1Intro.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1IntroText,"org.eclipse.edt.rui.widgets.HTML"])].setType("[Teglx/ui/rui/Widget;"));
				this.Lesson1.setText("\u53ef\u7231\u7684\u6821\u56ed");
				this.Lesson1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Lesson1.setFontSize("16");
				this.Lesson1.setMarginLeft(5);
				this.Lesson1IntroText.setText("\u672c\u8bfe\u7a0b\u4f7f\u5b66\u751f\u521d\u6b65\u4f53\u4f1a\u5230\u6570\u5177\u6709\u8868\u793a\u7269\u4f53\u4e2a\u6570\u7684\u542b\u4e49\u548c\u4f5c\u7528");
				this.Lesson1IntroText.setWidth("240");
				this.Lesson1IntroText.setMarginTop(5);
				this.Lesson1Link.setText("\u8fdb\u5165\u8bfe\u7a0b");
				this.Lesson1Link.setMarginTop(53);
				this.Lesson1Link.setMarginLeft(20);
				this.Lesson1Link.setHref("http://192.168.1.119:5590/NewProject/client/client/Lesson1.html");
				this.Lesson1Link.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Lesson1Link.setFontSize("14");
				this.Lesson2Box.setPadding(8);
				this.Lesson2Box.setColumns(3);
				this.Lesson2Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson2Image,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson2Intro,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson2Link,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
				this.Lesson2Box.setHeight("90");
				this.Lesson2Image.setSrc("E:\\workspace\\pictures\\02_\u526f\u672c.png");
				this.Lesson2Intro.setPadding(8);
				this.Lesson2Intro.setColumns(1);
				this.Lesson2Intro.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson2,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson2IntroText,"org.eclipse.edt.rui.widgets.HTML"])].setType("[Teglx/ui/rui/Widget;"));
				this.Lesson2.setText("\u5feb\u4e50\u7684\u5bb6\u56ed");
				this.Lesson2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Lesson2.setFontSize("16");
				this.Lesson2.setMarginLeft(5);
				this.Lesson2IntroText.setText("\u672c\u8bfe\u7a0b\u5e2e\u52a9\u5b66\u751f\u5efa\u7acb\u6570\u4e0e\u5b9e\u7269\u7684\u5bf9\u5e94\u5173\u7cfb\u7684\u57fa\u7840\u4e0a\uff0c\u4f7f\u5b66\u751f\u7406\u89e3\u6570\u7684\u610f\u4e49\u3002");
				this.Lesson2IntroText.setWidth("240");
				this.Lesson2IntroText.setMarginTop(5);
				this.Lesson2Link.setText("\u8fdb\u5165\u8bfe\u7a0b");
				this.Lesson2Link.setMarginTop(53);
				this.Lesson2Link.setMarginLeft(20);
				this.Lesson2Link.setHref("http://192.168.1.119:5590/NewProject/client/client/Lesson2.html");
				this.Lesson2Link.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Lesson2Link.setFontSize("14");
				this.Lesson3Box.setPadding(8);
				this.Lesson3Box.setColumns(3);
				this.Lesson3Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson3Image,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson3Intro,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson3Link,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
				this.Lesson3Image.setSrc("E:\\workspace\\pictures\\03_\u526f\u672c.png");
				this.Lesson3Intro.setPadding(8);
				this.Lesson3Intro.setColumns(1);
				this.Lesson3Intro.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson3,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson3IntroText,"org.eclipse.edt.rui.widgets.HTML"])].setType("[Teglx/ui/rui/Widget;"));
				this.Lesson3.setText("\u5c0f\u732b\u9493\u9c7c");
				this.Lesson3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Lesson3.setFontSize("16");
				this.Lesson3.setMarginLeft(5);
				this.Lesson3IntroText.setText("\u672c\u8bfe\u7a0b\u4f7f\u5b66\u751f\u77e5\u90530\u7684\u542b\u4e49\uff0c0\u5728\u6570\u4e2d\u7684\u987a\u5e8f\uff0c\u4f1a\u8bfb\u51990\uff1b\u6307\u5bfc\u5b66\u751f\u89c4\u8303\u4e66\u5199\uff0c\u517b\u6210\u826f\u597d\u7684\u4e66\u5199\u4e60\u60ef\uff1b\u7406\u89e30\u7684\u4e09\u4e2a\u542b\u4e49\u3002");
				this.Lesson3IntroText.setWidth("240");
				this.Lesson3IntroText.setMarginTop(5);
				this.Lesson3Link.setText("\u8fdb\u5165\u8bfe\u7a0b");
				this.Lesson3Link.setMarginTop(53);
				this.Lesson3Link.setMarginLeft(20);
				this.Lesson3Link.setHref("http://192.168.1.119:5590/NewProject/client/client/Lesson3.html");
				this.Lesson3Link.setFont("\u5fae\u8f6f\u96c5\u9ed1");
				this.Lesson3Link.setFontSize("14");
				this.initialUI = [egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ui,"org.eclipse.edt.rui.widgets.GridLayout"])].setType("[Teglx/ui/rui/Widget;");
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
			}
			,
			"toString": function() {
				return "[MyLearn]";
			}
		}
	);
});
