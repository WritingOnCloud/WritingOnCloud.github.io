
# Grep  
## Basic grep Commands:  

    grep <pattern> <file>: Search for a pattern in a file and print matching lines.  
    grep -i <pattern> <file>: Perform case-insensitive pattern matching.  
    grep -v <pattern> <file>: Invert the match and print non-matching lines.  
    grep -r <pattern> <directory>: Search recursively for a pattern in a directory and its subdirectories.  
    grep -l <pattern> <file>: Print only the filenames that contain the pattern.  
    grep -n <pattern> <file>: Print line numbers along with matching lines.  
    grep -c <pattern> <file>: Count the number of lines that match the pattern.  

## Extended Regular Expressions:  

    grep -E <pattern> <file>: Use extended regular expressions for pattern matching.  
    grep -w <pattern> <file>: Match the whole word only, not substrings.  
    grep -o <pattern> <file>: Print only the matched part of the line.  

## Anchoring and Ranges:  

    grep '^<pattern>' <file>: Match lines starting with the pattern.  
    grep '<pattern>$' <file>: Match lines ending with the pattern.  
    grep '[0-9]' <file>: Match lines containing a digit.  
    grep '[A-Za-z]' <file>: Match lines containing a letter.  
    grep '[A-Z]' <file>: Match lines containing an uppercase letter.  
    grep '[a-z]' <file>: Match lines containing a lowercase letter.  
    grep '[0-9A-Fa-f]' <file>: Match lines containing a hexadecimal digit.  

## Character Classes and Quantifiers:  

    grep '[aeiou]' <file>: Match lines containing any vowel.  
    grep '[0-9]+' <file>: Match lines containing one or more digits.  
    grep 'a{3}' <file>: Match lines containing three consecutive 'a' characters.  
    grep 'a{2,4}' <file>: Match lines containing two to four consecutive 'a' characters.  

## Inverted and Multiple Patterns:  

    grep -v -e <pattern1> -e <pattern2> <file>: Print lines that do not match either pattern1 or pattern2.  
    grep -v -f <pattern_file> <file>: Print lines that do not match any pattern listed in the file.  

## Using grep with Other Commands:  

    command | grep <pattern>: Search for a pattern in the output of a command.  
    grep <pattern> <file1> <file2>: Search for a pattern in multiple files.  
    grep -l <pattern> * | xargs rm: Remove files that contain a specific pattern.  

# Zgrep  
## Basic zgrep Commands:  

    zgrep <pattern> <file>: Search for a pattern in a compressed file and print matching lines.  
    zgrep -i <pattern> <file>: Perform case-insensitive pattern matching.  
    zgrep -v <pattern> <file>: Invert the match and print non-matching lines.  
    zgrep -l <pattern> <file>: Print only the filenames that contain the pattern.  
    zgrep -n <pattern> <file>: Print line numbers along with matching lines.  
    zgrep -c <pattern> <file>: Count the number of lines that match the pattern.  

## Extended Regular Expressions:  

    zgrep -E <pattern> <file>: Use extended regular expressions for pattern matching.  
    zgrep -w <pattern> <file>: Match the whole word only, not substrings.  
    zgrep -o <pattern> <file>: Print only the matched part of the line.  

## Anchoring and Ranges:  

    zgrep '^<pattern>' <file>: Match lines starting with the pattern.  
    zgrep '<pattern>$' <file>: Match lines ending with the pattern.  
    zgrep '[0-9]' <file>: Match lines containing a digit.  
    zgrep '[A-Za-z]' <file>: Match lines containing a letter.  
    zgrep '[A-Z]' <file>: Match lines containing an uppercase letter.  
    zgrep '[a-z]' <file>: Match lines containing a lowercase letter.  
    zgrep '[0-9A-Fa-f]' <file>: Match lines containing a hexadecimal digit.  

## Character Classes and Quantifiers: 

    zgrep '[aeiou]' <file>: Match lines containing any vowel.  
    zgrep '[0-9]+' <file>: Match lines containing one or more digits.  
    zgrep 'a{3}' <file>: Match lines containing three consecutive 'a' characters.  
    zgrep 'a{2,4}' <file>: Match lines containing two to four consecutive 'a' characters.  

## Inverted and Multiple Patterns:  

    zgrep -v -e <pattern1> -e <pattern2> <file>: Print lines that do not match either pattern1 or pattern2.  
    zgrep -v -f <pattern_file> <file>: Print lines that do not match any pattern listed in the file.  

## Using zgrep with Other Commands:  

    command | zgrep <pattern>: Search for a pattern in the output of a command.  
    zgrep <pattern> <file1> <file2>: Search for a pattern in multiple compressed files.  
    zgrep -l <pattern> * | xargs rm: Remove compressed files that contain a specific pattern.  
