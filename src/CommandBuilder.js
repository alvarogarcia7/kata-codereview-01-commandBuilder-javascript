function buildCommand(commandNameAndArguments){
	if(!commandNameAndArguments){
		return {};
	}
	return "["+commandNameAndArguments[0]+(commandNameAndArguments[1]?":"+commandNameAndArguments[1]:"")+"]";
}