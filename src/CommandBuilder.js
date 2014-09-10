/**
 * SOLID Responsabilidad �nica: el par�metros asume la responsabilidad de 2 par�mtros
 * el command y los arguments
 * Lo romperemos en varios pasos para intentar romper los test
 * los m�s tarde posible
 * 1er paso mantenemos el par�metro y lo rompemos dentro de la funci�n.
 */
function buildCommand(commandNameAndArguments) {
	if(!commandNameAndArguments){
		return {};
	}

	var command,
		arguments;

	command = commandNameAndArguments[0];
	arguments = commandNameAndArguments.slice(1, arguments.length);

	var parameters = "";
	if(commandNameAndArguments.length > 0){
		for (var i = 0; i < commandNameAndArguments.length; i++) {
			if(i === 0){
				parameters += commandNameAndArguments[i];
			} else if(i === 1){
				parameters += ":" + commandNameAndArguments[i];
			//DRY -> Eliminamos c�digo Repetido:
			} else {
				parameters += "-"+commandNameAndArguments[i];
			}
			
		};
	}
	return "["+parameters+"]";
}