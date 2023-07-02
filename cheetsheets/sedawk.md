# SED  
## Basic sed Commands:  

    sed 's/<pattern>/<replacement>/' <file>: Replace the first occurrence of a pattern with a replacement in a file.  
    sed 's/<pattern>/<replacement>/g' <file>: Replace all occurrences of a pattern with a replacement in a file.  
    sed 's/<pattern>/<replacement>/2' <file>: Replace the second occurrence of a pattern with a replacement in a file.  
    sed 's/<pattern>/<replacement>/3g' <file>: Replace from the third occurrence onwards of a pattern with a replacement in file.  
    sed '2d' <file>: Delete the second line of a file.  
    sed '2,4d' <file>: Delete lines 2 to 4 of a file.  
    sed '/<pattern>/d' <file>: Delete lines containing a pattern in a file.  

## Pattern Matching and Addresses:  

    sed '/<pattern>/p' <file>: Print lines containing a pattern in a file.  
    sed '/<pattern>/i <text>' <file>: Insert text before lines containing a pattern in a file.  
    sed '/<pattern>/a <text>' <file>: Append text after lines containing a pattern in a file.  
    sed '/<pattern>/c <text>' <file>: Replace lines containing a pattern with specified text in a file.  
    sed '1,3s/<pattern>/<replacement>/' <file>: Replace a pattern with a replacement in lines 1 to 3 of a file.  
    sed '/<pattern1>/,/<pattern2>/d' <file>: Delete lines between pattern1 and pattern2 in a file.  

## Modifying Files In-place:  

    sed -i 's/<pattern>/<replacement>/' <file>: Replace a pattern with a replacement in a file, modifying the file in-place.  
    sed -i.bak 's/<pattern>/<replacement>/' <file>: Replace a pattern with a replacement in a file, creating a backup with a .bak extension.  

## Using Delimiters:  

    sed 's@<pattern>@<replacement>@' <file>: Use @ as the delimiter instead of / in the substitute command.  
    sed 's:<pattern>:<replacement>:' <file>: Use : as the delimiter instead of / in the substitute command.  

## Global Options and Flags:  

    sed -n 's/<pattern>/<replacement>/gp' <file>: Print only lines with replacements in the substitute command.  
    sed -i '/<pattern>/!d' <file>: Delete lines not containing a pattern in a file.  
    sed -i '/<pattern>/!s/<search>/<replacement>/' <file>: Replace a pattern with a replacement only in lines not containing the pattern in a file.  
    sed -e '<command1>' -e '<command2>' <file>: Execute multiple commands sequentially on a file.  

## Advanced sed Commands:  

    sed 'N;s/<pattern1>/<replacement>\n<pattern2>/' <file>: Replace a pattern across two lines in a file.  
    sed '/<pattern>/{<command>}' <file>: Perform a command only on lines containing a pattern in a file.  

# AWK
## Basic awk Commands:  

    awk '{print}' <file>: Print all lines in a file.  
    awk '/<pattern>/' <file>: Print lines containing a pattern in a file.  
    awk '/<pattern>/{print}' <file>: Print lines containing a pattern in a file.  
    awk '{print $<column-number>}' <file>: Print a specific column from each line in a file.  
    awk '{print $0}' <file>: Print the entire line in a file.  

## Advanced awk Commands:

    awk -F<delimiter> '{print $<column-number>}' <file>: Specify a custom field delimiter.  
    awk '/<pattern>/{<command>}' <file>: Perform a command on lines containing a pattern in a file.  
    awk 'NR==<line-number>' <file>: Print a specific line number in a file.  
    awk 'BEGIN{<command>}' <file>: Execute a command before processing the file.  
    awk 'END{<command>}' <file>: Execute a command after processing the file.  

## Using Variables:  

    awk '{<variable>=<value>; <command>}' <file>: Set and use variables in awk.  
    awk '{<variable>+=<value>; <command>}' <file>: Increment variables in awk.  

## String Operations:  

    awk '/<pattern>/{gsub(/<pattern>/, "<replacement>"); print}' <file>: Perform a global string substitution on lines containing a pattern.  
    awk '{<variable>=substr($0, <start>, <length>); <command>}' <file>: Extract a substring from each line in a file.  
    awk '{<variable>=tolower($0); <command>}' <file>: Convert lines to lowercase.  
    awk '{<variable>=toupper($0); <command>}' <file>: Convert lines to uppercase.  
    awk '{<variable>=length($0); <command>}' <file>: Get the length of each line in a file.  

## Mathematical Operations:  

    awk '{<variable>+=<value>; <command>}' <file>: Perform addition on variables in awk.  
    awk '{<variable>-=<value>; <command>}' <file>: Perform subtraction on variables in awk.  
    awk '{<variable>*=<value>; <command>}' <file>: Perform multiplication on variables in awk.  
    awk '{<variable>/=<value>; <command>}' <file>: Perform division on variables in awk.  

## Control Flow:  

    awk '{if (<condition>) {<command>}}' <file>: Perform conditional statements in awk.  
    awk '{for (<variable>=<start>; <variable><=<end>; <variable>++) {<command>}}' <file>: Perform looping in awk.  
