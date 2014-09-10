/**
 * SOLID Responsabilidad �nica: el par�metros asume la responsabilidad de 2 par�mtros
 * el command y los arguments
 * Lo romperemos en varios pasos para intentar romper los test
 * los m�s tarde posible
 * Paso 1 mantenemos el par�metro y lo rompemos dentro de la funci�n.
 * Paso 2 eliminamos el caso de crear el comand dentro del for
 */
function buildCommand(commandNameAndArguments) {
	if(!commandNameAndArguments){
		return {};
	}

	var command,
		arguments;

	command = commandNameAndArguments[0];
	arguments = commandNameAndArguments.slice(1, commandNameAndArguments.length);

	var parameters = command;

	if (arguments.length > 0) {
	    parameters += ":" + arguments[0];
	}

	for (var i = 1; i < arguments.length; i++) {        
	    parameters += "-" + arguments[i];
	};
	
	return "["+parameters+"]";
}