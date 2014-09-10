/**
 * SOLID Responsabilidad �nica: el par�metros asume la responsabilidad de 2 par�mtros
 * el command y los arguments
 * Lo romperemos en varios pasos para intentar romper los test
 * los m�s tarde posible
 * Paso 1 mantenemos el par�metro y lo rompemos dentro de la funci�n.
 * Paso 2 eliminamos el caso de crear el comand dentro del for
 * Paso 3 Refactor de c�digo actual
 */
function buildCommand(commandNameAndArguments) {
	if(!commandNameAndArguments){
		return {};
	}

	var pCommand,
		pArguments,
	    parameters,
		argumentsLength;

	pCommand = commandNameAndArguments[0];
	pArguments = commandNameAndArguments.slice(1, commandNameAndArguments.length);

	argumentsLength = pArguments.length;

	parameters = pCommand;

	if (argumentsLength > 0) {
	    parameters += ":" + pArguments[0];
	}

	for (var i = 1; i < argumentsLength; i++) {
	    parameters += "-" + pArguments[i];
	};
	
	return "["+parameters+"]";
}