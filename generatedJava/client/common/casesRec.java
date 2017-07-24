package client.common;

import org.eclipse.edt.javart.resources.*;
import org.eclipse.edt.javart.*;
import org.eclipse.edt.runtime.java.eglx.lang.EString;
import java.lang.String;
import org.eclipse.edt.runtime.java.eglx.lang.AnyValue;
@SuppressWarnings("unused")

@javax.xml.bind.annotation.XmlRootElement(name="casesRec")
public class casesRec extends org.eclipse.edt.runtime.java.eglx.lang.AnyValue {
	private static final long serialVersionUID = 10L;
	@javax.xml.bind.annotation.XmlTransient
	public String itemName;
	public casesRec() {
		super();
	}
	{
		ezeInitialize();
	}
	public void ezeCopy(Object source) {
		ezeCopy((casesRec) source);
	}
	public void ezeCopy(eglx.lang.AnyValue source) {
		this.itemName = ((casesRec) source).itemName;
	}
	public casesRec ezeNewValue(Object... args) {
		return new casesRec();
	}
	public void ezeSetEmpty() {
		itemName = "";
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
		itemName = "";
	}
	@javax.xml.bind.annotation.XmlElement(name="itemName", required=false, nillable=false)
	@org.eclipse.edt.javart.json.Json(name="itemName", clazz=EString.class, asOptions={})
	public String getItemName(){
		return itemName;
	}
	public void setItemName(String ezeValue){
		itemName = ezeValue;
	}
}
