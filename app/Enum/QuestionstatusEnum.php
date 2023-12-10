<?php
namespace App\Enum;

enum QuestionstatusEnum:string{
    case ACTIVE = 'active';
    case DEACTIVE = 'deactive';
    case COMPLETE = 'complete';
}
