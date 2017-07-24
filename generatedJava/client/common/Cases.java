package client.common;

import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.runtime.java.eglx.lang.EString;
import java.lang.String;
import org.eclipse.edt.runtime.java.eglx.lang.EInt;
import java.lang.Integer;
import org.eclipse.edt.runtime.java.eglx.lang.AnyValue;
@SuppressWarnings("unused")

@javax.xml.bind.annotation.XmlRootElement(name="Cases")
public class Cases extends org.eclipse.edt.runtime.java.eglx.lang.AnyValue {
	private static final long serialVersionUID = 10L;
	@javax.xml.bind.annotation.XmlTransient
	public int case_id;
	@javax.xml.bind.annotation.XmlTransient
	public String casename;
	private static java.util.HashMap<String, TypeConstraints> ezeTypeConstraints = new java.util.HashMap<String, TypeConstraints>();
	static {
		ezeTypeConstraints.put("casename", new TypeConstraints(EString.class));
	}
	public Cases() {
		super();
	}
	{
		ezeInitialize();
	}
	public void ezeCopy(Object source) {
		ezeCopy((Cases) source);
	}
	public void ezeCopy(eglx.lang.AnyValue source) {
		this.case_id = ((Cases) source).case_id;
		this.casename = ((Cases) source).casename;
	}
	public Cases ezeNewValue(Object... args) {
		return new Cases();
	}
	public void ezeSetEmpty() {
		case_id = 0;
		casename = "";
	}
	public boolean isVariableDataLength() {
		return false;
	}
	public void loadFromBuffer(ByteStorage buffer, Program program) {
	}
	public int sizeInBytes() {
		return 0;
	}
	public void storeInBuffer(ByteStorage buffer) {
	}
	public void ezeInitialize() {
		case_id = 0;
		casename = "";
	}
	@javax.xml.bind.annotation.XmlElement(name="case_id", required=false, nillable=false)
	@org.eclipse.edt.javart.json.Json(name="case_id", clazz=EInt.class, asOptions={})
	public int getCase_id(){
		return case_id;
	}
	public void setCase_id(int ezeValue){
		case_id = ezeValue;
	}
	@javax.xml.bind.annotation.XmlElement(name="casename", required=false, nillable=false)
	@org.eclipse.edt.javart.json.Json(name="casename", clazz=EString.class, asOptions={"100"})
	public String getCasename(){
		return casename;
	}
	public void setCasename(String ezeValue){
		casename = ezeValue;
	}
}
