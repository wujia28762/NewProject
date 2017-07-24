define(["org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/Image", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/HTML", "org/eclipse/edt/rui/widgets/TextLabel", "org/eclipse/edt/rui/widgets/Button"],function(){
	egl.loadCSS("css/e-Learning.css");
	egl.defineRUIHandler("client.client", "Lesson1", {
		"eze$$fileName" : "client/client/Lesson1.egl",
		"eze$$runtimePropertiesFile" : "client/client/Lesson1",
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
					egl.atLine(this.eze$$fileName,17,631,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,17,644,8, this);
					this.ui.setRows(1);
					egl.atLine(this.eze$$fileName,17,654,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,17,671,25, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,18,732,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,18,752,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,18,761,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,18,732,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,18,719,54, this);
					this.Lesson1Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,18,775,9, this);
					this.Lesson1Box.setPadding(8);
					egl.atLine(this.eze$$fileName,19,791,35, this);
					this.Lesson1Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TitleBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.contentBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,20,833,13, this);
					this.Lesson1Box.setWidth("900");
					egl.atLine(this.eze$$fileName,21,853,11, this);
					this.Lesson1Box.setColumns(1);
					egl.atLine(this.eze$$fileName,23,892,9, this);
					this.TitleBox.setPadding(8);
					egl.atLine(this.eze$$fileName,24,908,38, this);
					this.TitleBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.LessonTitle,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonsBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,25,954,32, this);
					this.TitleBox.setBackgroundColor("LightSkyBlue");
					egl.atLine(this.eze$$fileName,26,993,13, this);
					this.TitleBox.setWidth("900");
					egl.atLine(this.eze$$fileName,27,1013,13, this);
					this.TitleBox.setHeight("50");
					egl.atLine(this.eze$$fileName,28,1033,11, this);
					this.TitleBox.setColumns(2);
					egl.atLine(this.eze$$fileName,29,1075,12, this);
					this.LessonTitle.setText("\u53ef\u7231\u7684\u6821\u56ed");
					egl.atLine(this.eze$$fileName,30,1095,13, this);
					this.LessonTitle.setFont("\u534e\u6587\u65b0\u9b4f");
					egl.atLine(this.eze$$fileName,31,1115,15, this);
					this.LessonTitle.setFontSize("30");
					egl.atLine(this.eze$$fileName,32,1154,9, this);
					this.ButtonsBox.setPadding(8);
					egl.atLine(this.eze$$fileName,33,1170,14, this);
					this.ButtonsBox.setMarginTop(20);
					egl.atLine(this.eze$$fileName,34,1191,15, this);
					this.ButtonsBox.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,35,1213,11, this);
					this.ButtonsBox.setColumns(8);
					egl.atLine(this.eze$$fileName,36,1231,85, this);
					this.ButtonsBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button1,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button2,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button3,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button4,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button5,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button6,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button7,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button8,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,37,1340,13, this);
					this.Button1.setText("\u8bfe\u7a0b\u7b80\u4ecb");
					egl.atLine(this.eze$$fileName,38,1360,15, this);
					this.Button1.setFontSize("14");
					egl.atLine(this.eze$$fileName,39,1382,13, this);
					this.Button1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,40,1419,13, this);
					this.Button2.setText("\u6559\u5e08\u7b80\u4ecb");
					egl.atLine(this.eze$$fileName,41,1439,15, this);
					this.Button2.setFontSize("14");
					egl.atLine(this.eze$$fileName,42,1461,13, this);
					this.Button2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,43,1498,13, this);
					this.Button3.setText("\u6307\u5b9a\u6559\u6750");
					egl.atLine(this.eze$$fileName,44,1518,15, this);
					this.Button3.setFontSize("14");
					egl.atLine(this.eze$$fileName,45,1540,13, this);
					this.Button3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,46,1577,13, this);
					this.Button4.setText("\u5b66\u4e60\u65b9\u6cd5");
					egl.atLine(this.eze$$fileName,47,1597,15, this);
					this.Button4.setFontSize("14");
					egl.atLine(this.eze$$fileName,48,1619,13, this);
					this.Button4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,49,1657,13, this);
					this.Button5.setText("\u6559\u5b66\u76ee\u6807");
					egl.atLine(this.eze$$fileName,50,1677,15, this);
					this.Button5.setFontSize("14");
					egl.atLine(this.eze$$fileName,51,1699,13, this);
					this.Button5.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,52,1736,13, this);
					this.Button6.setText("\u6559\u5b66\u91cd\u70b9");
					egl.atLine(this.eze$$fileName,53,1756,15, this);
					this.Button6.setFontSize("14");
					egl.atLine(this.eze$$fileName,54,1778,13, this);
					this.Button6.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,55,1815,13, this);
					this.Button7.setText("\u4f5c\u4e1a\u4e60\u9898");
					egl.atLine(this.eze$$fileName,56,1835,15, this);
					this.Button7.setFontSize("14");
					egl.atLine(this.eze$$fileName,57,1857,13, this);
					this.Button7.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,58,1894,13, this);
					this.Button8.setText("\u6388\u8bfe\u65f6\u957f");
					egl.atLine(this.eze$$fileName,59,1914,15, this);
					this.Button8.setFontSize("14");
					egl.atLine(this.eze$$fileName,60,1936,13, this);
					this.Button8.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,62,1979,9, this);
					this.contentBox.setPadding(8);
					egl.atLine(this.eze$$fileName,62,1989,9, this);
					this.contentBox.setColumns(1);
					egl.atLine(this.eze$$fileName,62,2000,26, this);
					this.contentBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.topBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.bodyBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,63,2045,9, this);
					this.topBox.setPadding(8);
					egl.atLine(this.eze$$fileName,63,2056,9, this);
					this.topBox.setColumns(2);
					egl.atLine(this.eze$$fileName,63,2067,18, this);
					this.topBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.leftBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,64,2092,13, this);
					this.topBox.setWidth("840");
					egl.atLine(this.eze$$fileName,66,2135,9, this);
					this.leftBox.setPadding(8);
					egl.atLine(this.eze$$fileName,66,2146,9, this);
					this.leftBox.setColumns(2);
					egl.atLine(this.eze$$fileName,67,2162,34, this);
					this.leftBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.leftImage,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.leftText,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,69,2225,39, this);
					this.leftImage.setSrc("E:\\workspace\\pictures\\\u56fe\u6807.jpg");
					egl.atLine(this.eze$$fileName,71,2296,16, this);
					this.leftText.setText("\u8bfe \u7a0b \u7b80 \u4ecb");
					egl.atLine(this.eze$$fileName,72,2319,15, this);
					this.leftText.setFontSize("16");
					egl.atLine(this.eze$$fileName,76,2367,9, this);
					this.bodyBox.setPadding(8);
					egl.atLine(this.eze$$fileName,76,2378,9, this);
					this.bodyBox.setColumns(1);
					egl.atLine(this.eze$$fileName,77,2393,20, this);
					this.bodyBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HTML1,"org.eclipse.edt.rui.widgets.HTML"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,78,2431,806, this);
					this.HTML1.setText((((((("<li><b>\u6d3b\u52a8\u4e00\uff1a\u6211\u4eec\u7684\u6821\u56ed</b></li><p>1\uff0e\u5728\u6211\u4eec\u7684\u6821\u56ed\u91cc\u4f60\u90fd\u770b\u5230\u4e86\u4ec0\u4e48\uff1f    \uff08\u6211\u4eec\u7684\u6821\u56ed\u91cc\u6709\u64cd\u573a\uff0c\u6211\u4eec\u7684\u5b66\u6821\u91cc\u6709\u8001\u5e08\uff0c\u6211\u4eec\u7684\u5b66\u6821\u91cc\u6709\u5c0f\u670b\u53cb\u2026\u2026\uff09  </p>") + "<p>  2\uff0e\u4f60\u80fd\u7528\u4e00\u53e5\u5e26\u6709\u6570\u5b57\u7684\u8bdd\u8bf4\u4e00\u8bf4\u4f60\u90fd\u770b\u5230\u4e86\u4ec0\u4e48\u5417\uff1f   \uff08\u6211\u770b\u5230\u4e861\u4e2a\u8001\u5e08\uff0c\u6211\u770b\u5230\u4e863\u5ea7\u697c\uff0c\u6211\u770b\u5230\u4e86\u4e00\u5e74\u7ea7\u67097\u4e2a\u73ed\uff0c\u67096\u4e2a\u5e74\u7ea7\uff0c\u6709\u597d\u591a\u5c0f\u670b\u53cb\u2026\u2026\uff09\u6559\u5e08\uff1a\u5bf9\u4e86\uff01\u4f60\u4eec\u8bf4\u7684\u771f\u597d\uff01\u6211\u4eec\u7684\u6821\u56ed\u91cc\u8fd8\u6709\u8bb8\u591a\u7684\u6811\u3001\u8bb8\u591a\u7684\u82b1\u3001\u8bb8\u591a\u7684\u6559\u5ba4\u548c\u8001\u5e08\uff0c\u6211\u4eec\u8981\u5728\u6821\u56ed\u91cc\u5171\u540c\u751f\u6d3b\u5b66\u4e60\uff0c\u8001\u5e08\u662f\u4f60\u4eec\u7684\u5927\u670b\u53cb\uff0c\u5982\u679c\u4f60\u6709\u4ec0\u4e48\u56f0\u96be\u5c31\u6765\u627e\u6211\u597d\u5417\uff1f    \uff08\u70b9\u8bc4\uff1a\u5728\u8bfe\u5802\u6559\u5b66\u4e2d\u53d1\u6325\u5b66\u751f\u7684\u4e3b\u52a8\u5b66\u4e60\u4f5c\u7528\uff0c\u662f\u8bfe\u7a0b\u6807\u51c6\u4e2d\u4e00\u4e2a\u57fa\u672c\u7684\u6559\u5b66\u7406\u5ff5\uff0e\u7531\u4e8e\u5b66\u751f\u521a\u521a\u8fdb\u5165\u5b66\u6821\uff0c\u5bf9\u5b66\u6821\u7684\u4e86\u89e3\u8fd8\u4e0d\u591a\uff0c\u901a\u8fc7\u5b66\u751f\u4eec\u4e92\u76f8\u542f\u53d1\uff0c\u5f15\u8d77\u5b66\u751f\u5bf9\u5b66\u6821\u751f\u6d3b\u7684\u5174\u8da3\uff0c\u4ece\u800c\u4ea7\u751f\u5bf9\u5b66\u6821\u751f\u6d3b\u7684\u559c\u7231\uff0e\uff09</p>")) + "<li><b>\u6d3b\u52a8\u4e8c\uff1a\u52a8\u7269\u738b\u56fd\u7684\u6821\u56ed</b></li><p>\u6559\u5e08\uff1a\u52a8\u7269\u738b\u56fd\u7684\u52a8\u7269\u5b66\u6821\u4e5f\u5f00\u5b66\u4e86\uff0c\u5c0f\u52a8\u7269\u4eec\u90fd\u9ad8\u5174\u5730\u6765\u5230\u5b66\u6821\uff0c\u4f60\u4eec\u60f3\u5230\u5b83\u4eec\u7684\u5b66\u6821\u770b\u770b\u5417\uff1f\uff08\u60f3\uff09   1\uff0e\u51fa\u793a\u4e3b\u9898\u56fe\uff1a</p>")) + "<p>2\uff0e\u89c2\u5bdf\u5c0f\u52a8\u7269    \uff081\uff09\u4f60\u4eec\u90fd\u770b\u5230\u6709\u54ea\u4e9b\u5c0f\u52a8\u7269\u6765\u4e0a\u5b66\u4e86\uff1f\uff08\u5c0f\u718a\u3001\u5c0f\u677e\u9f20\u3001\u5c0f\u5154\u5b50\uff09    \uff082\uff09\u4f60\u4eec\u80fd\u6570\u4e00\u6570\u8fd9\u4e9b\u5c0f\u52a8\u7269\u90fd\u6709\u51e0\u53ea\u5417\uff1f\uff08\u67096\u53ea\u5c0f\u718a\uff09   \uff083\uff09\u6211\u4eec\u4e00\u8d77\u6570\u4e00\u6570\uff0c\u770b\u770b\u662f6\u53ea\u5c0f\u718a\u5417\uff1f\uff08\u5e08\u751f\u5171\u540c\u6570\uff09   \uff084\uff09\u6709\u51e0\u53ea\u5c0f\u677e\u9f20\u5462\uff1f\uff08\u67094\u53ea\u5c0f\u677e\u9f20\uff09   \uff085\uff09\u5c0f\u5154\u5b50\u5462\uff1f\uff08\u67092\u53ea\u5c0f\u5154\u5b50\uff09   \uff086\uff09\u5b83\u4eec\u7684\u8001\u5e08\u662f\u8c01\u5440\uff1f\uff08\u5927\u8c61\uff09   \uff087\uff09\u6709\u51e0\u4f4d\u8001\u5e08\u5440\uff1f\uff081\u4f4d\uff09    \uff08\u70b9\u8bc4\uff1a\u7531\u4e8e\u5b66\u751f\u521a\u521a\u63a5\u89e6\u6570\u5b66\u7684\u5b66\u4e60\uff0c\u56e0\u6b64\u5728\u8fd9\u4e00\u73af\u8282\u6559\u5e08\u8981\u6709\u610f\u8bc6\u5730\u5f15\u5bfc\u5b66\u751f\u5b66\u4f1a\u89c2\u5bdf\uff0e\u6559\u5e08\u4ece\u4e00\u5f00\u59cb\u5e26\u9886\u5b66\u751f\u89c2\u5bdf\u753b\u9762\uff0c\u5230\u7531\u5b66\u751f\u72ec\u7acb\u89c2\u5bdf\u662f\u4e00\u4e2a\u975e\u5e38\u6f2b\u957f\u7684\u8fc7\u7a0b\uff0c\u9700\u8981\u8001\u5e08\u7ecf\u5e38\u5730\u6709\u610f\u8bc6\u6709\u76ee\u7684\u7684\u6307\u5bfc\uff0e\uff09</p>"));
					egl.atLine(this.eze$$fileName,82,3243,13, this);
					this.HTML1.setWidth("800");
					egl.atLine(this.eze$$fileName,83,3262,15, this);
					this.HTML1.setFontSize("14");
					egl.atLine(this.eze$$fileName,15,519,15, this);
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
				var ezert$$2 = new egl.client.client.Lesson1();
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
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("Lesson1", null, false);
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
					egl.atLine(this.eze$$fileName,85,3288,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[Lesson1]";
			}
			,
			"eze$$getName": function() {
				return "Lesson1";
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
