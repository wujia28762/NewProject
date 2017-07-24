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
import org.eclipse.edt.runtime.java.eglx.lang.EList;
import java.util.List;
import eglx.lang.SysLib;
import org.eclipse.edt.runtime.java.eglx.lang.AnyStruct;
import org.eclipse.edt.runtime.java.eglx.lang.EInt;
import java.lang.Integer;
import eglx.lang.AnyException;
import client.common.Cases;
@SuppressWarnings("unused")

@javax.xml.bind.annotation.XmlRootElement(name="CasesService")
public class CasesService extends ServiceBase {
	private static final long serialVersionUID = 10L;
	public transient SQLDataSource myCasesService;
	public boolean logActive;
	public String activeService;
	
	{
		if(Runtime.getRunUnit().getActiveExecutable() == null)
		Runtime.getRunUnit().setActiveExecutable(this);
		ezeInitialize();
	}
	
	public CasesService() {
		super();
	}
	public void ezeInitialize() {
		activeService = "";
		myCasesService = org.eclipse.edt.runtime.java.eglx.lang.EAny.ezeCast(eglx.lang.Resources.getResource("binding:eLearnDerby"), SQLDataSource.class);
		logActive = true;
	}
	@FunctionSignature(name="addCases", parameters={@FunctionParameter(jsonInfo=@Json(name="newCases", clazz=Cases.class, asOptions={}), kind=FunctionParameterKind.IN)})
	public void addCases(Cases newCases){
		logEntry("addCases");
		try {
			try {
				java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myCasesService.getStatement("client.server.CasesService", 0);
				if (ezeStatement== null) {
					String stmtStr = "insert into CASES           (casename)          values           (?)";
					ezeStatement = myCasesService.getConnection().prepareStatement(stmtStr, java.sql.Statement.RETURN_GENERATED_KEYS);
					myCasesService.registerStatement("client.server.CasesService", 0, ezeStatement);
				}
				ezeStatement.setString(1, newCases.casename);
				ezeStatement.execute();
				java.sql.ResultSet eze$Temp1 = ezeStatement.getGeneratedKeys();
				if (eze$Temp1 != null && eze$Temp1.next()) {
					newCases.case_id = eze$Temp1.getInt(1);
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
	@FunctionSignature(name="getAllCases", parameters={@FunctionParameter(jsonInfo=@Json(name="eze_return", clazz=Cases.class, asOptions={}), kind=FunctionParameterKind.RETURN, arrayDimensions=1)})
	public List<Cases> getAllCases(){
		List<Cases> casess = EList.ezeNew(Cases.class);
		logEntry("getAllCases");
		try {
			try {
				java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myCasesService.getStatement("client.server.CasesService", 1);
				if (ezeStatement== null) {
					String stmtStr = "select           case_id, casename          from CASES";
					ezeStatement = myCasesService.getConnection().prepareStatement(stmtStr);
					myCasesService.registerStatement("client.server.CasesService", 1, ezeStatement);
				}
				java.sql.ResultSet eze$Temp2 = ezeStatement.executeQuery();
				List<Cases> ezeList = EList.ezeNew(Cases.class);
				while(eze$Temp2.next()) {
					Cases eze$Temp3 = new Cases();
					eze$Temp3.case_id = eze$Temp2.getInt(1);
					eze$Temp3.casename = eze$Temp2.getString(2);
					ezeList.add(eze$Temp3);
				}
				casess = ezeList;
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
		return casess;
	}
	@FunctionSignature(name="editCases", parameters={@FunctionParameter(jsonInfo=@Json(name="chgCases", clazz=Cases.class, asOptions={}), kind=FunctionParameterKind.IN)})
	public void editCases(Cases chgCases){
		logEntry("editCases");
		try {
			try {
				java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myCasesService.getStatement("client.server.CasesService", 2);
				if (ezeStatement== null) {
					String stmtStr = "update CASES            set             casename = ?            where             case_id = ?";
					ezeStatement = myCasesService.getConnection().prepareStatement(stmtStr);
					myCasesService.registerStatement("client.server.CasesService", 2, ezeStatement);
				}
				ezeStatement.setString(1, chgCases.casename);
				ezeStatement.setInt(2, chgCases.case_id);
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
	@FunctionSignature(name="deleteCases", parameters={@FunctionParameter(jsonInfo=@Json(name="delCases", clazz=Cases.class, asOptions={}), kind=FunctionParameterKind.IN)})
	public void deleteCases(Cases delCases){
		logEntry("deleteCases");
		try {
			try {
				java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myCasesService.getStatement("client.server.CasesService", 3);
				if (ezeStatement== null) {
					String stmtStr = "delete from CASES          where           case_id = ?";
					ezeStatement = myCasesService.getConnection().prepareStatement(stmtStr);
					myCasesService.registerStatement("client.server.CasesService", 3, ezeStatement);
				}
				ezeStatement.setInt(1, delCases.case_id);
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
	@FunctionSignature(name="createDefaultTableCases", parameters={@FunctionParameter(jsonInfo=@Json(name="eze_return", clazz=Cases.class, asOptions={}), kind=FunctionParameterKind.RETURN, arrayDimensions=1)})
	public List<Cases> createDefaultTableCases(){
		List<Cases> Casess = EList.ezeNew(Cases.class);
		logEntry("createDefaultTableCases");
		try {
			try {
				try {
					java.sql.PreparedStatement ezeStatement = (java.sql.PreparedStatement)myCasesService.getStatement("client.server.CasesService", 4);
					if (ezeStatement== null) {
						String stmtStr = "delete from Cases";
						ezeStatement = myCasesService.getConnection().prepareStatement(stmtStr);
						myCasesService.registerStatement("client.server.CasesService", 4, ezeStatement);
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
			Cases eze$LNNTemp7 = null;
			{
				Cases eze$SettingTarget1 = new Cases();
				eze$SettingTarget1.case_id = 1;
				eze$SettingTarget1.casename = EString.ezeCast("\u7535\u5b50\u8c37\u7269\u6570\u7c92\u4eeaPCB\u6284\u677f\u5f00\u53d1\u4e0eIC\u89e3\u5bc6\u7814\u7a76", 100);
				eze$LNNTemp7 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp7);
			}
			Cases eze$Temp6 = null;
			eze$Temp6 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp7), eze$Temp6);
			addCases(eze$Temp6);
			Cases eze$LNNTemp9 = null;
			{
				Cases eze$SettingTarget1 = new Cases();
				eze$SettingTarget1.case_id = 2;
				eze$SettingTarget1.casename = EString.ezeCast("\u9ad8\u538b\u65ad\u8def\u5668\u7a0b\u63a7\u4eeaPCB\u6539\u677f\u53ca\u6837\u673a\u5b9a\u5236\u5f00\u53d1", 100);
				eze$LNNTemp9 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp9);
			}
			Cases eze$Temp8 = null;
			eze$Temp8 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp9), eze$Temp8);
			addCases(eze$Temp8);
			Cases eze$LNNTemp11 = null;
			{
				Cases eze$SettingTarget1 = new Cases();
				eze$SettingTarget1.case_id = 3;
				eze$SettingTarget1.casename = EString.ezeCast("\u81ea\u52a8\u6ee4\u6750\u6d4b\u8bd5\u4eeaPCB\u6284\u677f\u53ca\u6280\u672f\u8d44\u6599\u63d0\u53d6", 100);
				eze$LNNTemp11 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp11);
			}
			Cases eze$Temp10 = null;
			eze$Temp10 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp11), eze$Temp10);
			addCases(eze$Temp10);
			Cases eze$LNNTemp13 = null;
			{
				Cases eze$SettingTarget1 = new Cases();
				eze$SettingTarget1.case_id = 4;
				eze$SettingTarget1.casename = EString.ezeCast("\u89e3\u6790\u843d\u5730\u5f0f\u6052\u6e29\u57f9\u517b\u632f\u8361\u5668\u6284\u677f\u5b8c\u6210\u9879\u76ee", 100);
				eze$LNNTemp13 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp13);
			}
			Cases eze$Temp12 = null;
			eze$Temp12 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp13), eze$Temp12);
			addCases(eze$Temp12);
			Cases eze$LNNTemp15 = null;
			{
				Cases eze$SettingTarget1 = new Cases();
				eze$SettingTarget1.case_id = 5;
				eze$SettingTarget1.casename = EString.ezeCast("\u89e3\u6790\u8d85\u58f0\u6ce2\u56fa\u4f53\u60ac\u6d6e\u7269\u6d53\u5ea6\u4eea\u514b\u9686\u5b8c\u6210\u9879\u76ee", 100);
				eze$LNNTemp15 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(eze$SettingTarget1, eze$LNNTemp15);
			}
			Cases eze$Temp14 = null;
			eze$Temp14 = org.eclipse.edt.runtime.java.eglx.lang.AnyValue.ezeCopyTo(org.eclipse.edt.javart.util.JavartUtil.checkNullable(eze$LNNTemp15), eze$Temp14);
			addCases(eze$Temp14);
			Casess = getAllCases();
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
		return Casess;
	}
	@FunctionSignature(name="logEntry", parameters={@FunctionParameter(jsonInfo=@Json(name="serviceFunction", clazz=EString.class, asOptions={}), kind=FunctionParameterKind.IN)})
	private void logEntry(String serviceFunction){
		activeService = serviceFunction;
		log((("Entry:  ArticleService, ") + serviceFunction));
	}
	@FunctionSignature(name="logException", parameters={@FunctionParameter(jsonInfo=@Json(name="ex", clazz=SQLException.class, asOptions={}), kind=FunctionParameterKind.IN)})
	private void logException(SQLException ex){
		String accumulatedMessage;
		accumulatedMessage = (("Exception:  ArticleService, ") + activeService);
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
