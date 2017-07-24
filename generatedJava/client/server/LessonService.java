package client.server;

import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.javart.services.*;
import org.eclipse.edt.javart.Runtime;
import org.eclipse.edt.javart.json.Json;
import eglx.persistence.sql.SQLException;
import org.eclipse.edt.runtime.java.eglx.lang.EBoolean;
import java.lang.Boolean;
import org.eclipse.edt.runtime.java.eglx.lang.EString;
import java.lang.String;
import eglx.persistence.sql.SQLDataSource;
import client.common.Lesson;
import org.eclipse.edt.runtime.java.eglx.lang.EList;
import java.util.List;
import eglx.lang.SysLib;
import org.eclipse.edt.runtime.java.eglx.lang.AnyStruct;
import org.eclipse.edt.runtime.java.eglx.lang.EInt;
import java.lang.Integer;
import eglx.lang.AnyException;
@SuppressWarnings("unused")

@javax.xml.bind.annotation.XmlRootElement(name="LessonService")
public class LessonService extends ServiceBase {
	private static final long serialVersionUID = 10L;
	public transient SQLDataSource myLessonService;
	public boolean logActive;
	public String activeService;
	
	{
		if(Runtime.getRunUnit().getActiveExecutable() == null)
		Runtime.getRunUnit().setActiveExecutable(this);
		ezeInitialize();
	}
	
