define(["org/eclipse/edt/rui/widgets/Box", "org/eclipse/edt/rui/widgets/HyperLink", "org/eclipse/edt/rui/widgets/Image", "eglx/ui/rui/eze$$View", "org/eclipse/edt/rui/widgets/GridLayoutData", "org/eclipse/edt/rui/widgets/GridLayout", "org/eclipse/edt/rui/widgets/HTML", "org/eclipse/edt/rui/widgets/TextLabel", "org/eclipse/edt/rui/widgets/Button"],function(){
	egl.loadCSS("css/e-Learning.css");
	egl.defineRUIHandler("client.client", "A", {
		"eze$$fileName" : "client/client/A.egl",
		"eze$$runtimePropertiesFile" : "client/client/A",
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
				this.rightBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.rightText = new egl.org.eclipse.edt.rui.widgets.TextLabel();
				this.HyperLink1 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.HyperLink2 = new egl.org.eclipse.edt.rui.widgets.HyperLink();
				this.bodyBox = new egl.org.eclipse.edt.rui.widgets.Box();
				this.HTML1 = new egl.org.eclipse.edt.rui.widgets.HTML();
			}
			,
			"eze$$setInitial": function() {
				try { egl.enter("<init>",this,arguments);
					this.eze$$setEmpty();
					egl.atLine(this.eze$$fileName,17,625,11, this);
					this.ui.setColumns(1);
					egl.atLine(this.eze$$fileName,17,638,8, this);
					this.ui.setRows(1);
					egl.atLine(this.eze$$fileName,17,648,15, this);
					this.ui.setCellPadding(4);
					egl.atLine(this.eze$$fileName,17,665,25, this);
					this.ui.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Lesson1Box,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					var eze$LNNTemp1 = null;
					{
						var eze$SettingTarget1 = new egl.org.eclipse.edt.rui.widgets.GridLayoutData();
						egl.atLine(this.eze$$fileName,18,726,41, this);
						eze$SettingTarget1 = egl.eglx.lang.AnyValue.ezeCopyTo(new egl.org.eclipse.edt.rui.widgets.GridLayoutData(), eze$SettingTarget1);
						egl.atLine(this.eze$$fileName,18,746,7, this);
						eze$SettingTarget1.row = 1;
						egl.atLine(this.eze$$fileName,18,755,10, this);
						eze$SettingTarget1.column = 1;
						egl.atLine(this.eze$$fileName,18,726,41, this);
						eze$LNNTemp1 = egl.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp1);
					}
					egl.atLine(this.eze$$fileName,18,713,54, this);
					this.Lesson1Box.setLayoutData(egl.eglx.lang.convert(egl.eglx.lang.EAny.fromEAny, [eze$LNNTemp1.eze$$clone(),"Torg/eclipse/edt/rui/widgets/GridLayoutData;"]));
					egl.atLine(this.eze$$fileName,18,769,9, this);
					this.Lesson1Box.setPadding(8);
					egl.atLine(this.eze$$fileName,19,785,35, this);
					this.Lesson1Box.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.TitleBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.contentBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,20,827,13, this);
					this.Lesson1Box.setWidth("900");
					egl.atLine(this.eze$$fileName,21,847,11, this);
					this.Lesson1Box.setColumns(1);
					egl.atLine(this.eze$$fileName,23,886,9, this);
					this.TitleBox.setPadding(8);
					egl.atLine(this.eze$$fileName,24,902,38, this);
					this.TitleBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.LessonTitle,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.ButtonsBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,25,948,32, this);
					this.TitleBox.setBackgroundColor("LightSkyBlue");
					egl.atLine(this.eze$$fileName,26,987,13, this);
					this.TitleBox.setWidth("900");
					egl.atLine(this.eze$$fileName,27,1007,13, this);
					this.TitleBox.setHeight("50");
					egl.atLine(this.eze$$fileName,28,1027,11, this);
					this.TitleBox.setColumns(2);
					egl.atLine(this.eze$$fileName,29,1069,13, this);
					this.LessonTitle.setText("\u7535\u5b50\u6d4b\u91cf\u6280\u672f");
					egl.atLine(this.eze$$fileName,30,1090,13, this);
					this.LessonTitle.setFont("\u534e\u6587\u65b0\u9b4f");
					egl.atLine(this.eze$$fileName,31,1110,15, this);
					this.LessonTitle.setFontSize("30");
					egl.atLine(this.eze$$fileName,32,1149,9, this);
					this.ButtonsBox.setPadding(8);
					egl.atLine(this.eze$$fileName,33,1165,14, this);
					this.ButtonsBox.setMarginTop(20);
					egl.atLine(this.eze$$fileName,34,1186,15, this);
					this.ButtonsBox.setMarginLeft(10);
					egl.atLine(this.eze$$fileName,35,1208,11, this);
					this.ButtonsBox.setColumns(8);
					egl.atLine(this.eze$$fileName,36,1226,85, this);
					this.ButtonsBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button1,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button2,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button3,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button4,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button5,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button6,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button7,"org.eclipse.edt.rui.widgets.Button"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.Button8,"org.eclipse.edt.rui.widgets.Button"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,37,1335,13, this);
					this.Button1.setText("\u8bfe\u7a0b\u7b80\u4ecb");
					egl.atLine(this.eze$$fileName,38,1355,15, this);
					this.Button1.setFontSize("14");
					egl.atLine(this.eze$$fileName,39,1377,13, this);
					this.Button1.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,40,1414,13, this);
					this.Button2.setText("\u6559\u5e08\u7b80\u4ecb");
					egl.atLine(this.eze$$fileName,41,1434,15, this);
					this.Button2.setFontSize("14");
					egl.atLine(this.eze$$fileName,42,1456,13, this);
					this.Button2.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,43,1493,13, this);
					this.Button3.setText("\u6307\u5b9a\u6559\u6750");
					egl.atLine(this.eze$$fileName,44,1513,15, this);
					this.Button3.setFontSize("14");
					egl.atLine(this.eze$$fileName,45,1535,13, this);
					this.Button3.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,46,1572,13, this);
					this.Button4.setText("\u5b66\u4e60\u65b9\u6cd5");
					egl.atLine(this.eze$$fileName,47,1592,15, this);
					this.Button4.setFontSize("14");
					egl.atLine(this.eze$$fileName,48,1614,13, this);
					this.Button4.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,49,1652,13, this);
					this.Button5.setText("\u5b9e\u9a8c\u6307\u5bfc");
					egl.atLine(this.eze$$fileName,50,1672,15, this);
					this.Button5.setFontSize("14");
					egl.atLine(this.eze$$fileName,51,1694,13, this);
					this.Button5.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,52,1731,13, this);
					this.Button6.setText("\u4f5c\u4e1a\u4e60\u9898");
					egl.atLine(this.eze$$fileName,53,1751,15, this);
					this.Button6.setFontSize("14");
					egl.atLine(this.eze$$fileName,54,1773,13, this);
					this.Button6.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,55,1810,13, this);
					this.Button7.setText("\u53c2\u8003\u6587\u732e");
					egl.atLine(this.eze$$fileName,56,1830,15, this);
					this.Button7.setFontSize("14");
					egl.atLine(this.eze$$fileName,57,1852,13, this);
					this.Button7.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,58,1889,13, this);
					this.Button8.setText("\u6388\u8bfe\u65f6\u957f");
					egl.atLine(this.eze$$fileName,59,1909,15, this);
					this.Button8.setFontSize("14");
					egl.atLine(this.eze$$fileName,60,1931,13, this);
					this.Button8.setFont("\u5fae\u8f6f\u96c5\u9ed1");
					egl.atLine(this.eze$$fileName,62,1974,9, this);
					this.contentBox.setPadding(8);
					egl.atLine(this.eze$$fileName,62,1984,9, this);
					this.contentBox.setColumns(1);
					egl.atLine(this.eze$$fileName,62,1995,26, this);
					this.contentBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.topBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.bodyBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,63,2040,9, this);
					this.topBox.setPadding(8);
					egl.atLine(this.eze$$fileName,63,2051,9, this);
					this.topBox.setColumns(2);
					egl.atLine(this.eze$$fileName,63,2062,28, this);
					this.topBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.leftBox,"org.eclipse.edt.rui.widgets.Box"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.rightBox,"org.eclipse.edt.rui.widgets.Box"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,64,2097,13, this);
					this.topBox.setWidth("840");
					egl.atLine(this.eze$$fileName,66,2140,9, this);
					this.leftBox.setPadding(8);
					egl.atLine(this.eze$$fileName,66,2151,9, this);
					this.leftBox.setColumns(2);
					egl.atLine(this.eze$$fileName,67,2167,34, this);
					this.leftBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.leftImage,"org.eclipse.edt.rui.widgets.Image"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.leftText,"org.eclipse.edt.rui.widgets.TextLabel"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,69,2230,51, this);
					this.leftImage.setSrc("E:\\workspace\\e-Learning\\pictures\\\u56fe\u6807.jpg");
					egl.atLine(this.eze$$fileName,71,2313,16, this);
					this.leftText.setText("\u8bfe \u7a0b \u7b80 \u4ecb");
					egl.atLine(this.eze$$fileName,72,2336,15, this);
					this.leftText.setFontSize("16");
					egl.atLine(this.eze$$fileName,74,2378,9, this);
					this.rightBox.setPadding(8);
					egl.atLine(this.eze$$fileName,74,2389,9, this);
					this.rightBox.setColumns(1);
					egl.atLine(this.eze$$fileName,75,2405,48, this);
					this.rightBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.rightText,"org.eclipse.edt.rui.widgets.TextLabel"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLink1,"org.eclipse.edt.rui.widgets.HyperLink"]), egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HyperLink2,"org.eclipse.edt.rui.widgets.HyperLink"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,76,2460,16, this);
					this.rightBox.setMarginLeft(480);
					egl.atLine(this.eze$$fileName,77,2504,14, this);
					this.rightText.setText("\u6269\u5c55\u9605\u8bfb\uff1a");
					egl.atLine(this.eze$$fileName,78,2525,15, this);
					this.rightText.setFontSize("14");
					egl.atLine(this.eze$$fileName,79,2547,13, this);
					this.rightText.setFont("\u534e\u6587\u884c\u6977");
					egl.atLine(this.eze$$fileName,80,2590,22, this);
					this.HyperLink1.setText("\u7535\u5b50\u6d4b\u91cf\u6280\u672f\u6742\u5fd7\u2014\u4e2d\u56fd\u77e5\u7f51");
					egl.atLine(this.eze$$fileName,81,2619,15, this);
					this.HyperLink1.setFontSize("14");
					egl.atLine(this.eze$$fileName,82,2641,13, this);
					this.HyperLink1.setMarginTop(2);
					egl.atLine(this.eze$$fileName,83,2661,13, this);
					this.HyperLink1.setFont("\u534e\u6587\u6977\u4f53");
					egl.atLine(this.eze$$fileName,84,2681,56, this);
					this.HyperLink1.setHref("http://mall.cnki.net/magazine/magalist/DZCL.htm");
					egl.atLine(this.eze$$fileName,85,2744,17, this);
					this.HyperLink1.setTarget("_blank");
					egl.atLine(this.eze$$fileName,86,2791,17, this);
					this.HyperLink2.setText("\u56fd\u5916\u7535\u5b50\u6d4b\u91cf\u6280\u672f");
					egl.atLine(this.eze$$fileName,87,2815,15, this);
					this.HyperLink2.setFontSize("14");
					egl.atLine(this.eze$$fileName,88,2837,13, this);
					this.HyperLink2.setFont("\u534e\u6587\u6977\u4f53");
					egl.atLine(this.eze$$fileName,89,2857,47, this);
					this.HyperLink2.setHref("http://www.cqvip.com/qk/94755X/200510/");
					egl.atLine(this.eze$$fileName,90,2911,17, this);
					this.HyperLink2.setTarget("_blank");
					egl.atLine(this.eze$$fileName,92,2954,9, this);
					this.bodyBox.setPadding(8);
					egl.atLine(this.eze$$fileName,92,2965,9, this);
					this.bodyBox.setColumns(1);
					egl.atLine(this.eze$$fileName,93,2980,20, this);
					this.bodyBox.setChildren([egl.eglx.lang.convert(egl.eglx.ui.rui.Widget.fromWidget, [this.HTML1,"org.eclipse.edt.rui.widgets.HTML"])].setType("[Teglx/ui/rui/Widget;"));
					egl.atLine(this.eze$$fileName,94,3018,609, this);
					this.HTML1.setText((((("<li><b>1. \u8bfe\u7a0b\u6982\u8ff0\u4e0e\u6307\u5bfc\u601d\u60f3</b></li><p>\u5728\u5b9e\u9645\u6d4b\u91cf\u5de5\u4f5c\u4e2d\uff0c\u7531\u4e8e\u5916\u754c\u6761\u4ef6\u3001\u4eea\u5668\u672c\u8eab\u548c\u89c2\u6d4b\u8005\u6280\u672f\u6c34\u5e73\u7b49\u7684\u4e0d\u540c\uff0c\u5fc5\u7136\u5bfc\u81f4\u5bf9\u540c\u4e00\u6d4b\u91cf\u5bf9\u8c61\u8fdb\u884c\u7684\u82e5\u5e72\u6b21\u6d4b\u91cf\u6240\u5f97\u5230\u7684\u7ed3\u679c\u5f7c\u6b64\u4e0d\u540c\uff0c\u6216\u5728\u5404\u89c2\u6d4b\u503c\u4e0e\u5176\u7406\u8bba\u503c\u4e4b\u95f4\u4ecd\u5b58\u5728\u5dee\u5f02\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u6d4b\u91cf\u7ed3\u679c\u542b\u6709\u8bef\u5dee\u662f\u4e0d\u53ef\u907f\u514d\u7684\u3002\u4e3a\u4e86\u6d88\u9664\u6216\u51cf\u5c11\u8bef\u5dee\uff0c\u9700\u8981\u5bf9\u8bef\u5dee\u7684\u6765\u6e90\u3001\u6027\u8d28\u53ca\u5176\u4ea7\u751f\u548c\u4f20\u64ad\u7684\u89c4\u5f8b\u8fdb\u884c\u7814\u7a76\uff0c\u6765\u89e3\u51b3\u6d4b\u91cf\u4e2d\u7ecf\u5e38\u9047\u5230\u7684\u4e00\u4e9b\u95ee\u9898\u3002\u4f8b\u5982\uff0c\u5728\u4e00\u7cfb\u5217\u7684\u89c2\u6d4b\u503c\u4e2d\u5982\u4f55\u786e\u5b9a\u6700\u53ef\u9760\u503c\uff1b\u5982\u4f55\u6765\u8bc4\u5b9a\u6d4b\u91cf\u7684\u7cbe\u5ea6\uff1b\u4ec0\u4e48\u6837\u7684\u8bef\u5dee\u662f\u88ab\u8bb8\u53ef\u7684\uff0c\u5373\u5982\u4f55\u786e\u5b9a\u8bef\u5dee\u7684\u9650\u5ea6\u3002\u6240\u6709\u8fd9\u4e9b\u95ee\u9898\u90fd\u8981\u8fd0\u7528\u8bef\u5dee\u7406\u8bba\u6765\u5f97\u5230\u89e3\u51b3\u3002</p>") + "<li><b>2. \u6559\u5b66\u5185\u5bb9</b></li><p>\u672c\u8bfe\u7a0b\u6839\u636e\u7535\u5b50\u6d4b\u91cf\u6280\u672f\u8bfe\u7a0b\u6559\u5b66\u7684\u57fa\u672c\u8981\u6c42\uff0c\u7ed3\u5408\u7f16\u8005\u591a\u5e74\u7684\u6559\u5b66\u5b9e\u8df5\uff0c\u4e3a\u8fdb\u4e00\u6b65\u63d0\u9ad8\u5b66\u751f\u7684\u804c\u4e1a\u6280\u80fd\u4e0e\u81ea\u4e3b\u521b\u65b0\u80fd\u529b\u7f16\u5199\u800c\u6210\u3002\u5728\u5185\u5bb9\u53d6\u6750\u53ca\u5b89\u6392\u4e0a\uff0c\u4ee5\u201c\u5fc5\u987b\u201d\u548c\u201c\u591f\u7528\u201d\u4e3a\u524d\u63d0\uff0c\u8bb2\u6e05\u6982\u5ff5\uff0c\u5f3a\u5316\u5e94\u7528\u3002</p>")) + "<p>\u672c\u8bfe\u7a0b\u5206\u4e3a10\u8bfe\u65f6\uff0c\u5206\u522b\u662f\u7535\u5b50\u6d4b\u91cf\u7684\u57fa\u7840\u77e5\u8bc6\u3001\u6d4b\u91cf\u8bef\u5dee\u4e0e\u6570\u636e\u5904\u7406\u3001\u7535\u6d41\u7535\u538b\u4e0e\u529f\u7387\u7684\u6d4b\u91cf\u3001\u5e38\u7528\u7535\u5b50\u5143\u5668\u4ef6\u7684\u6d4b\u91cf\u3001\u6d4b\u91cf\u7528\u4fe1\u53f7\u53d1\u751f\u5668\u3001\u65f6\u95f4\u4e0e\u9891\u7387\u7684\u6d4b\u91cf\u3001\u7535\u5b50\u793a\u6ce2\u5668\u3001\u9891\u57df\u6d4b\u91cf\u6280\u672f\u3001\u6570\u636e\u57df\u6d4b\u8bd5\u6280\u672f\u53ca\u73b0\u4ee3\u7535\u5b50\u6d4b\u91cf\u6280\u672f\u3002\u6bcf\u7ae0\u5747\u914d\u6709\u7ecf\u5178\u4f8b\u9898\u548c\u4e60\u9898\uff0c\u6b64\u5916\uff0c\u6bcf\u7ae0\u6700\u540e\u8fd8\u7f16\u5199\u6709\u76f8\u5e94\u7684\u5b9e\u9a8c\u4e0e\u5b9e\u8bad\u3002\u672c\u8bfe\u7a0b\u53ef\u4f9b\u4ece\u4e8b\u7535\u5b50\u7535\u5de5\u6280\u672f\u7684\u5de5\u7a0b\u6280\u672f\u4eba\u5458\u5b66\u4e60\u53c2\u8003\u3002</p>"));
					egl.atLine(this.eze$$fileName,97,3633,13, this);
					this.HTML1.setWidth("800");
					egl.atLine(this.eze$$fileName,98,3652,15, this);
					this.HTML1.setFontSize("14");
					egl.atLine(this.eze$$fileName,15,513,15, this);
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
				var ezert$$2 = new egl.client.client.A();
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
				ezert$$2.rightBox = ezert$$1.rightBox === null ? null : ezert$$1.rightBox.eze$$clone();
				ezert$$2.rightText = ezert$$1.rightText === null ? null : ezert$$1.rightText.eze$$clone();
				ezert$$2.HyperLink1 = ezert$$1.HyperLink1 === null ? null : ezert$$1.HyperLink1.eze$$clone();
				ezert$$2.HyperLink2 = ezert$$1.HyperLink2 === null ? null : ezert$$1.HyperLink2.eze$$clone();
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
					{name: "rightBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "rightText", sig: "org.eclipse.edt.rui.widgets.TextLabel"},
					{name: "HyperLink1", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "HyperLink2", sig: "org.eclipse.edt.rui.widgets.HyperLink"},
					{name: "bodyBox", sig: "org.eclipse.edt.rui.widgets.Box"},
					{name: "HTML1", sig: "org.eclipse.edt.rui.widgets.HTML"}];
				}
				return this.fieldSigs;
			}
			,
			"eze$$getAnnotations": function() {
				if(this.annotations === undefined){
					this.annotations = {};
					this.annotations["XMLRootElement"] = new egl.eglx.xml.binding.annotation.XMLRootElement("A", null, false);
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
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("rightBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("rightBox");
					this.fieldInfos[18] =new egl.eglx.services.FieldInfo("rightBox", "rightBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("rightText", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("rightText");
					this.fieldInfos[19] =new egl.eglx.services.FieldInfo("rightText", "rightText", "org.eclipse.edt.rui.widgets.TextLabel", egl.org.eclipse.edt.rui.widgets.TextLabel, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLink1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLink1");
					this.fieldInfos[20] =new egl.eglx.services.FieldInfo("HyperLink1", "HyperLink1", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HyperLink2", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HyperLink2");
					this.fieldInfos[21] =new egl.eglx.services.FieldInfo("HyperLink2", "HyperLink2", "org.eclipse.edt.rui.widgets.HyperLink", egl.org.eclipse.edt.rui.widgets.HyperLink, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("bodyBox", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("bodyBox");
					this.fieldInfos[22] =new egl.eglx.services.FieldInfo("bodyBox", "bodyBox", "org.eclipse.edt.rui.widgets.Box", egl.org.eclipse.edt.rui.widgets.Box, annotations);
					annotations = {};
					annotations["XMLStyle"] = new egl.eglx.xml.binding.annotation.XMLElement("HTML1", null, false, false);
					annotations["JsonName"] = new egl.eglx.json.JsonName("HTML1");
					this.fieldInfos[23] =new egl.eglx.services.FieldInfo("HTML1", "HTML1", "org.eclipse.edt.rui.widgets.HTML", egl.org.eclipse.edt.rui.widgets.HTML, annotations);
				}
				return this.fieldInfos;
			}
			,
			"start": function() {
				try { egl.enter("start",this,arguments);
					egl.atLine(this.eze$$fileName,100,3678,24, this);
					if (!egl.debugg) egl.leave();
				} finally {
					if (!egl.debugg){
					} else { egl.leave(); }
				}
			}
			,
			"toString": function() {
				return "[A]";
			}
			,
			"eze$$getName": function() {
				return "A";
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
				{name: "rightBox", value : eze$$parent.rightBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "rightBox"},
				{name: "rightText", value : eze$$parent.rightText, type : "org.eclipse.edt.rui.widgets.TextLabel", jsName : "rightText"},
				{name: "HyperLink1", value : eze$$parent.HyperLink1, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLink1"},
				{name: "HyperLink2", value : eze$$parent.HyperLink2, type : "org.eclipse.edt.rui.widgets.HyperLink", jsName : "HyperLink2"},
				{name: "bodyBox", value : eze$$parent.bodyBox, type : "org.eclipse.edt.rui.widgets.Box", jsName : "bodyBox"},
				{name: "HTML1", value : eze$$parent.HTML1, type : "org.eclipse.edt.rui.widgets.HTML", jsName : "HTML1"},
				{name: "document", value : eze$$parent.document, type : "eglx.ui.rui.Document", jsName : "document"},
				{name: "initialUI", value : eze$$parent.initialUI, type : "eglx.lang.EList<eglx.ui.rui.Widget>", jsName : "!initialUI"}
				];
			}
		}
	);
});
