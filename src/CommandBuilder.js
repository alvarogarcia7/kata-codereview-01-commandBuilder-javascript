/**
 * SOLID Responsabilidad única: el parámetros asume la responsabilidad de 2 parámtros
 * el command y los arguments
 * Lo romperemos en varios pasos para intentar romper los test
 * los más tarde posible
 * 1er paso mantenemos el parámetro y lo rompemos dentro de la función.
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
			//DRY -> Eliminamos código Repetido:
			} else {
				parameters += "-"+commandNameAndArguments[i];
			}
			
		};
	}
	return "["+parameters+"]";
}