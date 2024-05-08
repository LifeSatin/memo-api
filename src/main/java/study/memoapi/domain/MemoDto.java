package study.memoapi.domain;

import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor()
public class MemoDto {

    private Long id;
    private String title;
    private String content;

    public MemoDto(Memo memo) {
        this.id = memo.getId();
        this.title = memo.getTitle();
        this.content = memo.getContent();
    }

    public MemoDto(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