	public LessonService() {
		super();
	}
	public void ezeInitialize() {
		activeService = "";
		myLessonService = org.eclipse.edt.runtime.java.eglx.lang.EAny.ezeCast(eglx.lang.Resources.getResource("binding:eLearnDerby"), SQLDataSource.class);
		logActive = true;
	}
	@FunctionSignature(name="addLesson", parameters={@FunctionParameter(jsonInfo=@Json(name="newLesson", clazz=Lesson.class, asOptions={}), kind=FunctionParameterKind.IN)})
	public void addLesson(Lesson newLesson){
		logEntry("addLessons");
		try {
			try {
				java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myLessonService.getStatement("client.server.LessonService", 0);
				if (ezeStatement== null) {
					String stmtStr = "insert into LESSON       (lessonname, coursecom, URL)      values       (?, ?, ?)";
					ezeStatement = myLessonService.getConnection().prepareStatement(stmtStr, java.sql.Statement.RETURN_GENERATED_KEYS);
					myLessonService.registerStatement("client.server.LessonService", 0, ezeStatement);
				}
				ezeStatement.setString(1, newLesson.lessonname);
				ezeStatement.setString(2, newLesson.coursecom);
				if(null == newLesson._url){
					ezeStatement.setNull(3, java.sql.Types.VARCHAR);
				}
				else{
					ezeStatement.setString(3, newLesson._url);
				}
				ezeStatement.execute();
				java.sql.ResultSet eze$Temp1 = ezeStatement.getGeneratedKeys();
				if (eze$Temp1 != null && eze$Temp1.next()) {
					newLesson.lesson_id = eze$Temp1.getInt(1);
				}
			}
			catch(java.sql.SQLException ezeEx) {
				throw eglx.persistence.sql.SQLUtilities.makeEglException(ezeEx);
			}
			;
		}
		catch (SQLException ex) {
			logException(ex);
		}
	}
	@FunctionSignature(name="getAllLessons", parameters={@FunctionParameter(jsonInfo=@Json(name="eze_return", clazz=Lesson.class, asOptions={}), kind=FunctionParameterKind.RETURN, arrayDimensions=1)})
	public List<Lesson> getAllLessons(){
		List<Lesson> Lessons = EList.ezeNew(Lesson.class);
		logEntry("getAllLessons");
		try {
			try {
				java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myLessonService.getStatement("client.server.LessonService", 1);
				if (ezeStatement== null) {
					String stmtStr = "select          lesson_id, lessonname, coursecom, URL         from LESSON";
					ezeStatement = myLessonService.getConnection().prepareStatement(stmtStr);
					myLessonService.registerStatement("client.server.LessonService", 1, ezeStatement);
				}
				java.sql.ResultSet eze$Temp2 = ezeStatement.executeQuery();
				List<Lesson> ezeList = EList.ezeNew(Lesson.class);
				while(eze$Temp2.next()) {
					Lesson eze$Temp3 = new Lesson();
					eze$Temp3.lesson_id = eze$Temp2.getInt(1);
					eze$Temp3.lessonname = eze$Temp2.getString(2);
					eze$Temp3.coursecom = eze$Temp2.getString(3);
					eze$Temp3._url = eze$Temp2.getString(4);
					if(eze$Temp2.wasNull()){
						eze$Temp3._url = null;
					}
					ezeList.add(eze$Temp3);
				}
				Lessons = ezeList;
				eze$Temp2.close();
			}
			catch(java.sql.SQLException ezeEx) {
				throw eglx.persistence.sql.SQLUtilities.makeEglException(ezeEx);
			}
			;
		}
		catch (SQLException ex) {
			logException(ex);
		}
		return Lessons;
	}
	@FunctionSignature(name="editLesson", parameters={@FunctionParameter(jsonInfo=@Json(name="chgLesson", clazz=Lesson.class, asOptions={}), kind=FunctionParameterKind.IN)})
	public void editLesson(Lesson chgLesson){
		logEntry("editLesson");
		try {
			try {
				java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myLessonService.getStatement("client.server.LessonService", 2);
				if (ezeStatement== null) {
					String stmtStr = "update LESSON         set          lessonname = ?,          coursecom = ?,          URL = ?         where          lesson_id = ?";
					ezeStatement = myLessonService.getConnection().prepareStatement(stmtStr);
					myLessonService.registerStatement("client.server.LessonService", 2, ezeStatement);
				}
				ezeStatement.setString(1, chgLesson.lessonname);
				ezeStatement.setString(2, chgLesson.coursecom);
				if(null == chgLesson._url){
					ezeStatement.setNull(3, java.sql.Types.VARCHAR);
				}
				else{
					ezeStatement.setString(3, chgLesson._url);
				}
				ezeStatement.setInt(4, chgLesson.lesson_id);
				ezeStatement.executeUpdate();
			}
			catch(java.sql.SQLException ezeEx) {
				throw eglx.persistence.sql.SQLUtilities.makeEglException(ezeEx);
			}
			;
		}
		catch (SQLException ex) {
			logException(ex);
		}
	}
	@FunctionSignature(name="deleteLesson", parameters={@FunctionParameter(jsonInfo=@Json(name="delLesson", clazz=Lesson.class, asOptions={}), kind=FunctionParameterKind.IN)})
	public void deleteLesson(Lesson delLesson){
		logEntry("editLesson");
		try {
			try {
				java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myLessonService.getStatement("client.server.LessonService", 3);
				if (ezeStatement== null) {
					String stmtStr = "delete from LESSON         where          lesson_id = ?";
					ezeStatement = myLessonService.getConnection().prepareStatement(stmtStr);
					myLessonService.registerStatement("client.server.LessonService", 3, ezeStatement);
				}
				ezeStatement.setInt(1, delLesson.lesson_id);
				ezeStatement.execute();
			}
			catch(java.sql.SQLException ezeEx) {
				throw eglx.persistence.sql.SQLUtilities.makeEglException(ezeEx);
			}
			;
		}
		catch (SQLException ex) {
			if ((EString.notEquals(ex.getSQLState(), "02000"))) {
				SQLException logException = new SQLException();
			}
		}
	}
	@FunctionSignature(name="createDefaultTableLesson", parameters={@FunctionParameter(jsonInfo=@Json(name="eze_return", clazz=Lesson.class, asOptions={}), kind=FunctionParameterKind.RETURN, arrayDimensions=1)})
	public List<Lesson> createDefaultTableLesson(){
		List<Lesson> Lessons = EList.ezeNew(Lesson.class);
		logEntry("createDefaultTable");
		try {
			try {
				try {
					java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myLessonService.getStatement("client.server.LessonService", 4);
					if (ezeStatement== null) {
						String stmtStr = "delete from Lesson";
						ezeStatement = myLessonService.getConnection().prepareStatement(stmtStr);
						myLessonService.registerStatement("client.server.LessonService", 4, ezeStatement);
					}
					ezeStatement.execute();
				}
				catch(java.sql.SQLException ezeEx) {
					throw eglx.persistence.sql.SQLUtilities.makeEglException(ezeEx);
				}
				;
			}
			catch (SQLException ex) {
				if ((EString.notEquals(ex.getSQLState(), "02000"))) {
					throw ex;
				}
			}
			Lesson eze$LNNTemp7 = null;
			{
				Lesson eze$SettingTarget1 = new Lesson();
				eze$SettingTarget1.lesson_id = 1;
				eze$SettingTarget1.lessonname = EString.ezeCast("\u53ef\u7231\u7684\u6821\u56ed", 100);
				eze$SettingTarget1.coursecom = EString.ezeCast("\u672c\u8bfe\u7a0b\u672c\u7740\u7a81\u51fa\u5b9e\u7528\u6027\u3001\u5b9e\u8df5\u6027\u7684\u539f\u5219\uff0c\u4e3b\u8981\u5185\u5bb9\u5305\u62ec\u7535\u8def\u7684\u57fa\u672c\u6982\u5ff5\u548c\u5b9a\u5f8b\uff0c\u7535\u8def\u7684\u7b49\u6548\u53d8\u6362\uff0c\u7ebf\u6027\u7535\u8def\u7684\u4e00\u822c\u5206\u6790\u65b9\u6cd5\u548c\u57fa\u672c\u5b9a\u7406\uff0c\u6b63\u5f26\u4ea4\u6d41\u7535\u8def\uff0c\u4e92\u611f\u7535\u8def\u53ca\u7406\u60f3\u53d8\u538b\u5668\uff0c\u975e\u6b63\u5f26\u5468\u671f\u6027\u4fe1\u53f7\u7535\u8def\uff0c\u77ac\u6001\u7535\u8def\u7b49\u3002", 255);
				eze$SettingTarget1._url = EString.ezeCast("\u9009\u62e9", 255);
				eze$LNNTemp7 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
			}
			Lesson eze$Temp6 = null;
			eze$Temp6 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp7), eze$Temp6);
			addLesson(eze$Temp6);
			Lesson eze$LNNTemp9 = null;
			{
				Lesson eze$SettingTarget1 = new Lesson();
				eze$SettingTarget1.lesson_id = 2;
				eze$SettingTarget1.lessonname = EString.ezeCast("\u5feb\u4e50\u7684\u5bb6\u56ed", 100);
				eze$SettingTarget1.coursecom = EString.ezeCast("\u672c\u8bfe\u7a0b\u5168\u9762\u3001\u7cfb\u7edf\u5730\u4ecb\u7ecd\u4e86\u7535\u5b50\u6280\u672f\u7684\u57fa\u7840\u77e5\u8bc6\u548c\u57fa\u672c\u6280\u672f\uff0c\u5c06\u57fa\u7840\u7406\u8bba\u4e0e\u5e94\u7528\u7d27\u5bc6\u7ed3\u5408\uff0c\u6ce8\u91cd\u4f53\u73b0\u77e5\u8bc6\u7684\u5b9e\u7528\u6027\u548c\u524d\u6cbf\u6027\u3002\u5171\u520611\u7ae0\uff0c\u524d6\u7ae0\u4e3a\u6a21\u62df\u7535\u8def\u90e8\u5206\uff0c\u540e5\u7ae0\u4e3a\u6570\u5b57\u7535\u8def\u90e8\u5206\uff0c\u7f16\u8005\u5c06\u4e24\u90e8\u5206\u5185\u5bb9\u6709\u673a\u5730\u878d\u4e3a\u4e00\u4f53\u3002\u4e3b\u8981\u5185\u5bb9\u5305\u62ec\u534a\u5bfc\u4f53\u5668\u4ef6\u3001\u653e\u5927\u7535\u8def\u3001\u96c6\u6210\u8fd0\u7b97\u653e\u5927\u5668\u3001\u76f4\u6d41\u7a33\u538b\u7535\u6e90\u3001\u903b\u8f91\u4ee3\u6570\u3001\u903b\u8f91\u95e8\u7535\u8def\u3001\u7ec4\u5408\u903b\u8f91\u7535\u8def\u3001\u96c6\u6210\u89e6\u53d1\u5668\u3001\u65f6\u5e8f\u903b\u8f91\u7535\u8def\u4ee5\u53ca\u6a21/\u6570\u4e0e\u6570/\u6a21\u8f6c\u6362\u7b49\u3002", 255);
				eze$SettingTarget1._url = EString.ezeCast("\u9009\u62e9", 255);
				eze$LNNTemp9 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp9);
			}
			Lesson eze$Temp8 = null;
			eze$Temp8 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp9), eze$Temp8);
			addLesson(eze$Temp8);
			Lesson eze$LNNTemp11 = null;
			{
				Lesson eze$SettingTarget1 = new Lesson();
				eze$SettingTarget1.lesson_id = 3;
				eze$SettingTarget1.lessonname = EString.ezeCast("\u73a9\u5177", 100);
				eze$SettingTarget1.coursecom = EString.ezeCast("\u672c\u8bfe\u7a0b\u4e3a\u8fdb\u4e00\u6b65\u63d0\u9ad8\u5b66\u4e60\u8005\u7684\u804c\u4e1a\u6280\u80fd\u4e0e\u81ea\u4e3b\u521b\u65b0\u80fd\u529b\u800c\u8bbe\u5b9a\u3002\u5728\u5185\u5bb9\u53d6\u6750\u53ca\u5b89\u6392\u4e0a\uff0c\u4ee5\u201c\u5fc5\u987b\u201d\u548c\u201c\u591f\u7528\u201d\u4e3a\u524d\u63d0\uff0c\u8bb2\u6e05\u6982\u5ff5\uff0c\u5f3a\u5316\u5e94\u7528\u3002\u672c\u8bfe\u7a0b\u5206\u4e3a10\u7ae0\uff0c\u5206\u522b\u662f\u7535\u5b50\u6d4b\u91cf\u7684\u57fa\u7840\u77e5\u8bc6\u3001\u6d4b\u91cf\u8bef\u5dee\u4e0e\u6570\u636e\u5904\u7406\u3001\u7535\u6d41\u7535\u538b\u4e0e\u529f\u7387\u7684\u6d4b\u91cf\u3001\u5e38\u7528\u7535\u5b50\u5143\u5668\u4ef6\u7684\u6d4b\u91cf\u3001\u6d4b\u91cf\u7528\u4fe1\u53f7\u53d1\u751f\u5668\u3001\u65f6\u95f4\u4e0e\u9891\u7387\u7684\u6d4b\u91cf\u3001\u7535\u5b50\u793a\u6ce2\u5668\u3001\u9891\u57df\u6d4b\u91cf\u6280\u672f\u3001\u6570\u636e\u57df\u6d4b\u8bd5\u6280\u672f\u53ca\u73b0\u4ee3\u7535\u5b50\u6d4b\u91cf\u6280\u672f\u3002", 255);
				eze$SettingTarget1._url = EString.ezeCast("\u9009\u62e9", 255);
				eze$LNNTemp11 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp11);
			}
			Lesson eze$Temp10 = null;
			eze$Temp10 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp11), eze$Temp10);
			addLesson(eze$Temp10);
			Lesson eze$LNNTemp13 = null;
			{
				Lesson eze$SettingTarget1 = new Lesson();
				eze$SettingTarget1.lesson_id = 4;
				eze$SettingTarget1.lessonname = EString.ezeCast("\u5c0f\u732b\u9493\u9c7c", 100);
				eze$SettingTarget1.coursecom = EString.ezeCast("\u672c\u8bfe\u7a0b\u5185\u5bb9\u5305\u62ec6\u7ae0\uff1a\u4fe1\u53f7\u4e0e\u7cfb\u7edf\u5206\u6790\u57fa\u7840\u3001\u8fde\u7eed\u4fe1\u53f7\u7684\u9891\u57df\u5206\u6790\u4e0e\u5904\u7406\u3001\u8fde\u7eed\u4fe1\u53f7\u7684\u590d\u9891\u57df\u5206\u6790\u4e0e\u5904\u7406\u3001\u79bb\u6563\u4fe1\u53f7\u7684\u5206\u6790\u4e0e\u5904\u7406\u3001\u6570\u5b57\u4fe1\u53f7\u5904\u7406\u3001\u4fe1\u53f7\u5206\u6790\u4e0e\u5904\u7406\u7684MATLAB\u5b9e\u73b0\u3002", 255);
				eze$SettingTarget1._url = EString.ezeCast("\u9009\u62e9", 255);
				eze$LNNTemp13 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp13);
			}
			Lesson eze$Temp12 = null;
			eze$Temp12 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp13), eze$Temp12);
			addLesson(eze$Temp12);
			Lesson eze$LNNTemp15 = null;
			{
				Lesson eze$SettingTarget1 = new Lesson();
				eze$SettingTarget1.lesson_id = 5;
				eze$SettingTarget1.lessonname = EString.ezeCast("\u6587\u5177", 100);
				eze$SettingTarget1.coursecom = EString.ezeCast("\u672c\u8bfe\u7a0b\u4e2d\u7684\u73b0\u4ee3\u5fae\u673a\u7cfb\u7edf\u7684\u4e3b\u673a\u677f\uff0c\u8ba8\u8bba\u4e86\u7cfb\u7edf\u4e2d\u8d77\u6838\u5fc3\u4f5c\u7528\u7684\u82af\u7247\u7ec4\uff1b\u5728\u5b58\u50a8\u5668\u90e8\u5206\u589e\u52a0\u4e86\u201c\u5b58\u50a8\u5668\u5c42\u6b21\u4f53\u7cfb\u7ed3\u6784\u201d\u548c\u201c\u4e3b\u5b58\u50a8\u5668\u7684\u7ec4\u7ec7\u201d\u5185\u5bb9\uff0c\u4ee5\u53cd\u6620\u73b0\u4ee3\u5b58\u50a8\u5668\u7684\u7279\u70b9\uff1a\u5728\u8f93\u5165\u8f93\u51fa\u63a5\u53e3\u90e8\u5206\uff0c\u5219\u589e\u52a0\u8ba8\u8bba\u4ee5\u201c\u5317\u6865\u201d\u3001\u201c\u5357\u6865\u201d\u82af\u7247\u652f\u6301\u7684\u591a\u79cd\u603b\u7ebf\u8f93\u5165\u8f93\u51fa\u4f53\u7cfb\u7ed3\u6784\uff0c\u53d6\u4ee3\u5355\u4e00\u7684ISA\u603b\u7ebf\u4f53\u7cfb\u7ed3\u6784\u3002", 255);
				eze$SettingTarget1._url = EString.ezeCast("\u9009\u62e9", 255);
				eze$LNNTemp15 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp15);
			}
			Lesson eze$Temp14 = null;
			eze$Temp14 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp15), eze$Temp14);
			addLesson(eze$Temp14);
			Lessons = getAllLessons();
		}
		catch ( java.lang.Exception eze$Temp16 ) {
			org.eclipse.edt.javart.util.JavartUtil.checkHandleable( eze$Temp16 );
			AnyException ex;
			if ( eze$Temp16 instanceof AnyException ) {
				ex = (AnyException)eze$Temp16;
			}
			else {
				ex = org.eclipse.edt.javart.util.JavartUtil.makeEglException(eze$Temp16);
			}
			{
				logException(org.eclipse.edt.runtime.java.eglx.lang.EAny.ezeCast(ex, SQLException.class));
			}
		}
		return Lessons;
	}
	@FunctionSignature(name="logEntry", parameters={@FunctionParameter(jsonInfo=@Json(name="serviceFunction", clazz=EString.class, asOptions={}), kind=FunctionParameterKind.IN)})
	private void logEntry(String serviceFunction){
		activeService = serviceFunction;
		log((("Entry:  LessonService, ") + serviceFunction));
	}
	@FunctionSignature(name="logException", parameters={@FunctionParameter(jsonInfo=@Json(name="ex", clazz=SQLException.class, asOptions={}), kind=FunctionParameterKind.IN)})
	private void logException(SQLException ex){
		String accumulatedMessage;
		accumulatedMessage = (("Exception:  LessonService, ") + activeService);
		while ((org.eclipse.edt.runtime.java.eglx.lang.EAny.notEquals(ex, null))) {
			accumulatedMessage = (((((EString.plus(((accumulatedMessage) + ", SQLSTATE = "), org.eclipse.edt.javart.util.JavartUtil.checkNullable(ex).getSQLState()))) + ", message = ")) + org.eclipse.edt.javart.util.JavartUtil.checkNullable(ex).getMessage());
			ex = org.eclipse.edt.javart.util.JavartUtil.checkNullable(ex).getNextException();
		}
		log(accumulatedMessage);
		AnyException eze$LNNTemp18 = null;
		{
			AnyException eze$SettingTarget1;
			eze$SettingTarget1 = new AnyException();
			eze$SettingTarget1.setMessage(accumulatedMessage);
			eze$LNNTemp18 = eze$SettingTarget1;
		}
		throw eze$LNNTemp18;
	}
	@FunctionSignature(name="log", parameters={@FunctionParameter(jsonInfo=@Json(name="text", clazz=EString.class, asOptions={}), kind=FunctionParameterKind.IN)})
	private void log(String text){
		if (logActive) {
			SysLib.writeStdout(text);
		}
	}
}
